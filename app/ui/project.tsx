interface ProjectProps {
  name: string;
  description: string;
  link: string;
  futureGoals?: string;
  demoVideo?: string;
}

const Project: React.FC<ProjectProps> = ({
  name,
  link,
  description,
  futureGoals,
  demoVideo,
}) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      <h1 className="font-bold text-2xl mb-2">{name}</h1>
      <p className="mb-2">
        <a
          href={link}
          className="text-blue-500 hover:text-blue-800 transition duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
      <p className="text-gray-700 text-base">{description}</p>
      {futureGoals && <p className="text-gray-700 text-base">{futureGoals}</p>}
      {demoVideo && <p className="text-gray-700 text-base">{demoVideo}</p>}
    </div>
  );
};

export default Project;
