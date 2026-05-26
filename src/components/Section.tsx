import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <section className="py-10 border-b border-slate-700 last:border-0">
    <h2 className="text-xs font-semibold tracking-widest text-sky-400 uppercase mb-6">{title}</h2>
    {children}
  </section>
);

export default Section;
