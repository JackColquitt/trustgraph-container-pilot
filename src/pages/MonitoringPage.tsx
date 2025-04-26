
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import ContainerMetrics from "@/components/monitoring/ContainerMetrics";
import ContainerStatus from "@/components/monitoring/ContainerStatus";
import LogViewer from "@/components/monitoring/LogViewer";

const MonitoringPage = () => {
  const [containers, setContainers] = useState([
    { 
      id: '1', 
      name: 'neo4j-graph', 
      status: 'running' as const, 
      uptime: '2d 5h 30m',
      restarts: 0,
      cpu: '24%',
      memory: '512MB / 2GB'
    },
    { 
      id: '2', 
      name: 'qdrant-vector', 
      status: 'running' as const,
      uptime: '2d 5h 30m',
      restarts: 1,
      cpu: '15%',
      memory: '1.2GB / 4GB'
    },
    { 
      id: '3', 
      name: 'openai-llm', 
      status: 'running' as const,
      uptime: '1d 12h 45m',
      restarts: 0,
      cpu: '8%',
      memory: '256MB / 1GB'
    },
    { 
      id: '4', 
      name: 'agent-router', 
      status: 'running' as const,
      uptime: '1d 12h 45m',
      restarts: 2,
      cpu: '12%',
      memory: '384MB / 1GB'
    },
    { 
      id: '5', 
      name: 'chunker-service', 
      status: 'stopped' as const,
      uptime: '-',
      restarts: 5,
      cpu: '0%',
      memory: '0MB / 1GB'
    },
    { 
      id: '6', 
      name: 'new-model', 
      status: 'building' as const,
      uptime: '-',
      restarts: 0,
      cpu: '45%',
      memory: '2.8GB / 4GB'
    },
  ]);

  return (
    <PageLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Monitoring</h1>
          <p className="text-muted-foreground">
            Real-time metrics and observability
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ContainerMetrics />
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <ContainerStatus containers={containers} />
          <LogViewer />
        </div>
      </div>
    </PageLayout>
  );
};

export default MonitoringPage;
