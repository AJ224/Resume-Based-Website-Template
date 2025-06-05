"use client"

import { useState, useEffect } from "react"
import {
  ChevronDown,
  Mail,
  Phone,
  Github,
  Linkedin,
  Download,
  ArrowUp,
  ExternalLink,
  Calendar,
  MapPin,
  Award,
  GraduationCap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)

      // Update active section based on scroll position
      const sections = ["home", "about", "experience", "projects", "skills", "awards", "education", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 },
    )

    // Observe all sections
    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-teal-600">AJ</div>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                    activeSection === item.toLowerCase() ? "text-teal-600" : "text-gray-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50">
          <div className="absolute inset-0 opacity-30">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-teal-400 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-teal-600 to-blue-600 bg-clip-text text-transparent">
              Abhinandan Jain
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 font-light">
              Software Engineer | Cloud & Backend Developer | Tech Innovator
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 text-lg transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-teal-600" />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                AJ
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Passionate software engineer with expertise in cloud-native systems, distributed architectures, and
                innovative technology solutions. I specialize in building scalable backend systems, developing APIs, and
                leading engineering teams to deliver high-impact projects.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With experience spanning from IoT and AR/VR to real-time processing and multilingual applications, I
                thrive on solving complex technical challenges and creating solutions that make a difference.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                {["Python", "Cloud", "APIs", "Linux"].map((skill, index) => (
                  <div
                    key={skill}
                    className={`text-center p-4 bg-gray-50 rounded-lg transition-all duration-500 hover:bg-teal-50 hover:scale-105`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <div className="w-6 h-6 bg-teal-600 rounded"></div>
                    </div>
                    <p className="font-medium text-gray-800">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className={`py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 transition-all duration-1000 ${isVisible.experience ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Experience</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-teal-200"></div>

            <div className="space-y-12">
              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-teal-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="ml-16">
                  <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl text-gray-900">Lead Software Development Engineer</CardTitle>
                          <CardDescription className="text-teal-600 font-medium">
                            Megaconnect Technologies
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="bg-teal-100 text-teal-800">
                          <Calendar className="w-3 h-3 mr-1" />
                          Nov 2023 – Jan 2025
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Developed and maintained 100+ APIs for scalable backend systems</li>
                        <li>• Built remote desktop applications with advanced system optimization</li>
                        <li>• Led a team of 7+ engineers, driving technical excellence and project delivery</li>
                        <li>• Implemented cloud-native solutions and distributed system architectures</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-teal-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="ml-16">
                  <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl text-gray-900">Software Engineering Intern</CardTitle>
                          <CardDescription className="text-teal-600 font-medium">Quest Global</CardDescription>
                        </div>
                        <Badge variant="secondary" className="bg-teal-100 text-teal-800">
                          <Calendar className="w-3 h-3 mr-1" />
                          Jul 2023 – Oct 2023
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Developed BMS (Battery Management System) algorithms</li>
                        <li>• Enhanced system performance through debugging and optimization</li>
                        <li>• Collaborated on automotive software solutions</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Multipurpose Electric Vehicle",
                description:
                  "IoT-enabled electric vehicle designed for specially abled individuals with advanced monitoring and control systems.",
                tech: ["IoT", "Embedded Systems", "Mobile App", "Real-time Monitoring"],
                color: "from-blue-500 to-teal-500",
              },
              {
                title: "Smart Teddy",
                description:
                  "Raspberry Pi-based educational toy with camera integration and real-time monitoring for child safety and learning.",
                tech: ["Raspberry Pi", "Computer Vision", "IoT", "Mobile Integration"],
                color: "from-teal-500 to-green-500",
              },
              {
                title: "IoT + VR Lab",
                description:
                  "AR/VR integrated interactive education system combining physical IoT devices with virtual reality experiences.",
                tech: ["AR/VR", "Unity", "IoT", "Educational Technology"],
                color: "from-purple-500 to-blue-500",
              },
              {
                title: "NLP Multilingual Chat App",
                description:
                  "Real-time translation chat application supporting 50+ languages with advanced NLP processing.",
                tech: ["NLP", "Real-time Processing", "Multilingual", "Chat System"],
                color: "from-pink-500 to-purple-500",
              },
            ].map((project, index) => (
              <Card
                key={project.title}
                className={`group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-teal-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-gray-100 text-gray-700 hover:bg-teal-100 hover:text-teal-800 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-teal-50 group-hover:border-teal-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 transition-all duration-1000 ${isVisible.skills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "Programming",
                skills: ["Python", "JavaScript", "C++", "C#"],
                color: "bg-blue-500",
              },
              {
                category: "Technologies",
                skills: ["Cloud", "ML", "IoT", "AR/VR", "Unity", "Flutter"],
                color: "bg-teal-500",
              },
              {
                category: "Web & Backend",
                skills: ["Node.js", "Flask", "React", "MongoDB", "MySQL"],
                color: "bg-green-500",
              },
              {
                category: "Tools & Platforms",
                skills: ["Git", "ELK Stack", "Linux", "Redis", "Docker"],
                color: "bg-purple-500",
              },
            ].map((skillGroup, index) => (
              <Card
                key={skillGroup.category}
                className={`hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900 flex items-center">
                    <div className={`w-3 h-3 ${skillGroup.color} rounded-full mr-3`}></div>
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {skillGroup.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center justify-between p-2 bg-gray-50 rounded hover:bg-teal-50 transition-colors"
                      >
                        <span className="text-gray-700">{skill}</span>
                        <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${skillGroup.color} rounded-full animate-pulse`}
                            style={{ width: `${80 + Math.random() * 20}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section
        id="awards"
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible.awards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Awards & Certificates</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Quest Ingenium 2023",
                subtitle: "Winner",
                icon: Award,
                color: "from-yellow-400 to-orange-500",
              },
              {
                title: "KPIT Sparkle",
                subtitle: "Top 25",
                icon: Award,
                color: "from-blue-400 to-purple-500",
              },
              {
                title: "Google Certificates",
                subtitle: "Python, OS, AR/VR",
                icon: GraduationCap,
                color: "from-green-400 to-teal-500",
              },
            ].map((award, index) => (
              <Card
                key={award.title}
                className={`text-center hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 hover:scale-105`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${award.color} rounded-full flex items-center justify-center`}
                  >
                    <award.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{award.title}</h3>
                  <p className="text-gray-600">{award.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className={`py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 transition-all duration-1000 ${isVisible.education ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Education</h2>
          <div className="space-y-6">
            {[
              {
                degree: "B.E. in Information Technology",
                institution: "JSCOE Pune",
                score: "83.5%",
                level: "Bachelor's",
              },
              {
                degree: "Higher Secondary Certificate",
                institution: "Pankaj College",
                score: "Distinction",
                level: "HSC",
              },
              {
                degree: "Secondary School Certificate",
                institution: "Pratap Vidya Mandir",
                score: "Distinction",
                level: "SSC",
              },
            ].map((edu, index) => (
              <Card
                key={edu.degree}
                className={`hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">{edu.degree}</h3>
                        <p className="text-gray-600">{edu.institution}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-teal-100 text-teal-800">{edu.score}</Badge>
                      <p className="text-sm text-gray-500 mt-1">{edu.level}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Let's Connect</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, and collaborations. Feel
                free to reach out if you'd like to connect!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-600 hover:text-teal-600 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>abhinandan.jain@email.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 hover:text-teal-600 transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+91 XXXXX XXXXX</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 hover:text-teal-600 transition-colors">
                  <MapPin className="w-5 h-5" />
                  <span>Pune, Maharashtra, India</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-teal-50 hover:border-teal-300 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-teal-50 hover:border-teal-300 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-teal-50 hover:border-teal-300 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Your Name" className="focus:border-teal-500 focus:ring-teal-500" />
                <Input placeholder="Your Email" type="email" className="focus:border-teal-500 focus:ring-teal-500" />
                <Textarea placeholder="Your Message" rows={4} className="focus:border-teal-500 focus:ring-teal-500" />
                <Button className="w-full bg-teal-600 hover:bg-teal-700 transition-colors">Send Message</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Abhinandan Jain. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          size="icon"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  )
}
