import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Brain, Mic,Stethoscope } from "lucide-react";



const Projects = () => {
  const projects = [
    {
      title: "FramePickr-AI",
      description: "An AI-assisted web application that automatically ranks and selects best-quality photographs using image analysis methods.",
      longDescription: "Developed an intelligent image ranking pipeline that processes photographs using sharpness detection, brightness analysis, and face detection algorithms. Achieved ~85% accuracy across 1,000+ test images with a full-stack deployment.",
      icon: <Brain className="w-6 h-6" />,
      tech: ["Python", "FastAPI", "React.js", "TensorFlow", "OpenCV", "Docker", "GitHub Actions"],
      github: "https://github.com/kdsgit06/FramePickr-AI",
      demo: "https://frame-pickr-ai.vercel.app/",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Podcast Pulse", 
      description: "A web application that transcribes podcasts and extracts structured insights with AI-powered processing",
      longDescription: "Implemented transcription with AssemblyAI and designed an insight extraction pipeline using FastAPI + React. Optimized backend with asynchronous job queues, cutting processing time by 40%, and delivered results via a clean UI",
      icon: <Mic className="w-6 h-6" />,
      tech: ["React.js", "FastAPI", "AssemblyAI", "PostgreSQL", "TailwindCSS","GitHub CI/CD"],
      github: "https://github.com/kdsgit06/podcast-pulse",
      demo: "#",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Telehealth Platform",
      description: "A telehealth solution that connects patients and doctors with appointment scheduling and AI-assisted triage.",
      longDescription: "Built patient and doctor portals with authentication, appointment booking, and history management. Integrated a rule-based triage bot for urgency classification and deployed with FastAPI backend on Hugging Face Spaces and React frontend on Vercel.",
      icon: <Stethoscope className="w-6 h-6" />,
      tech: ["Python", "React.js", "FastAPI", "SQLModel", "TailwindCSS", "JWT", "Vercel / Hugging Face Spaces"],
      github: "https://github.com/kdsgit06/telehealth",
      demo: "#",
      gradient: "from-orange-500 to-red-600",
      isOngoing: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my technical projects spanning AI/ML, full-stack development, and research initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-gradient shadow-soft hover-lift group overflow-hidden">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-accent transition-smooth">
                  {project.title}
                  {project.isOngoing && (
                    <Badge variant="secondary" className="ml-2 text-xs">Ongoing</Badge>
                  )}
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                  {project.longDescription}
                </p>
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Action buttons */}
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    asChild
                    className="flex-1"
                  >
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  {project.demo !== "#" && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            asChild
            className="hover-lift"
          >
            <a 
              href="https://github.com/kdsgit06" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;