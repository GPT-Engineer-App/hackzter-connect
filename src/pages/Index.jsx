import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"
import { ScrollArea } from "@/components/ui/scroll-area"

const Index = () => {
  const [hackathonName, setHackathonName] = useState('');
  const [hackathonDate, setHackathonDate] = useState('');
  const [hackathons, setHackathons] = useState([
    { name: "CodeFest 2024", date: "2024-06-15" },
    { name: "HackInnovate", date: "2024-07-22" },
    { name: "TechCrunch Disrupt", date: "2024-09-10" }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hackathonName && hackathonDate) {
      const newHackathon = { name: hackathonName, date: hackathonDate };
      setHackathons([...hackathons, newHackathon]);
      toast.success(`Hackathon "${hackathonName}" scheduled for ${hackathonDate}`);
      setHackathonName('');
      setHackathonDate('');
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
            <ScrollArea className="h-[300px] w-full rounded-md border p-4">
              {hackathons.sort((a, b) => new Date(a.date) - new Date(b.date)).map((hackathon, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <h3 className="font-semibold">{hackathon.name}</h3>
                  <p className="text-sm text-gray-500">{new Date(hackathon.date).toLocaleDateString()}</p>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
