
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "next-themes";
import { useState } from "react";

const Settings = () => {
  const { theme, setTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john@example.com",
    bio: "Administrator",
    notifications: true,
    marketing: false
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>
              Customize the appearance of the application
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Theme</Label>
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant={theme === "light" ? "default" : "outline"} 
                  onClick={() => setTheme("light")}
                >
                  Light
                </Button>
                <Button 
                  variant={theme === "dark" ? "default" : "outline"} 
                  onClick={() => setTheme("dark")}
                >
                  Dark
                </Button>
                <Button 
                  variant={theme === "system" ? "default" : "outline"} 
                  onClick={() => setTheme("system")}
                >
                  System
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>
              Update your personal information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Input 
                  id="bio" 
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="notifications"
                  name="notifications"
                  checked={formData.notifications}
                  onChange={handleInputChange}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <Label htmlFor="notifications">Enable notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="marketing"
                  name="marketing"
                  checked={formData.marketing}
                  onChange={handleInputChange}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <Label htmlFor="marketing">Receive marketing emails</Label>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
