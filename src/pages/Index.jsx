import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"

const Index = () => {
  const [hackathonName, setHackathonName] = useState('');
  const [hackathonDate, setHackathonDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hackathonName && hackathonDate) {
      toast.success(`Hackathon "${hackathonName}" scheduled for ${hackathonDate}`);
      setHackathonName('');
      setHackathonDate('');
    } else {
      toast.error('Please fill in all fields');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-[350px]">
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
    </div>
  );
};

export default Index;
