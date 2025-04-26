
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const targets = [
  { id: "aws", name: "AWS", logo: "AWS" },
  { id: "azure", name: "Azure", logo: "Azure" },
  { id: "gcp", name: "GCP", logo: "GCP" },
  { id: "scaleway", name: "Scaleway", logo: "Scaleway" },
  { id: "local", name: "Local", logo: "Local" },
  { id: "other", name: "Other", logo: "Other" },
];

const DeploymentTargets = () => {
  const [selectedTarget, setSelectedTarget] = useState("aws");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Deployment Targets</CardTitle>
        <CardDescription>Select where to deploy your containers</CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedTarget}
          onValueChange={setSelectedTarget}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {targets.map((target) => (
            <div key={target.id} className="flex items-center space-x-2">
              <RadioGroupItem value={target.id} id={target.id} />
              <Label
                htmlFor={target.id}
                className="flex items-center cursor-pointer p-2"
              >
                <div className="bg-secondary rounded-md w-10 h-10 flex items-center justify-center mr-2">
                  <span className="font-medium text-xs">{target.logo}</span>
                </div>
                <span>{target.name}</span>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default DeploymentTargets;
