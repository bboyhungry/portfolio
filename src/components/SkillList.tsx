interface Skill {
  category: string;
  items: string[];
}

interface SkillListProp {
  skills: Skill[];
}

const SkillList = ({ skills }: SkillListProp) => (
  <div className="space-y-4">
    {skills.map(({ category, items }) => (
      <div key={category} className="flex gap-4 items-start">
        <span className="text-slate-500 text-sm w-24 shrink-0 pt-0.5">{category}</span>
        <div className="flex flex-wrap gap-2">
          {items.map(item => (
            <span key={item} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700">
              {item}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default SkillList;
