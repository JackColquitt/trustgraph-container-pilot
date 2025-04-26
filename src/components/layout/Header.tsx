
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Header: React.FC = () => {
  const { toast } = useToast();

  return (
    <header className="bg-white dark:bg-gray-950 shadow-sm border-b sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-trustblue-500 to-trustteal-500 w-8 h-8 rounded-md flex items-center justify-center">
              <div className="text-white font-bold">TG</div>
            </div>
            <h1 className="text-xl font-bold">
              <span className="text-trustblue-500">Trust</span>
              <span className="text-trustteal-500">Graph</span>
              <span className="ml-1 text-gray-600 dark:text-gray-400 font-normal text-sm">CMH</span>
            </h1>
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="outline"
            size="sm"
            onClick={() => toast({
              title: "Connected to TrustGraph API",
              description: "Successfully connected to the TrustGraph API endpoint"
            })}
          >
            Status: Connected
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
