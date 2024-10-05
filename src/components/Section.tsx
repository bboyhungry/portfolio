import { ReactNode } from 'react';

interface SectionProps {
    title: string;
    children: ReactNode;
  }

const Section = (props: SectionProps) => {

    const { title, children } = props;
    
    return (
        <section className="mt-8">
            <h2 className="text-xl font-semibold mb-3">{title}</h2>
            {children}
        </section>
    );
}

export default Section;