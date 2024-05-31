import twitterIcon from "../assets/social/square-x-twitter.svg";
import linkedinIcon from "../assets/social/linkedin.svg";
import githubIcon from "../assets/social/square-github.svg";
import defaultProjectImg from "../assets/projects/defaultProject.png";

export const personalDetail = {
  name: "CodeversePro",
  role: "Frontend Develope",
  discription:
    "With a passion for developing modern React web apps for commercial businesses",
};

export const socialLinks = [
  {
    label: "Twitter",
    imgUrl: twitterIcon,
    externalLink: "#",
  },
  {
    lable: "LinkedIn",
    imgUrl: linkedinIcon,
    externalLink: "#",
  },
  {
    label: "Github",
    imgUrl: githubIcon,
    externalLink: "#",
  },
];

export const mySkills = [
  "JavaScript",
  "Html",
  "Css",
  "TypeScript",
  "React",
  "Redux and Redux Toolkit",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "Github",
];

export const projects = [
  {
    projectImg: defaultProjectImg,
    projectTitle: "Project 1",
  },
  {
    projectImg: defaultProjectImg,
    projectTitle: "Project 2",
  },
  {
    projectImg: defaultProjectImg,
    projectTitle: "Project 3",
  },
  {
    projectImg: defaultProjectImg,
    projectTitle: "Project 4",
  },
];

export const menu = [
  {
    label: "About-Me",
    url: "#About-Me",
  },
  {
    label: "Skills",
    url: "#Skills",
  },
  {
    label: "Projects",
    url: "#Projects",
  },
  {
    label: "Contact-Me",
    url: "#Contact-Me",
  },
];
