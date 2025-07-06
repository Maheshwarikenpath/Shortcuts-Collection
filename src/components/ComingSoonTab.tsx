
import { Clock, Bell, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ComingSoonTabProps {
  toolName: string;
  description: string;
}

const ComingSoonTab = ({ toolName, description }: ComingSoonTabProps) => {
  return (
    <div className="text-center py-20">
      <div className="max-w-md mx-auto">
        <div className="text-8xl mb-6">🚀</div>
        
        <h3 className="text-2xl font-bold text-white mb-4">
          {toolName} Documentation
        </h3>
        
        <p className="text-slate-400 text-lg mb-2">
          {description}
        </p>
        
        <p className="text-slate-500 mb-8">
          Comprehensive guides, shortcuts, and power features coming soon!
        </p>
        
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Under Development</span>
          </div>
          
          <div className="space-y-3 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>Advanced prompts & shortcuts</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>Best practices & workflows</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>Integration guides & tips</span>
            </div>
          </div>
        </div>
        
        <Button 
          variant="outline" 
          className="border-purple-400/50 text-purple-200 hover:bg-purple-500/20 backdrop-blur-sm"
        >
          <Bell className="w-4 h-4 mr-2" />
          Notify Me When Ready
        </Button>
        
        <p className="text-xs text-slate-500 mt-4">
          Join 10,000+ developers waiting for updates
        </p>
      </div>
    </div>
  );
};

export default ComingSoonTab;
