const Job = require("../models/Job");
const User = require("../models/User");
const Notification = require("../models/Notification");

exports.createJob = async (req, res) => {
  const { title, description, budget } = req.body;

  try {
    const user = await User.findById(req.user._id);
    if (!user || user.role !== "client") {
      return res.status(403).json({ message: "Only clients can post jobs" });
    }

    const job = await Job.create({
      title,
      description,
      budget,
      client: req.user._id,
    });

    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find()
      .populate("client", "name email")
      .sort({ createdAt: -1 });

    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.applyJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });

    const alreadyApplied = job.applications.some(
      (a) => a.freelancer.toString() === req.user._id.toString()
    );

    if (alreadyApplied) {
      return res.status(400).json({ message: "Already applied" });
    }

    job.applications.push({ freelancer: req.user._id });
    await job.save();

    await Notification.create({
      user: job.client,
      title: "New Application",
      message: `A freelancer applied for "${job.title}"`,
      type: "job",
    });

    res.json({ message: "Applied successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMyApplications = async (req, res) => {
  try {
    const jobs = await Job.find({
      "applications.freelancer": req.user._id,
    }).populate("client", "name email");

    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMyPostedJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ client: req.user._id })
      .populate("applications.freelancer", "name email");

    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateApplicationStatus = async (req, res) => {
  const { jobId, freelancerId } = req.params;
  const { status } = req.body;

  if (!["accepted", "rejected"].includes(status)) {
    return res.status(400).json({ message: "Invalid status" });
  }

  try {
    const job = await Job.findOne({
      _id: jobId,
      client: req.user._id,
      "applications.freelancer": freelancerId,
    });

    if (!job) {
      return res.status(404).json({ message: "Application not found" });
    }

    const application = job.applications.find(
      (a) => a.freelancer.toString() === freelancerId
    );

    application.status = status;
    await job.save();

    if (status === "accepted") {
      job.assignedFreelancer = freelancerId;
      await job.save();

      await Notification.create({
        user: freelancerId,
        title: "Application Accepted",
        message: `You were accepted for the job "${job.title}"`,
        type: "job",
      });
    }

    res.json({ message: "Status updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
