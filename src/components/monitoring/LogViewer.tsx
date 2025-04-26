
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Log = {
  timestamp: string;
  level: 'info' | 'warn' | 'error';
  message: string;
};

const SAMPLE_LOGS: Log[] = [
  { timestamp: '2025-04-26 14:32:45', level: 'info', message: 'Container neo4j-graph started successfully' },
  { timestamp: '2025-04-26 14:32:30', level: 'info', message: 'Initializing connection to vector database' },
  { timestamp: '2025-04-26 14:31:55', level: 'warn', message: 'Memory usage approaching threshold (80%)' },
  { timestamp: '2025-04-26 14:30:22', level: 'error', message: 'Failed to connect to external API endpoint' },
  { timestamp: '2025-04-26 14:29:10', level: 'info', message: 'Processing document batch completed' },
  { timestamp: '2025-04-26 14:28:05', level: 'info', message: 'New embedding model loaded' },
  { timestamp: '2025-04-26 14:27:30', level: 'warn', message: 'Slow query detected (>500ms)' },
  { timestamp: '2025-04-26 14:26:15', level: 'info', message: 'Agent router initialized' },
];

const LogViewer = () => {
  const [selectedContainer, setSelectedContainer] = useState<string | undefined>("all");
  const [logLevel, setLogLevel] = useState<string | undefined>("all");
  
  const filteredLogs = SAMPLE_LOGS.filter(log => {
    if (logLevel && logLevel !== 'all') {
      return log.level === logLevel;
    }
    return true;
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Log Viewer</CardTitle>
        <CardDescription>
          Real-time container logs
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2 mb-4">
          <Select value={selectedContainer} onValueChange={setSelectedContainer}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select container" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Containers</SelectItem>
              <SelectItem value="graph-db">Graph DB</SelectItem>
              <SelectItem value="vector-db">Vector DB</SelectItem>
              <SelectItem value="llm-api">LLM API</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={logLevel} onValueChange={setLogLevel}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Log level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="info">Info</SelectItem>
              <SelectItem value="warn">Warning</SelectItem>
              <SelectItem value="error">Error</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="bg-secondary rounded-md p-3 h-64 overflow-y-auto font-mono text-sm">
          {filteredLogs.length === 0 ? (
            <div className="text-center py-4 text-muted-foreground">
              No logs found
            </div>
          ) : (
            <div className="space-y-1">
              {filteredLogs.map((log, index) => (
                <div key={index} className={`py-1 ${
                  log.level === 'error' ? 'text-red-500 dark:text-red-400' :
                  log.level === 'warn' ? 'text-yellow-600 dark:text-yellow-500' : 
                  'text-gray-600 dark:text-gray-400'
                }`}>
                  <span className="text-gray-500 dark:text-gray-500">[{log.timestamp}]</span> {log.message}
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <span className="text-sm text-muted-foreground">
          Showing {filteredLogs.length} logs
        </span>
        <Button variant="outline" size="sm">
          Refresh
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LogViewer;
