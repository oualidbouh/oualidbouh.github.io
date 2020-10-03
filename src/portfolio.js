import {Emoji} from "emoji-mart-vue";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Oualid bouh",
  title: "Hi, I am Oualid",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web applications with Vue.js, Node.js/Spring Boot and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/oualidbouh",
  linkedin: "https://www.linkedin.com/in/oualidbouh/",
  gmail: "bouh.oualid@gmail.com",
  gitlab: "https://gitlab.com/oualidbouh",
  facebook: "https://www.facebook.com/walid.bouh",
  stackoverflow: "https://stackoverflow.com/users/10422806/oualidbouh"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop Strong & Secured Backend REST APIs for your web applications"),
    emoji("⚡ Develop highly interactive Front end for your web applications"),
    emoji("⚡ Integration of third party services")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Vue.js",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "yarn",
      fontAwesomeClassname: "fab fa-yarn"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Gitlab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "SQL-database",
      fontAwesomeClassname: "fas fa-database"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Node.js/Express",
      progressPercentage: "90%"
    },
    {
      Stack: "Spring boot",
      progressPercentage: "90%"
    },
    {
      Stack: "Spring cloud",
      progressPercentage: "70%"
    },
    {
      Stack: "Vue.js",
      progressPercentage: "70%"
    },
    {
      Stack: "Angular",
      progressPercentage: "60%"
    }
  ]
};

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",  
      company: "Worldline",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "April 2018 – Present",
      desc: "Software engineer",
      descBullets: [
        "Working on Digital banking project to implement PSD2 in Europe",
        "Integra"
      ]
    },
    {
      role: "Software Engineer Intern",  
      company: "SQLI",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Web Freelancer",  
      company: "Upwork",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "September 2020 – Present",
      desc: "Creating cool webapps with Vue.js and Node.js/Nest.js"
    }
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+33777856197",
  email_address: "bouh.oualid@gmail.com"
};

export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, contactInfo};
