
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const PromptManager = () => {
  const [systemPrompt, setSystemPrompt] = useState(
    "You are an AI assistant for TrustGraph. Answer questions concisely and accurately based on the provided context."
  );
  const [queryPrompt, setQueryPrompt] = useState(
    "Use the following pieces of context to answer the question at the end. If you don't know the answer, just say that you don't know, don't try to make up an answer.\n\n{context}\n\nQuestion: {query}\nAnswer:"
  );
  
  const [agentPrompt, setAgentPrompt] = useState(
    "You are an AI agent with the following tools at your disposal: {tools}. Use these tools to complete the user's request effectively."
  );
  
  const [routerPrompt, setRouterPrompt] = useState(
    "Based on the user query, determine which of the following agents would be best suited to handle this request: {agents}."
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Prompt Manager</CardTitle>
        <CardDescription>
          Configure the prompts used in different parts of the pipeline
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="system">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="system">System</TabsTrigger>
            <TabsTrigger value="query">Query</TabsTrigger>
            <TabsTrigger value="agent">Agent</TabsTrigger>
            <TabsTrigger value="router">Router</TabsTrigger>
          </TabsList>
          
          <TabsContent value="system">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">System Prompt</span>
                <Button variant="outline" size="sm">
                  Reset to Default
                </Button>
              </div>
              <Textarea 
                value={systemPrompt}
                onChange={(e) => setSystemPrompt(e.target.value)}
                rows={6}
                placeholder="Enter system prompt..."
              />
            </div>
          </TabsContent>
          
          <TabsContent value="query">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Query Prompt</span>
                <Button variant="outline" size="sm">
                  Reset to Default
                </Button>
              </div>
              <Textarea 
                value={queryPrompt}
                onChange={(e) => setQueryPrompt(e.target.value)}
                rows={6}
                placeholder="Enter query prompt..."
              />
              <div className="text-sm text-muted-foreground">
                Use <code>{"{context}"}</code> and <code>{"{query}"}</code> as placeholders.
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="agent">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Agent Prompt</span>
                <Button variant="outline" size="sm">
                  Reset to Default
                </Button>
              </div>
              <Textarea 
                value={agentPrompt}
                onChange={(e) => setAgentPrompt(e.target.value)}
                rows={6}
                placeholder="Enter agent prompt..."
              />
              <div className="text-sm text-muted-foreground">
                Use <code>{"{tools}"}</code> as placeholder for available tools.
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="router">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Router Prompt</span>
                <Button variant="outline" size="sm">
                  Reset to Default
                </Button>
              </div>
              <Textarea 
                value={routerPrompt}
                onChange={(e) => setRouterPrompt(e.target.value)}
                rows={6}
                placeholder="Enter router prompt..."
              />
              <div className="text-sm text-muted-foreground">
                Use <code>{"{agents}"}</code> as placeholder for available agents.
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default PromptManager;
