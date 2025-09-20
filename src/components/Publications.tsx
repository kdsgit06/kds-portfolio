import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Calendar, ExternalLink, Award } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "Safe Lunar Landings Using Reinforcement Learning and Chandrayaan-2 OHRC Imagery",
      conference: "IEEE NMITCON-2025",
      status: "To appear in IEEE Xplore",
      year: "2025",
      description: "Applied reinforcement learning on Chandrayaan-2 imagery for hazard detection and landing site selection",
      category: "Research",
      link: "#",
      isUpcoming: true
    },
    {
      title: "Echoes of Gender: Voice Identity with Neural Networks",
      conference: "Hinweis CCIT-2024",
      status: "Published",
      year: "2024", 
      description: "Explored gender classification from voice patterns using deep neural networks",
      category: "AI/ML",
      link: "https://www.bing.com/ck/a?!&&p=0507e8dbf9201bc56affb92de9d36a2481437ff3a281dc6506a651198a38b44eJmltdHM9MTc1ODA2NzIwMA&ptn=3&ver=2&hsh=4&fclid=2ec2dd86-f965-6b5e-2f28-ce41f8c86ab0&psq=Echoes+of+Gender%3a+Voice+Identity+with+Neural+Networks+2024+Hin&u=a1aHR0cHM6Ly90aGVncmVuemUuY29tL3BhZ2VzL3NlcnZlai5waHA_Zm49Mzc2LnBkZiZuYW1lPUVjaG9lcyUyMG9mJTIwR2VuZGVyOiUyMFVudmVpbGluZyUyMFZvaWNlJTIwSWRlbnRpdHklMjB3aXRoTmV1cmFsJTIwTmV0d29ya3MmaWQ9NDIwMiZhc3NvY2lhdGlvbj1HUkVOWkUmam91cm5hbD1HSUpFVCZ5ZWFyPTIwMjUmdm9sdW1lPTExJmlzc3VlPTE",
      isUpcoming: false
    }
  ];

  return (
    <section id="publications" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Publications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Published and upcoming research in AI and ML.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {publications.map((pub, index) => (
            <Card key={index} className="card-gradient shadow-soft hover-lift group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg text-accent group-hover:bg-accent/20 transition-smooth">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {pub.isUpcoming && (
                      <Badge variant="secondary" className="bg-amber-100 text-amber-800 border-amber-200">
                        <Award className="w-3 h-3 mr-1" />
                        Upcoming
                      </Badge>
                    )}
                    <Badge variant="outline" className="text-xs">
                      {pub.category}
                    </Badge>
                  </div>
                </div>
                
                <CardTitle className="text-xl leading-tight mb-3 group-hover:text-accent transition-smooth">
                  {pub.title}
                </CardTitle>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {pub.year}
                  </div>
                  <div className="font-medium text-foreground">
                    {pub.conference}
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground font-medium">
                  {pub.status}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                  {pub.description}
                </p>
                
                <div className="flex justify-between items-center">
                  {pub.link !== "#" ? (
                    <Button 
                      size="sm" 
                      asChild
                      className="hover-lift"
                    >
                      <a 
                        href={pub.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Read Paper
                      </a>
                    </Button>
                  ) : (
                    <Badge variant="secondary" className="text-xs">
                      {pub.isUpcoming ? "Publication Pending" : "Link Coming Soon"}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            More publications coming soon as I continue my research in Computer Science and AI/ML .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Publications;