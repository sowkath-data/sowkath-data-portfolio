import React, { useState } from 'react';
import { 
  Code2, 
  Boxes, 
  BarChart3, 
  Cpu, 
  Layers, 
  Database, 
  FileSpreadsheet, 
  PieChart, 
  Terminal,
  Search,
  Check,
  Sparkles
} from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';
import { SkillCategory } from '../types';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Boxes':
        return <Boxes className="w-5 h-5 text-cyan-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-cyan-400" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-5 h-5 text-cyan-400" />;
      case 'PieChart':
        return <PieChart className="w-5 h-5 text-cyan-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-cyan-400" />;
      default:
        return <Code2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredCategories = RESUME_DATA.skillCategories.filter((cat) => {
    const matchesCategory = selectedCategory === 'all' || cat.id === selectedCategory;
    if (!searchQuery.trim()) return matchesCategory;

    const query = searchQuery.toLowerCase();
    const matchesCatName = cat.category.toLowerCase().includes(query);
    const matchesAnySkill = cat.skills.some((s) => s.toLowerCase().includes(query));

    return matchesCategory && (matchesCatName || matchesAnySkill);
  });

  const totalSkillCount = RESUME_DATA.skillCategories.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
              04 / Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              Technical Skills
            </h2>
            <div className="w-12 h-1 bg-cyan-500 mt-3 rounded-full" />
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="skill-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g., VLOOKUP, SQL)..."
              className="w-full bg-slate-900 border border-slate-800 text-slate-200 text-xs sm:text-sm rounded-lg pl-9 pr-4 py-2.5 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 placeholder:text-slate-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-slate-400 hover:text-white absolute right-3 top-1/2 -translate-y-1/2"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-8 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-cyan-400 text-slate-950 font-semibold shadow-sm'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            All Skills ({totalSkillCount})
          </button>

          {RESUME_DATA.skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-cyan-400 text-slate-950 font-semibold shadow-sm'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800">
                      {getCategoryIcon(cat.iconName)}
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {cat.category}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                    {cat.skills.length}
                  </span>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cat.skills.map((skill) => {
                    const isHighlighted =
                      searchQuery.trim().length > 0 &&
                      skill.toLowerCase().includes(searchQuery.toLowerCase());

                    return (
                      <span
                        key={skill}
                        className={`inline-block px-2.5 py-1 rounded text-xs transition-colors ${
                          isHighlighted
                            ? 'bg-cyan-500/30 text-cyan-200 border border-cyan-400 font-semibold'
                            : 'bg-slate-950/70 hover:bg-slate-800 text-slate-300 border border-slate-800/90'
                        } ${
                          cat.id === 'sql-database' || cat.id === 'excel'
                            ? 'font-mono text-[11px]'
                            : ''
                        }`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Exact raw string preview footer */}
              <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-slate-500 truncate">
                <span className="font-mono text-slate-600">Resume entry:</span> {cat.rawText}
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 bg-slate-900/50 rounded-2xl border border-slate-800 text-slate-400">
            No technical skills found matching "{searchQuery}".
          </div>
        )}

      </div>
    </section>
  );
};
