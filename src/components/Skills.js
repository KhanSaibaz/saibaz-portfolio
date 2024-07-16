import React, { useEffect } from "react";
import java from '../assests/image/java1.png'
import python from '../assests/image/python.png'
import php from '../assests/image/php.png'
import Prog from '../assests/image/Cprogramming.png'
import html from '../assests/image/html.png'
import css from '../assests/image/css.png'
import js from '../assests/image/js.png'
import Reacts from '../assests/image/React.png'
import git from '../assests/image/git.png'
import postman from '../assests/image/postman1.png'
import xamps from '../assests/image/xamps.png'
import canva from '../assests/image/canva.png'
import figma from '../assests/image/figma.png'
import boot from '../assests/image/boot.png'
import Mysql from '../assests/image/mysql.png'
import mongo from '../assests/image/mongo.png'

export default function Skills() {
  const skillsData = [
   
    {
      category: "FrontEnd",
      skills: [html, css, js, Reacts]
    },
    {
        category: "Languages",
        skills: [java, python, php, Prog]
      },
      
    {
        category: "Databases & Others",
        skills: [Mysql, boot, mongo]
      },
    {
      category: "Tools",
      skills: [git, postman, xamps,canva,figma]
    }
  ];

  const SkillCategory = ({ category, skills }) => {
    useEffect(() => {
      const skillElements = document.querySelectorAll(`.skill-category[data-category="${category}"] .skill`);
      const angle = 360 / skills.length;
      skillElements.forEach((skill, index) => {
        skill.style.transform = `rotate(${angle * index}deg) translate(100px) rotate(-${angle * index}deg)`;
      });
    }, [category, skills]);

    return (
      <>
      <div className="skill-category" id="skillsection" data-category={category}>
        <div className="skill-inner rotating mb-4 mt-4">
          <h6 className="category-text">{category} </h6>
          <div className="skills">
            {skills.map((skill, index) => (
              <div key={index} className="skill">
                <img src={skill} alt={`Skill ${index}`} style={{ width: '300%', height:'150%', borderRadius: '50%' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
        </>
    );
  };

  return (
    <div className="skills-container">
      {skillsData.map((data, index) => (
        <SkillCategory key={index} category={data.category} skills={data.skills} />
      ))}
    </div>
  );
}