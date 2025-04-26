
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Container = {
  id: string;
  name: string;
  status: 'running' | 'stopped' | 'building';
  uptime: string;
  restarts: number;
  cpu: string;
  memory: string;
};

type ContainerStatusProps = {
  containers: Container[];
};

const ContainerStatus = ({ containers }: ContainerStatusProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Container Status</CardTitle>
        <CardDescription>
          Current status of all containers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left font-medium py-2 px-3">Name</th>
                <th className="text-left font-medium py-2 px-3">Status</th>
                <th className="text-left font-medium py-2 px-3">Uptime</th>
                <th className="text-right font-medium py-2 px-3">Restarts</th>
                <th className="text-right font-medium py-2 px-3">CPU</th>
                <th className="text-right font-medium py-2 px-3">Memory</th>
              </tr>
            </thead>
            <tbody>
              {containers.map((container) => (
                <tr key={container.id} className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-3 px-3">{container.name}</td>
                  <td className="py-3 px-3">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      container.status === 'running' ? 'container-status-active' : 
                      container.status === 'building' ? 'container-status-building' : 'container-status-stopped'
                    }`}>
                      {container.status}
                    </span>
                  </td>
                  <td className="py-3 px-3">{container.uptime}</td>
                  <td className="py-3 px-3 text-right">{container.restarts}</td>
                  <td className="py-3 px-3 text-right">{container.cpu}</td>
                  <td className="py-3 px-3 text-right">{container.memory}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContainerStatus;
