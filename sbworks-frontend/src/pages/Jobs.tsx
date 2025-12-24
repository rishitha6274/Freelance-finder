import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Filter,
  MapPin,
  Clock,
  DollarSign,
  Star,
  Bookmark,
  ChevronDown,
  Briefcase,
  BadgeCheck,
} from "lucide-react";

const jobCategories = [
  "All Categories",
  "Web Development",
  "Mobile Development",
  "UI/UX Design",
  "Graphic Design",
  "Content Writing",
  "Digital Marketing",
  "Video Editing",
  "Data Science",
];

const mockJobs = [
  {
    id: 1,
    title: "Senior React Developer for E-commerce Platform",
    company: "TechVentures Inc.",
    companyVerified: true,
    location: "Remote",
    type: "Full-time Project",
    budget: "$5,000 - $8,000",
    duration: "3 months",
    skills: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    posted: "2 hours ago",
    applications: 12,
    rating: 4.9,
    description: "Looking for an experienced React developer to build a modern e-commerce platform...",
  },
  {
    id: 2,
    title: "UI/UX Designer for Mobile App Redesign",
    company: "StartupHub",
    companyVerified: true,
    location: "Remote",
    type: "Contract",
    budget: "$3,000 - $5,000",
    duration: "6 weeks",
    skills: ["Figma", "UI Design", "Mobile Design", "Prototyping"],
    posted: "5 hours ago",
    applications: 8,
    rating: 4.8,
    description: "We need a talented designer to completely redesign our fitness mobile app...",
  },
  {
    id: 3,
    title: "Full Stack Developer - Educational Platform",
    company: "EduTech Solutions",
    companyVerified: false,
    location: "Hybrid - NYC",
    type: "Part-time",
    budget: "$60 - $80/hr",
    duration: "Ongoing",
    skills: ["Next.js", "Python", "AWS", "MongoDB"],
    posted: "1 day ago",
    applications: 25,
    rating: 4.7,
    description: "Join our team to build the next generation of educational technology...",
  },
  {
    id: 4,
    title: "Content Writer for Tech Blog",
    company: "Digital Media Co",
    companyVerified: true,
    location: "Remote",
    type: "Freelance",
    budget: "$200 - $400/article",
    duration: "Ongoing",
    skills: ["Technical Writing", "SEO", "Research", "Editing"],
    posted: "3 days ago",
    applications: 45,
    rating: 4.6,
    description: "We're looking for experienced tech writers to contribute to our popular blog...",
  },
  {
    id: 5,
    title: "Video Editor for YouTube Channel",
    company: "Creator Studios",
    companyVerified: true,
    location: "Remote",
    type: "Part-time",
    budget: "$1,500 - $2,500/mo",
    duration: "6 months",
    skills: ["Premiere Pro", "After Effects", "Color Grading", "Motion Graphics"],
    posted: "4 days ago",
    applications: 18,
    rating: 4.9,
    description: "Looking for a creative video editor to help produce content for our 500K subscriber channel...",
  },
];

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [savedJobs, setSavedJobs] = useState<number[]>([]);

  const toggleSaveJob = (jobId: number) => {
    setSavedJobs((prev) =>
      prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Find Your <span className="text-gradient-primary">Perfect</span> Project
            </h1>
            <p className="text-lg text-primary-foreground/70 mb-8">
              Browse thousands of jobs tailored to your skills and experience
            </p>

            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-4 bg-card/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search jobs, skills, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 bg-background border-border"
                />
              </div>
              <Button variant="gradient" size="lg" className="h-12">
                <Search className="w-5 h-5 mr-2" />
                Search Jobs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-72 flex-shrink-0"
            >
              <div className="bg-card rounded-2xl p-6 shadow-md border border-border sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-foreground">Filters</h3>
                  <Filter className="w-5 h-5 text-muted-foreground" />
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    Category
                  </label>
                  <div className="space-y-2">
                    {jobCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedCategory === category
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:bg-secondary"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Range */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    Budget Range
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input placeholder="Min" className="text-sm" />
                    <Input placeholder="Max" className="text-sm" />
                  </div>
                </div>

                {/* Project Type */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    Project Type
                  </label>
                  <div className="space-y-2">
                    {["Full-time", "Part-time", "Contract", "Freelance"].map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-border" />
                        <span className="text-sm text-muted-foreground">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Clear Filters
                </Button>
              </div>
            </motion.aside>

            {/* Job Listings */}
            <div className="flex-1">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">{mockJobs.length}</span> jobs found
                </p>
                <Button variant="ghost" className="text-sm">
                  Sort by: Relevance <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </div>

              {/* Job Cards */}
              <div className="space-y-4">
                {mockJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-card rounded-2xl p-6 shadow-md border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="flex-1">
                        {/* Title & Company */}
                        <div className="mb-3">
                          <Link
                            to={`/jobs/${job.id}`}
                            className="text-xl font-bold text-foreground hover:text-primary transition-colors inline-block"
                          >
                            {job.title}
                          </Link>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-muted-foreground">{job.company}</span>
                            {job.companyVerified && (
                              <BadgeCheck className="w-4 h-4 text-primary" />
                            )}
                            <span className="flex items-center gap-1 text-sm text-accent">
                              <Star className="w-3.5 h-3.5 fill-accent" />
                              {job.rating}
                            </span>
                          </div>
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            {job.budget}
                          </span>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {job.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {/* Footer */}
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>Posted {job.posted}</span>
                          <span>•</span>
                          <span>{job.applications} applications</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex md:flex-col gap-2">
                        <Button variant="gradient" asChild>
                          <Link to={`/jobs/${job.id}`}>Apply Now</Link>
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => toggleSaveJob(job.id)}
                          className={savedJobs.includes(job.id) ? "text-accent border-accent" : ""}
                        >
                          <Bookmark
                            className={`w-5 h-5 ${savedJobs.includes(job.id) ? "fill-accent" : ""}`}
                          />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  Load More Jobs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Jobs;
