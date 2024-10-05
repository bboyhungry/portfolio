interface JobProps {
    title: string
    company: string,
    location: string,
    period: string,
    responsibilities: string[]
  }


const Job = (props: JobProps) => {

    const {title, company, location, period, responsibilities } = props;

    return (
    <div className="mb-4">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mb-2">
        {company}<br />
        {location}<br />
        {period}
      </p>
      <ul className="list-disc pl-5">
        {responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </div>
  );
}

export default Job;