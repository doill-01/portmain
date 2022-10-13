import Skill from "./Skill";
import React from "react";
import "./Skill.css";
const Skills = () => {
  return (
    <div className="skill">
      <div className="Frontend">
        <h2>Frontend</h2>
      </div>
      <div className="skillsGrid">
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          alt="The logo icon for react"
          title="React"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
          alt="The logo icon for HTML 5"
          title="HTML 5"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
          alt="The logo icon for CSS3"
          title="CSS 3"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
          alt="The logo icon for GitHub"
          title="GitHub"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
          alt="The logo icon for NPM"
          title="NPM"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="The logo icon for NodeJS"
          title="Node JS"
        />
      </div>

      <div className="Backend">
        <h2>Backend</h2>
      </div>
      <div className="skillsGrid">
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
          alt="The logo icon for react"
          title="React"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
          alt="The logo icon for HTML 5"
          title="HTML 5"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          alt="The logo icon for CSS3"
          title="CSS 3"
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg"
          alt="The logo icon for NPM"
          title="NPM"
        />
      </div>
    </div>
  );
};

export default Skills;
