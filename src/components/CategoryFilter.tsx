
interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  const getCategoryIcon = (category: string) => {
    const icons = {
      all: "🔥",
      basic: "⚡",
      advanced: "🧬",
      creative: "🎨",
      setup: "⚙️",
    };
    return icons[category as keyof typeof icons] || "📝";
  };

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeCategory === category
              ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
              : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white border border-slate-600/30"
          }`}
        >
          <span className="mr-2">{getCategoryIcon(category)}</span>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
