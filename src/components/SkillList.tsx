interface Skill {
    category: string;
    items: string[];
}

interface SkillListProp {
    skills: Skill[],
}

const SkillList = (props: SkillListProp) => {
    
    const { skills } = props;
    
    return (
    <ul className="list-disc pl-5">
      {skills.map(({ category, items }) => (
        <li key={category}><strong>{category}</strong>: {items.join(', ')}</li>
      ))}
    </ul>
  );
}

export default SkillList;