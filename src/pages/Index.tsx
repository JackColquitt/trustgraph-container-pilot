
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import DashboardCard from "@/components/dashboard/DashboardCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Box, Ship, Wrench, Database } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleCardClick = (path: string) => {
    navigate(path);
  };
  
  // Sample container data
  const containerStats = {
    total: 6,
    running: 4,
    stopped: 1,
    building: 1
  };

  return (
    <PageLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">TrustGraph Container Management Hub</h1>
        <p className="text-muted-foreground">
          Manage your containerized AI solutions with built-in end-to-end Graph RAG pipelines
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <DashboardCard
            title="Build"
            description="Configure and build containers"
            icon={<Box className="h-5 w-5 text-trustblue-500" />}
            onClick={() => handleCardClick('/build')}
          >
            <div className="mt-2">
              <div className="text-2xl font-semibold">
                {containerStats.building}
              </div>
              <p className="text-muted-foreground text-sm">Building</p>
            </div>
          </DashboardCard>
          
          <DashboardCard
            title="Ship"
            description="Deploy containers"
            icon={<Ship className="h-5 w-5 text-trustteal-500" />}
            onClick={() => handleCardClick('/ship')}
          >
            <div className="mt-2">
              <div className="text-2xl font-semibold">
                2
              </div>
              <p className="text-muted-foreground text-sm">Deployment targets</p>
            </div>
          </DashboardCard>
          
          <DashboardCard
            title="Manage"
            description="Manage container operations"
            icon={<Wrench className="h-5 w-5 text-trustblue-500" />}
            onClick={() => handleCardClick('/manage')}
          >
            <div className="mt-2">
              <div className="text-2xl font-semibold">
                {containerStats.total}
              </div>
              <p className="text-muted-foreground text-sm">Total containers</p>
            </div>
          </DashboardCard>
          
          <DashboardCard
            title="Monitoring"
            description="Real-time metrics and logs"
            icon={<Database className="h-5 w-5 text-trustteal-500" />}
            onClick={() => handleCardClick('/monitoring')}
          >
            <div className="mt-2">
              <div className="text-2xl font-semibold">
                {containerStats.running}
              </div>
              <p className="text-muted-foreground text-sm">Running containers</p>
            </div>
          </DashboardCard>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card className="col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle>Container Status</CardTitle>
              <CardDescription>Overview of all containers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-around">
                <div className="text-center">
                  <div className="text-3xl font-bold">{containerStats.total}</div>
                  <div className="text-sm text-muted-foreground">Total</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500">{containerStats.running}</div>
                  <div className="text-sm text-muted-foreground">Running</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-500">{containerStats.building}</div>
                  <div className="text-sm text-muted-foreground">Building</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500">{containerStats.stopped}</div>
                  <div className="text-sm text-muted-foreground">Stopped</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common operations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <button 
                className="w-full py-2 px-4 bg-secondary rounded-md hover:bg-secondary/80 text-left"
                onClick={() => {
                  toast({
                    title: "Creating new container",
                    description: "Redirecting to build page"
                  });
                  navigate('/build');
                }}
              >
                Create new container
              </button>
              <button 
                className="w-full py-2 px-4 bg-secondary rounded-md hover:bg-secondary/80 text-left"
                onClick={() => {
                  toast({
                    title: "Success",
                    description: "All containers restarted"
                  });
                }}
              >
                Restart all containers
              </button>
              <button 
                className="w-full py-2 px-4 bg-secondary rounded-md hover:bg-secondary/80 text-left"
                onClick={() => {
                  toast({
                    title: "Success",
                    description: "Updated container configurations"
                  });
                }}
              >
                Update configurations
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Index;
