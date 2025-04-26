
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import ContainerControls from "@/components/manage/ContainerControls";
import KnowledgeCore from "@/components/manage/KnowledgeCore";

const ManagePage = () => {
  const [containers, setContainers] = useState([
    { id: '1', name: 'neo4j-graph', status: 'running' as const },
    { id: '2', name: 'qdrant-vector', status: 'running' as const },
    { id: '3', name: 'openai-llm', status: 'running' as const },
    { id: '4', name: 'agent-router', status: 'running' as const },
    { id: '5', name: 'chunker-service', status: 'stopped' as const },
    { id: '6', name: 'new-model', status: 'building' as const },
  ]);
  
  const handleStartContainer = (id: string) => {
    setContainers(
      containers.map((c) => 
        c.id === id ? { ...c, status: 'running' as const } : c
      )
    );
  };
  
  const handleStopContainer = (id: string) => {
    setContainers(
      containers.map((c) => 
        c.id === id ? { ...c, status: 'stopped' as const } : c
      )
    );
  };
  
  const handleRestartContainer = (id: string) => {
    const container = containers.find(c => c.id === id);
    if (container && container.status === 'running') {
      setContainers(
        containers.map((c) => 
          c.id === id ? { ...c, status: 'stopped' as const } : c
        )
      );
      
      // Simulate restart delay
      setTimeout(() => {
        setContainers(
          containers.map((c) => 
            c.id === id ? { ...c, status: 'running' as const } : c
          )
        );
      }, 1000);
    }
  };

  return (
    <PageLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Manage</h1>
          <p className="text-muted-foreground">
            Control and manage your running containers
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <ContainerControls 
            containers={containers} 
            onStartContainer={handleStartContainer}
            onStopContainer={handleStopContainer}
            onRestartContainer={handleRestartContainer}
          />
          <KnowledgeCore />
        </div>
      </div>
    </PageLayout>
  );
};

export default ManagePage;
