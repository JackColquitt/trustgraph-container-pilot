
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

type Container = {
  id: string;
  name: string;
  status: 'running' | 'stopped' | 'building';
};

type ContainerControlsProps = {
  containers: Container[];
  onStartContainer: (id: string) => void;
  onStopContainer: (id: string) => void;
  onRestartContainer: (id: string) => void;
}

const ContainerControls = ({ 
  containers, 
  onStartContainer,
  onStopContainer,
  onRestartContainer 
}: ContainerControlsProps) => {
  const { toast } = useToast();
  
  const handleAction = (action: string, container: Container) => {
    switch (action) {
      case 'start':
        onStartContainer(container.id);
        toast({
          title: "Container Started",
          description: `${container.name} has been started`
        });
        break;
      case 'stop':
        onStopContainer(container.id);
        toast({
          title: "Container Stopped",
          description: `${container.name} has been stopped`
        });
        break;
      case 'restart':
        onRestartContainer(container.id);
        toast({
          title: "Container Restarted",
          description: `${container.name} has been restarted`
        });
        break;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Container Controls</CardTitle>
        <CardDescription>Manage your running containers</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {containers.length === 0 ? (
            <div className="text-center py-4 text-muted-foreground">
              No containers found
            </div>
          ) : (
            containers.map((container) => (
              <div
                key={container.id}
                className="flex items-center justify-between p-4 bg-secondary rounded-lg"
              >
                <div className="space-y-1">
                  <div className="font-medium">{container.name}</div>
                  <div className="flex items-center">
                    <div className={`h-2 w-2 rounded-full mr-2 ${
                      container.status === 'running' ? 'bg-green-500' : 
                      container.status === 'building' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}></div>
                    <span className="text-sm capitalize text-muted-foreground">{container.status}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  {container.status === 'stopped' ? (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => handleAction('start', container)}
                    >
                      Start
                    </Button>
                  ) : (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => handleAction('stop', container)}
                    >
                      Stop
                    </Button>
                  )}
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => handleAction('restart', container)}
                  >
                    Restart
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContainerControls;
