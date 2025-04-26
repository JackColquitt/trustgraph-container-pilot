
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const generateData = (count: number) => {
  const data = [];
  const now = new Date();
  
  for (let i = count; i >= 0; i--) {
    const time = new Date(now);
    time.setMinutes(now.getMinutes() - i);
    
    data.push({
      time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      cpu: Math.floor(Math.random() * 40) + 10,
      memory: Math.floor(Math.random() * 30) + 20,
    });
  }
  
  return data;
};

const data = generateData(12);

const ContainerMetrics = () => {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Resource Utilization</CardTitle>
        <CardDescription>
          CPU and memory usage over time
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="cpu" stackId="1" stroke="#0073ff" fill="#0073ff" />
              <Area type="monotone" dataKey="memory" stackId="2" stroke="#33fedf" fill="#33fedf" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center mt-4 space-x-6">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-trustblue-500 rounded-full mr-2"></div>
            <span className="text-sm">CPU (%)</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-trustteal-500 rounded-full mr-2"></div>
            <span className="text-sm">Memory (%)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContainerMetrics;
