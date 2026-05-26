interface JobProps {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

const Job = ({ title, company, location, period, responsibilities }: JobProps) => (
  <div className="mb-8 last:mb-0">
    <div className="flex justify-between items-start mb-2">
      <div>
        <h3 className="text-white font-medium">{title}</h3>
        <p className="text-slate-400 text-sm">{company} &middot; {location}</p>
      </div>
      <span className="text-slate-500 text-sm whitespace-nowrap ml-6">{period}</span>
    </div>
    <ul className="mt-3 space-y-2">
      {responsibilities.map((resp, index) => (
        <li key={index} className="flex gap-3 text-sm text-slate-300">
          <span className="text-sky-400 mt-0.5 shrink-0">–</span>
          <span>{resp}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Job;
