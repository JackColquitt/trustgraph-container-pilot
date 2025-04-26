
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const ContainerOptions = () => {
  const [containerType, setContainerType] = useState("docker");
  const [graphStore, setGraphStore] = useState("neo4j");
  const [vectorDB, setVectorDB] = useState("qdrant");
  const [chunkerType, setChunkerType] = useState("recursive");
  const [chunkSize, setChunkSize] = useState(1000);
  const [chunkOverlap, setChunkOverlap] = useState(200);
  const [llmProvider, setLlmProvider] = useState("openai");
  const [temperature, setTemperature] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState(1000);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Container Platform</CardTitle>
          <CardDescription>Select the container platform to build on</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup
            defaultValue={containerType}
            onValueChange={setContainerType}
            className="flex space-x-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="docker" id="docker" />
              <Label htmlFor="docker">Docker</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="kubernetes" id="kubernetes" />
              <Label htmlFor="kubernetes">Kubernetes</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Tabs defaultValue="database" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="database">Database</TabsTrigger>
          <TabsTrigger value="chunking">Chunking</TabsTrigger>
          <TabsTrigger value="llm">LLM Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="database" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Graph Store</CardTitle>
              <CardDescription>Select the graph database for your knowledge graph</CardDescription>
            </CardHeader>
            <CardContent>
              <Select value={graphStore} onValueChange={setGraphStore}>
                <SelectTrigger>
                  <SelectValue placeholder="Select graph store" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cassandra">Cassandra</SelectItem>
                  <SelectItem value="memgraph">Memgraph</SelectItem>
                  <SelectItem value="neo4j">Neo4j</SelectItem>
                  <SelectItem value="falkordb">FalkorDB</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vector Database</CardTitle>
              <CardDescription>Select the vector database for embeddings</CardDescription>
            </CardHeader>
            <CardContent>
              <Select value={vectorDB} onValueChange={setVectorDB}>
                <SelectTrigger>
                  <SelectValue placeholder="Select vector database" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="qdrant">Qdrant</SelectItem>
                  <SelectItem value="milvus">Milvus</SelectItem>
                  <SelectItem value="pinecone">Pinecone</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="chunking" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Chunker Type</CardTitle>
              <CardDescription>Select how documents should be chunked</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup
                defaultValue={chunkerType}
                onValueChange={setChunkerType}
                className="flex space-x-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="recursive" id="recursive" />
                  <Label htmlFor="recursive">Recursive</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="token" id="token" />
                  <Label htmlFor="token">Token</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Chunk Size</CardTitle>
              <CardDescription>Define size of each text chunk</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Size: {chunkSize}</span>
              </div>
              <Input 
                type="number" 
                value={chunkSize}
                onChange={(e) => setChunkSize(parseInt(e.target.value) || 0)}
                min={100} 
                max={8000}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Chunk Overlap</CardTitle>
              <CardDescription>Define overlap between chunks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Overlap: {chunkOverlap}</span>
              </div>
              <Input 
                type="number" 
                value={chunkOverlap}
                onChange={(e) => setChunkOverlap(parseInt(e.target.value) || 0)}
                min={0} 
                max={1000}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="llm" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>LLM Provider</CardTitle>
              <CardDescription>Select your LLM provider</CardDescription>
            </CardHeader>
            <CardContent>
              <Select value={llmProvider} onValueChange={setLlmProvider}>
                <SelectTrigger>
                  <SelectValue placeholder="Select LLM provider" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="azure">Azure</SelectItem>
                  <SelectItem value="azureopenai">Azure OpenAI</SelectItem>
                  <SelectItem value="anthropic">Anthropic</SelectItem>
                  <SelectItem value="bedrock">AWS Bedrock</SelectItem>
                  <SelectItem value="cohere">Cohere</SelectItem>
                  <SelectItem value="google">Google AI Studio</SelectItem>
                  <SelectItem value="llamafiles">Llamafiles</SelectItem>
                  <SelectItem value="lmstudio">LM Studio</SelectItem>
                  <SelectItem value="mistral">Mistral</SelectItem>
                  <SelectItem value="ollama">Ollama</SelectItem>
                  <SelectItem value="openai">OpenAI</SelectItem>
                  <SelectItem value="vertexai">Vertex AI</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Temperature</CardTitle>
              <CardDescription>Controls randomness: Lower values yield more predictable outputs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Temperature: {temperature.toFixed(1)}</span>
              </div>
              <Slider
                defaultValue={[temperature]}
                max={2}
                step={0.1}
                onValueChange={(value) => setTemperature(value[0])}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Max Output Tokens</CardTitle>
              <CardDescription>Maximum tokens in LLM response</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Max tokens: {maxTokens}</span>
              </div>
              <Input 
                type="number" 
                value={maxTokens}
                onChange={(e) => setMaxTokens(parseInt(e.target.value) || 0)}
                min={100} 
                max={32000}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContainerOptions;
