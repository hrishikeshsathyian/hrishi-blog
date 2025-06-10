

interface ProjectCardProps {
    title: string;
    description: string; 
    tags: string[];
    link: string;
}

const tagToColorMatch: Record<string, string> = {
    Python: "bg-blue-100 text-blue-800",
    JavaScript: "bg-yellow-100 text-yellow-800",
    React: "bg-cyan-100 text-cyan-800",
    Numpy: "bg-green-100 text-green-800",
}


export default function ProjectCard({title, description, tags, link}: ProjectCardProps) {
  return (
    <div className="transition-transform duration-300 ease-in-out hover:scale-[1.02]">
      <a
        href={link}
        target="_blank"
        className="flex flex-col items-center bg-gray-800 border border-blue-300 rounded-lg shadow-sm md:flex-row max-w-xl hover:bg-gray-700 hover:shadow-md hover:ring-2 hover:ring-blue-400 transition-all duration-300"
      > 
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-1 text-lg font-bold tracking-tight text-blue-300">
            {title}
          </h5>
          <p className="mb-1 font-normal text-white">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-1">         
            {tags.map((tag, index) => {
              const tagColor = tagToColorMatch[tag] || "bg-gray-200 text-gray-800";
              return (
                <span
                  key={index}
                  className={`${tagColor} text-xs font-semibold px-2.5 py-0.5 rounded`}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </a>
    </div>
  );
}
