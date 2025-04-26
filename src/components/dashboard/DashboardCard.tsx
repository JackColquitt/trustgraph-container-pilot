
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type DashboardCardProps = {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

const DashboardCard: React.FC<DashboardCardProps> = ({ 
  title, 
  description, 
  icon, 
  className,
  children, 
  onClick 
}) => {
  return (
    <Card 
      className={cn("card-hover", onClick && "cursor-pointer", className)} 
      onClick={onClick}
    >
      <CardHeader className="flex flex-row items-start space-y-0 pb-2">
        {icon && <div className="mr-2 mt-1">{icon}</div>}
        <div>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default DashboardCard;
