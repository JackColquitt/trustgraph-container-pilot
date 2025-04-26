
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageLayout from "@/components/layout/PageLayout";
import ContainerOptions from "@/components/build/ContainerOptions";
import PromptManager from "@/components/build/PromptManager";
import SecretsManager from "@/components/build/SecretsManager";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const BuildPage = () => {
  const { toast } = useToast();
  
  const handleBuild = () => {
    toast({
      title: "Build Started",
      description: "Container build process has been initiated"
    });
  };

  return (
    <PageLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Build</h1>
            <p className="text-muted-foreground">
              Configure and build containers
            </p>
          </div>
          <Button size="lg" onClick={handleBuild}>
            Build Container
          </Button>
        </div>
        
        <Tabs defaultValue="container" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="container">Container Options</TabsTrigger>
            <TabsTrigger value="prompt">Prompt Manager</TabsTrigger>
            <TabsTrigger value="secrets">Secrets Manager</TabsTrigger>
          </TabsList>
          
          <TabsContent value="container">
            <ContainerOptions />
          </TabsContent>
          
          <TabsContent value="prompt">
            <PromptManager />
          </TabsContent>
          
          <TabsContent value="secrets">
            <SecretsManager />
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default BuildPage;
