
import PageLayout from "@/components/layout/PageLayout";
import DeploymentTargets from "@/components/ship/DeploymentTargets";
import EnvironmentConfig from "@/components/ship/EnvironmentConfig";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ShipPage = () => {
  const { toast } = useToast();
  
  const handleDeploy = () => {
    toast({
      title: "Deployment Started",
      description: "Container deployment process has been initiated"
    });
  };

  return (
    <PageLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Ship</h1>
            <p className="text-muted-foreground">
              Deploy containers to your target environments
            </p>
          </div>
          <Button size="lg" onClick={handleDeploy}>
            Deploy Containers
          </Button>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <DeploymentTargets />
          <EnvironmentConfig />
        </div>
      </div>
    </PageLayout>
  );
};

export default ShipPage;
