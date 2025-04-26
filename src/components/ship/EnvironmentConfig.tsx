
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const EnvironmentConfig = () => {
  const { toast } = useToast();
  
  const handleSave = () => {
    toast({
      title: "Configuration Saved",
      description: "Your environment configuration has been saved",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Environment Configuration</CardTitle>
        <CardDescription>
          Configure environment settings for your deployment
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="aws">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="aws">AWS</TabsTrigger>
            <TabsTrigger value="azure">Azure</TabsTrigger>
            <TabsTrigger value="gcp">GCP</TabsTrigger>
          </TabsList>
          
          <TabsContent value="aws" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="aws-region">AWS Region</Label>
                <Input id="aws-region" placeholder="e.g. us-east-1" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="aws-key">AWS Access Key ID</Label>
                <Input id="aws-key" placeholder="AWS Access Key" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="aws-secret">AWS Secret Access Key</Label>
                <Input id="aws-secret" placeholder="AWS Secret" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="aws-cluster">ECS Cluster</Label>
                <Input id="aws-cluster" placeholder="Cluster name" />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="azure" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="azure-region">Azure Region</Label>
                <Input id="azure-region" placeholder="e.g. eastus" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="azure-tenant">Tenant ID</Label>
                <Input id="azure-tenant" placeholder="Azure Tenant ID" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="azure-app">App ID</Label>
                <Input id="azure-app" placeholder="Azure App ID" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="azure-secret">Client Secret</Label>
                <Input id="azure-secret" placeholder="Azure Client Secret" type="password" />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="gcp" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="gcp-project">GCP Project ID</Label>
                <Input id="gcp-project" placeholder="e.g. my-project-id" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gcp-region">GCP Region</Label>
                <Input id="gcp-region" placeholder="e.g. us-central1" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gcp-zone">GCP Zone</Label>
                <Input id="gcp-zone" placeholder="e.g. us-central1-a" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gcp-cluster">GKE Cluster</Label>
                <Input id="gcp-cluster" placeholder="Cluster name" />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button variant="outline" className="mr-2">Reset</Button>
        <Button onClick={handleSave}>Save Configuration</Button>
      </CardFooter>
    </Card>
  );
};

export default EnvironmentConfig;
