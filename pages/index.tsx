import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import centerImage from "../components/images/Center Image.jpg";
import Image from "next/image";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
// import { fetchExperiences } from "../utils/fetchExperiences";
// import { fetchPageInfo } from "../utils/fetchPageInfo";
// import { fetchProjects } from "../utils/fetchProjects";
// import { fetchSkills } from "../utils/fetchSkills";
// import { fetchSocial } from "../utils/fetchSocials";
import { GetStaticProps, NextPage } from "next";
import { fetchPageInfo } from "../lib/fetchPageInfo";
import { fetchExperiences } from "../lib/fetchExperiences";
import { fetchProjects } from "../lib/fetchProjects";
import { fetchSkills } from "../lib/fetchSkills";
import { fetchSocial } from "../lib/fetchSocials";
type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  // Debugging

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>{`${pageInfo?.name || "Default Title"} - Portfolio`}</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <footer className="sticky bottom-5 w-full">
        <div className="flex items-center justify-center">
          {/* Use the Link component without the nested <a> */}
          <Link href="#hero" className="cursor-pointer">
            <Image
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0"
              src={centerImage} // Use the imported image object here
              alt="Centered"
              width={40} // Specify the width of the image
              height={40} // Specify the height of the image
            />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  let pageInfo, experiences, skills, projects, socials;

  try {
    pageInfo = await fetchPageInfo();
  } catch (error) {
    console.error("Error fetching page info:", error);
    pageInfo = null; // Handle the error as needed
  }

  try {
    experiences = await fetchExperiences();
  } catch (error) {
    console.error("Error fetching experiences:", error);
    experiences = null;
    // Handle the error
  }

  try {
    skills = await fetchSkills();
  } catch (error) {
    console.error("Error fetching skills:", error);
    // Handle the error
  }

  try {
    projects = await fetchProjects();
  } catch (error) {
    console.error("Error fetching projects:", error);
    // Handle the error
  }

  try {
    socials = await fetchSocial();
  } catch (error) {
    console.error("Error fetching socials:", error);
    // Handle the error
  }

  // Check if all required data is available
  if (!pageInfo || !experiences || !skills || !projects || !socials) {
    // Handle the scenario where one or more essential data pieces are missing.
    // You could return a 404 status, or provide default data, etc.
    return {
      notFound: true,
    };
  }

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10, // In seconds
  };
};
