
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface PromptCardProps {
  title: string;
  shortcut: string;
  description: string;
  example: string;
  category: string;
}

const PromptCard = ({ title, shortcut, description, example, category }: PromptCardProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast({
        title: "Copied!",
        description: `"${shortcut}" copied to clipboard`,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please try selecting and copying manually",
        variant: "destructive",
      });
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      basic: "bg-blue-500/20 text-blue-200 border-blue-500/30",
      advanced: "bg-purple-500/20 text-purple-200 border-purple-500/30",
      creative: "bg-green-500/20 text-green-200 border-green-500/30",
      setup: "bg-orange-500/20 text-orange-200 border-orange-500/30",
    };
    return colors[category as keyof typeof colors] || colors.basic;
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className={`px-2 py-1 text-xs rounded-full border ${getCategoryColor(category)}`}>
              {category}
            </span>
            <h3 className="text-lg font-semibold text-white group-hover:text-purple-200 transition-colors">
              {title}
            </h3>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-500 uppercase tracking-wider">Shortcut</span>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => copyToClipboard(shortcut)}
              className="h-8 w-8 p-0 hover:bg-purple-500/20 text-slate-400 hover:text-purple-300"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </Button>
          </div>
          <code className="text-purple-300 font-mono text-sm bg-purple-500/10 px-2 py-1 rounded">
            {shortcut}
          </code>
        </div>

        <div className="bg-slate-900/30 rounded-lg p-4 border border-slate-600/20">
          <span className="text-xs text-slate-500 uppercase tracking-wider block mb-2">Example</span>
          <p className="text-slate-300 text-sm italic">
            {example}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromptCard;
