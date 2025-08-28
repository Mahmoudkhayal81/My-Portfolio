import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Projects.css";
import restaurantImg from "../../assets/Screenshot.jpg";
import movieImg from "../../assets/Screenshot2.jpg";

function Projects() {
  return (
    <section className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        <ProjectCard
          image={restaurantImg}
          title="Restaurant Website"
          description="A responsive restaurant website built with React.js, Vite, and Tailwind CSS."
          demoLink="https://mahmoudkhayal81.github.io/Rstaurant/"
          githubLink="https://github.com/Mahmoudkhayal81/Rstaurant"
        />
        <ProjectCard
          image={movieImg}
          title="Movie Recommendation"
          description="A web app for movie and series recommendations using React.js."
          demoLink="https://movie-recommendation-nu-five.vercel.app/"
          githubLink="https://github.com/Mahmoudkhayal81/Movie-Recommendation"
        />
      </div>
    </section>
  );
}

export default Projects;
