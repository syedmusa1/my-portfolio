import Hero from "../../components/hero/hero";
import SkillsPreview from "../../components/skills-preview/skills-preview";
import FeaturedProjects from "../../components/featured-projects/featured-projects";
import LearningJourney from "../../components/learning-journey/learning-journey";

function Home() {
  return (
    <>
      <Hero />
      <SkillsPreview />
      <FeaturedProjects />
      <LearningJourney />
    </>
  );
}

export default Home;