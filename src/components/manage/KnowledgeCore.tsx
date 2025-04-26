
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const KnowledgeCore = () => {
  const { toast } = useToast();
  const [coreName, setCoreName] = useState("");
  
  const savedCores = [
    { id: "1", name: "Product Documentation", date: "2025-04-25", size: "1.2 GB" },
    { id: "2", name: "Customer Support", date: "2025-04-24", size: "0.8 GB" },
    { id: "3", name: "Research Papers", date: "2025-04-20", size: "2.5 GB" },
  ];

  const handleCreateCore = () => {
    if (!coreName) {
      toast({
        title: "Missing Information",
        description: "Please enter a name for your knowledge core",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Creating Knowledge Core",
      description: `Starting creation of '${coreName}'`,
    });
  };
  
  const handleLoadCore = (id: string, name: string) => {
    toast({
      title: "Knowledge Core Loaded",
      description: `Successfully loaded '${name}'`,
    });
  };
  
  const handleSaveCore = (id: string, name: string) => {
    toast({
      title: "Knowledge Core Saved",
      description: `Successfully saved '${name}'`,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Knowledge Core Management</CardTitle>
        <CardDescription>
          Create, save and load knowledge cores
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-4 border-b pb-4">
          <h3 className="text-sm font-medium">Create New Knowledge Core</h3>
          <div className="flex space-x-2">
            <div className="flex-1">
              <Input
                placeholder="Enter knowledge core name"
                value={coreName}
                onChange={(e) => setCoreName(e.target.value)}
              />
            </div>
            <Button onClick={handleCreateCore}>Create Core</Button>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Saved Knowledge Cores</h3>
          <div className="space-y-2">
            {savedCores.map((core) => (
              <div key={core.id} className="flex items-center justify-between p-3 bg-secondary rounded-md">
                <div>
                  <div className="font-medium">{core.name}</div>
                  <div className="text-sm text-muted-foreground">
                    Created: {core.date} • Size: {core.size}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8"
                    onClick={() => handleLoadCore(core.id, core.name)}
                  >
                    Load
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8"
                    onClick={() => handleSaveCore(core.id, core.name)}
                  >
                    Save
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default KnowledgeCore;
