
import { useState, useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import PromptCard from "@/components/PromptCard";
import ComingSoonTab from "@/components/ComingSoonTab";
import { promptsData, categories } from "@/data/prompts";
import { Code, GitBranch, Terminal, MessageSquare, Zap, Container, Globe, BookOpen } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPrompts = useMemo(() => {
    let filtered = promptsData;

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter(prompt => prompt.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(prompt =>
        prompt.title.toLowerCase().includes(query) ||
        prompt.shortcut.toLowerCase().includes(query) ||
        prompt.description.toLowerCase().includes(query) ||
        prompt.example.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="py-8 px-6 text-center border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            🛠️ AI Tools & Development Hub
          </h1>
          <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 text-sm">
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-purple-200">2025 Edition - Latest Shortcuts</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="chatgpt" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8 mb-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
              <TabsTrigger value="chatgpt" className="flex items-center gap-2 data-[state=active]:bg-purple-600/20 data-[state=active]:text-purple-200">
                🧠 ChatGPT
              </TabsTrigger>
              <TabsTrigger value="vscode" className="flex items-center gap-2 data-[state=active]:bg-purple-600/20 data-[state=active]:text-purple-200">
                <Code className="w-4 h-4" />
                VS Code
              </TabsTrigger>
              <TabsTrigger value="git" className="flex items-center gap-2 data-[state=active]:bg-purple-600/20 data-[state=active]:text-purple-200">
                <GitBranch className="w-4 h-4" />
                Git & GitHub
              </TabsTrigger>
              <TabsTrigger value="terminal" className="flex items-center gap-2 data-[state=active]:bg-purple-600/20 data-[state=active]:text-purple-200">
                <Terminal className="w-4 h-4" />
                Terminal
              </TabsTrigger>
              <TabsTrigger value="slack" className="flex items-center gap-2 data-[state=active]:bg-purple-600/20 data-[state=active]:text-purple-200">
                <MessageSquare className="w-4 h-4" />
                Slack
              </TabsTrigger>
              <TabsTrigger value="postman" className="flex items-center gap-2 data-[state=active]:bg-purple-600/20 data-[state=active]:text-purple-200">
                <Zap className="w-4 h-4" />
                Postman
              </TabsTrigger>
              <TabsTrigger value="docker" className="flex items-center gap-2 data-[state=active]:bg-purple-600/20 data-[state=active]:text-purple-200">
                <Container className="w-4 h-4" />
                Docker
              </TabsTrigger>
              <TabsTrigger value="devtools" className="flex items-center gap-2 data-[state=active]:bg-purple-600/20 data-[state=active]:text-purple-200">
                <Globe className="w-4 h-4" />
                DevTools
              </TabsTrigger>
            </TabsList>

            {/* ChatGPT Tab Content */}
            <TabsContent value="chatgpt" className="space-y-8">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 text-sm mb-4">
                  <span className="text-purple-200">🧠 ChatGPT Shortcuts Collection</span>
                </div>
                <p className="text-slate-400">
                  {promptsData.length} powerful shortcuts to unlock ChatGPT's hidden features
                </p>
              </div>

              <div className="space-y-8">
                <SearchBar onSearch={setSearchQuery} placeholder="Search ChatGPT shortcuts..." />
                <CategoryFilter 
                  categories={categories}
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory}
                />
              </div>

              {/* Prompts Grid */}
              <div className="mt-12">
                {filteredPrompts.length > 0 ? (
                  <>
                    <div className="text-center mb-8">
                      <p className="text-slate-400">
                        Showing {filteredPrompts.length} shortcuts
                        {activeCategory !== "all" && ` in ${activeCategory}`}
                        {searchQuery && ` matching "${searchQuery}"`}
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredPrompts.map((prompt) => (
                        <PromptCard
                          key={prompt.id}
                          title={prompt.title}
                          shortcut={prompt.shortcut}
                          description={prompt.description}
                          example={prompt.example}
                          category={prompt.category}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="text-center py-16">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold text-white mb-2">No shortcuts found</h3>
                    <p className="text-slate-400">
                      Try adjusting your search or category filter
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>

            {/* Code Editors & IDEs */}
            <TabsContent value="vscode">
              <ComingSoonTab 
                toolName="Visual Studio Code" 
                description="Master VS Code with keyboard shortcuts, extensions, snippets, and productivity hacks for faster development."
              />
            </TabsContent>

            {/* Version Control & Git */}
            <TabsContent value="git">
              <ComingSoonTab 
                toolName="Git & GitHub" 
                description="Git mastery, GitHub Actions, collaboration workflows, pull request automation, and repository management."
              />
            </TabsContent>

            {/* Terminal & Shell */}
            <TabsContent value="terminal">
              <ComingSoonTab 
                toolName="Terminal & Shell" 
                description="Master terminal commands, shell scripting, tmux sessions, and productivity shortcuts for command-line efficiency."
              />
            </TabsContent>

            {/* Collaboration & Communication */}
            <TabsContent value="slack">
              <ComingSoonTab 
                toolName="Slack" 
                description="Master Slack productivity with advanced shortcuts, workflow automation, custom commands, and team collaboration tips."
              />
            </TabsContent>

            {/* API Development & Testing */}
            <TabsContent value="postman">
              <ComingSoonTab 
                toolName="Postman" 
                description="Advanced API testing techniques, automation scripts, collection management, and workflow optimization."
              />
            </TabsContent>

            {/* Container & DevOps */}
            <TabsContent value="docker">
              <ComingSoonTab 
                toolName="Docker" 
                description="Container optimization, Docker Compose patterns, multi-stage builds, and deployment strategies."
              />
            </TabsContent>

            {/* Browser DevTools */}
            <TabsContent value="devtools">
              <ComingSoonTab 
                toolName="Browser DevTools" 
                description="Chrome DevTools mastery, debugging techniques, performance optimization, and web development shortcuts."
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400 text-sm">
            Built for developers, by developers. More AI tools and shortcuts coming soon! 🚀
          </p>
          <p className="text-slate-500 text-xs mt-2">
            AI Tools Hub - Your centralized development toolkit
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
