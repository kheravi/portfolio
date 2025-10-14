import { BeakerIcon, Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Data Scientist and Computer Programmer
            </h3>

            <p className="text-muted-foreground">
              With data sicence publications in top-tier journals and a track record of
              successful projects, I bring a blend of analytical rigor and
              creative problem-solving to every challenge I tackle.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about data science and programming, and I'm always
              eager to apply my skills to new and exciting projects such as making
              baseball sites, game applications, and sports research papers in addition
              to my data science work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="public/kayvonheravi_resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BeakerIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Data Science</h4>
                  <p className="text-muted-foreground">
                    With research published in top-tier journals, I excel in
                    extracting insights from complex datasets using causal inference.
                    Going one step beyond tradiditional data analysis, I seek to
                    find explainability, data sensitivity, and trustworthiness in my 
                    models.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Software Programming</h4>
                  <p className="text-muted-foreground">
                    Proficient in multiple programming languages including Python,
                    Java, SQL, I have taught for over 3 years at university/college level 
                    and built various applications ranging from web development to
                    data-driven solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects and teams to success in my team as a researcher
                    and lead teaching assistant. I excel in coordinating efforts,
                    managing timelines, and ensuring successful project delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
