
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

type Secret = {
  id: string;
  name: string;
  value: string;
  type: 'api_key' | 'connection_string' | 'password' | 'other';
};

const SecretsManager = () => {
  const { toast } = useToast();
  const [secrets, setSecrets] = useState<Secret[]>([
    { id: '1', name: 'OPENAI_API_KEY', value: '••••••••••••••••••••••••••••••', type: 'api_key' },
    { id: '2', name: 'NEO4J_CONNECTION', value: '••••••••••••••••••••••••••••••', type: 'connection_string' },
  ]);
  
  const [newSecret, setNewSecret] = useState({
    name: '',
    value: '',
    type: 'api_key' as const,
  });

  const handleSaveSecret = () => {
    if (!newSecret.name || !newSecret.value) {
      toast({
        title: "Missing Information",
        description: "Please provide both a name and value for the secret",
        variant: "destructive"
      });
      return;
    }
    
    setSecrets([
      ...secrets,
      {
        id: Date.now().toString(),
        ...newSecret
      }
    ]);
    
    setNewSecret({
      name: '',
      value: '',
      type: 'api_key',
    });
    
    toast({
      title: "Secret Added",
      description: `${newSecret.name} has been added to your secrets`,
    });
  };
  
  const handleDeleteSecret = (id: string) => {
    setSecrets(secrets.filter(secret => secret.id !== id));
    toast({
      title: "Secret Removed",
      description: "The secret has been removed",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Secrets Management</CardTitle>
        <CardDescription>
          Securely store API tokens and connection strings
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Current Secrets</h3>
          <div className="space-y-2">
            {secrets.map((secret) => (
              <div key={secret.id} className="flex items-center justify-between p-3 bg-secondary rounded-md">
                <div>
                  <div className="font-medium">{secret.name}</div>
                  <div className="text-sm text-muted-foreground">{secret.value}</div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8"
                    onClick={() => {
                      toast({
                        title: "Secret Revealed",
                        description: "Secret value shown in console (for demo only)",
                      });
                      console.log(`Secret ${secret.name}: Demo Value`);
                    }}
                  >
                    Show
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8"
                    onClick={() => handleDeleteSecret(secret.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-4 pt-4 border-t">
          <h3 className="text-sm font-medium">Add New Secret</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="secret-name">Secret Name</Label>
              <Input
                id="secret-name"
                placeholder="e.g. API_KEY"
                value={newSecret.name}
                onChange={(e) => setNewSecret({...newSecret, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="secret-type">Secret Type</Label>
              <select
                id="secret-type"
                className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                value={newSecret.type}
                onChange={(e) => setNewSecret({
                  ...newSecret, 
                  type: e.target.value as 'api_key' | 'connection_string' | 'password' | 'other'
                })}
              >
                <option value="api_key">API Key</option>
                <option value="connection_string">Connection String</option>
                <option value="password">Password</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="secret-value">Secret Value</Label>
              <Input
                id="secret-value"
                type="password"
                placeholder="Enter secret value"
                value={newSecret.value}
                onChange={(e) => setNewSecret({...newSecret, value: e.target.value})}
              />
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-end">
        <Button onClick={handleSaveSecret}>Save Secret</Button>
      </CardFooter>
    </Card>
  );
};

export default SecretsManager;
