import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  MessageSquare,
  Eye,
  TrendingUp,
  Star,
  Clock,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  Award,
  BookOpen,
  Target,
  Zap,
} from "lucide-react";

const stats = [
  { label: "Profile Views", value: "1,247", change: "+12%", icon: Eye, color: "primary" },
  { label: "Jobs Applied", value: "23", change: "+5", icon: Briefcase, color: "accent" },
  { label: "Messages", value: "8", change: "3 new", icon: MessageSquare, color: "primary" },
  { label: "Earnings", value: "$4,280", change: "+18%", icon: TrendingUp, color: "accent" },
];

const recentJobs = [
  {
    id: 1,
    title: "React Developer for E-commerce Platform",
    company: "TechVentures Inc.",
    status: "shortlisted",
    applied: "2 days ago",
    budget: "$5,000 - $8,000",
  },
  {
    id: 2,
    title: "UI/UX Designer for Mobile App",
    company: "StartupHub",
    status: "applied",
    applied: "3 days ago",
    budget: "$3,000 - $5,000",
  },
  {
    id: 3,
    title: "Full Stack Developer - Educational Platform",
    company: "EduTech Solutions",
    status: "hired",
    applied: "1 week ago",
    budget: "$60/hr",
  },
];

const achievements = [
  { name: "First Job Complete", icon: CheckCircle, unlocked: true },
  { name: "Top Rated", icon: Star, unlocked: true },
  { name: "Fast Responder", icon: Clock, unlocked: true },
  { name: "10 Reviews", icon: Award, unlocked: false },
];

const statusColors = {
  applied: "bg-secondary text-secondary-foreground",
  shortlisted: "bg-primary/10 text-primary",
  hired: "bg-green-500/10 text-green-600",
  rejected: "bg-destructive/10 text-destructive",
};

const FreelancerDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Welcome Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-hero rounded-2xl p-8 mb-8"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                  Welcome back, Sarah! 👋
                </h1>
                <p className="text-primary-foreground/70">
                  You have 3 new job matches and 2 unread messages.
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="hero" asChild>
                  <Link to="/jobs">
                    <Briefcase className="w-5 h-5 mr-2" />
                    Find Jobs
                  </Link>
                </Button>
                <Button variant="hero-outline">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Messages
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-md border border-border"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      stat.color === "primary" ? "bg-gradient-primary" : "bg-gradient-accent"
                    }`}
                  >
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-sm text-primary font-medium">{stat.change}</span>
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Job Applications */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-2xl p-6 shadow-md border border-border"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-foreground">Recent Applications</h2>
                  <Link to="/dashboard/applications" className="text-sm text-primary hover:underline flex items-center">
                    View All <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="space-y-4">
                  {recentJobs.map((job) => (
                    <div
                      key={job.id}
                      className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{job.title}</h3>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span>{job.company}</span>
                          <span>•</span>
                          <span>{job.budget}</span>
                          <span>•</span>
                          <span>{job.applied}</span>
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                          statusColors[job.status as keyof typeof statusColors]
                        }`}
                      >
                        {job.status}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* AI Recommendations */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card rounded-2xl p-6 shadow-md border border-border"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">AI Job Matches</h2>
                    <p className="text-sm text-muted-foreground">Personalized recommendations based on your skills</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-primary/30 bg-primary/5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded bg-primary/20 text-primary text-xs font-medium">
                        98% Match
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">Senior UI Designer - Fintech</h3>
                    <p className="text-sm text-muted-foreground mb-3">$70 - $90/hr • Remote</p>
                    <Button variant="outline" size="sm" className="w-full">
                      View Job
                    </Button>
                  </div>

                  <div className="p-4 rounded-xl border border-accent/30 bg-accent/5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded bg-accent/20 text-accent text-xs font-medium">
                        95% Match
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">Product Designer - SaaS</h3>
                    <p className="text-sm text-muted-foreground mb-3">$5,000 - $7,000 • Contract</p>
                    <Button variant="outline" size="sm" className="w-full">
                      View Job
                    </Button>
                  </div>
                </div>
              </motion.section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Profile Completion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="bg-card rounded-2xl p-6 shadow-md border border-border"
              >
                <h3 className="font-bold text-foreground mb-4">Profile Strength</h3>
                <div className="relative mb-4">
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-gradient-primary rounded-full" />
                  </div>
                  <span className="absolute right-0 -top-6 text-sm font-semibold text-primary">85%</span>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-primary">
                    <CheckCircle className="w-4 h-4" />
                    Portfolio added
                  </li>
                  <li className="flex items-center gap-2 text-primary">
                    <CheckCircle className="w-4 h-4" />
                    Skills verified
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <AlertCircle className="w-4 h-4" />
                    Add certifications
                  </li>
                </ul>
              </motion.div>

              {/* Achievements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card rounded-2xl p-6 shadow-md border border-border"
              >
                <h3 className="font-bold text-foreground mb-4">Achievements</h3>
                <div className="grid grid-cols-2 gap-3">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.name}
                      className={`p-3 rounded-xl text-center ${
                        achievement.unlocked
                          ? "bg-primary/10 border border-primary/30"
                          : "bg-secondary/50 opacity-50"
                      }`}
                    >
                      <achievement.icon
                        className={`w-6 h-6 mx-auto mb-2 ${
                          achievement.unlocked ? "text-primary" : "text-muted-foreground"
                        }`}
                      />
                      <span className="text-xs font-medium text-foreground">{achievement.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="bg-card rounded-2xl p-6 shadow-md border border-border"
              >
                <h3 className="font-bold text-foreground mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/profile/edit">
                      <Target className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/portfolio">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Manage Portfolio
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/academy">
                      <Award className="w-4 h-4 mr-2" />
                      SkillTrack Academy
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerDashboard;
