import { ArrowRight, ExternalLink, Github, Youtube } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "DEMA: Enhancing Causal Analysis through Data Enrichment and Discovery in Data Lakes",
    description: "A data pipeline that automates data enrichment and discovery in the context of causal learning. Accepted and published to VLDB Workshop TaDa 2024",
    image: "src/assets/dema_logo.png",
    tags: ["Causal Inference", "Data Discovery", "Double Machine Learning"],
    paperUrl: "https://vldb.org/workshops/2024/proceedings/TaDA/TaDA.12.pdf",
    demoUrl: "https://www.youtube.com/watch?v=pqNRdI26qHI",
  },
  {
    id: 2,
    title: "Causal What-If and How-To Analysis Using HYPER",
    description:
      "The paper introduces HYPER, a method for answering what-if and how-to (i.e. counterfactual and intervention) analytic queries in complex data by unifying causal and structural modeling. Accepted and published to IEEE 2023",
    image: "src/assets/hyper.png",
    tags: ["Causal Inference", "Machine Learning", "Database","ETL","Flask"],
    paperUrl: "https://par.nsf.gov/servlets/purl/10400605",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Who's on First: Interactive Batting Lineup Scenarios",
    description:
      "An interactive web application that allows users to explore and visualize different baseball batting lineups using up to date MLB data.",
    image: "/src/assets/baseballSite.png",
    tags: ["React", "Node.js", "Vite", "Tailwind CSS"],
    paperUrl: "https://whosonfirst.vercel.app/",

  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.paperUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Youtube size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/kheravi"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
