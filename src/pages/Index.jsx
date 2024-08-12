import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const Index = () => {
  const [hackathonName, setHackathonName] = useState('');
  const [hackathonDate, setHackathonDate] = useState('');
  const [hackathonDescription, setHackathonDescription] = useState('');
  const [hackathons, setHackathons] = useState([
    { 
      name: "CodeFest 2024", 
      date: "2024-06-15",
      description: "A 48-hour coding marathon focused on sustainable tech solutions.",
      projectManagement: "Kanban board available for all teams",
      sustainabilityMetrics: "Carbon footprint calculator integrated",
      communityFeatures: "Team profiles and project showcase"
    },
    { 
      name: "HackInnovate", 
      date: "2024-07-22",
      description: "Innovating for a greener future in urban development.",
      projectManagement: "Agile sprints with daily stand-ups",
      sustainabilityMetrics: "Resource usage tracker for each project",
      communityFeatures: "Mentor matching and networking events"
    },
    { 
      name: "TechCrunch Disrupt", 
      date: "2024-09-10",
      description: "Disrupting industries with eco-friendly technologies.",
      projectManagement: "GitHub integration for code management",
      sustainabilityMetrics: "Energy efficiency leaderboard",
      communityFeatures: "Live pitching sessions and investor connect"
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hackathonName && hackathonDate && hackathonDescription) {
      const newHackathon = { 
        name: hackathonName, 
        date: hackathonDate,
        description: hackathonDescription,
        projectManagement: "To be announced",
        sustainabilityMetrics: "To be announced",
        communityFeatures: "To be announced"
      };
      setHackathons([...hackathons, newHackathon]);
      toast.success(`Hackathon "${hackathonName}" scheduled for ${hackathonDate}`);
      setHackathonName('');
      setHackathonDate('');
      setHackathonDescription('');
    } else {
      toast.error('Please fill in all fields');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-4xl">
        <Card className="w-full md:w-1/2">
          <CardHeader>
            <CardTitle>Hackzter</CardTitle>
            <CardDescription>Schedule your next hackathon</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="hackathonName">Hackathon Name</Label>
                <Input
                  id="hackathonName"
                  value={hackathonName}
                  onChange={(e) => setHackathonName(e.target.value)}
                  placeholder="Enter hackathon name"
                />
              </div>
              <div>
                <Label htmlFor="hackathonDate">Date</Label>
                <Input
                  id="hackathonDate"
                  type="date"
                  value={hackathonDate}
                  onChange={(e) => setHackathonDate(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="hackathonDescription">Description</Label>
                <Input
                  id="hackathonDescription"
                  value={hackathonDescription}
                  onChange={(e) => setHackathonDescription(e.target.value)}
                  placeholder="Enter hackathon description"
                />
              </div>
              <Button type="submit" className="w-full">Schedule Hackathon</Button>
            </form>
          </CardContent>
        </Card>
        
        <Card className="w-full md:w-1/2">
          <CardHeader>
            <CardTitle>Upcoming Hackathons</CardTitle>
            <CardDescription>Your scheduled events</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] w-full rounded-md border p-4">
              <Accordion type="single" collapsible className="w-full">
                {hackathons.sort((a, b) => new Date(a.date) - new Date(b.date)).map((hackathon, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger>
                      <div className="flex flex-col items-start">
                        <h3 className="font-semibold">{hackathon.name}</h3>
                        <p className="text-sm text-gray-500">{new Date(hackathon.date).toLocaleDateString()}</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p><strong>Description:</strong> {hackathon.description}</p>
                        <p><strong>Project Management:</strong> {hackathon.projectManagement}</p>
                        <p><strong>Sustainability Metrics:</strong> {hackathon.sustainabilityMetrics}</p>
                        <p><strong>Community Features:</strong> {hackathon.communityFeatures}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
