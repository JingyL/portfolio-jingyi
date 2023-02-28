/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation


// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jingyi Lin",
  title: "Hi, I'm Jingyi Lin",
  subTitle: emoji(
    "Career changer and motivated software engineer graduate from Springboard Bootcamp. Have deep knowledge in front end and back end, data structures, algorithms and testing. Fast learner and have good communication skills. Able to work both independently and as part of a team."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1qZ2TuI2vUojctug4tGGcyVFPsJbZCvXe/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/JingyL",
  linkedin: "www.linkedin.com/in/jingyi-lin-developer",
  gmail: "linjingyikayla@gmail.com",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Technical Skills",
  subTitle: "Love to use PERN stack to build projects, and willing to learn other new tech stacks",
  skills: [
    emoji(
      "⚡ other techs includes Flask, jinja, Jasmine testing, pytest and etc."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "postgresql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Springboard Software Engineering Bootcamp",
      logo: require("./assets/images/springboard.png"),
      subHeader: "Certificate",
      duration: "September 2021 - December 2022",
      desc: "700+ hours intensive course in Software Engineering methodologies and technologies Portfolio Projects.",
      // descBullets: [
      //   "Programming Interactive Media I & II", 
      //   "UI/UX Game Design",
      //   "VR/AR/XR Design Theory",
      //   "Data Mining"
      // ]
    },
    {
      schoolName: "Teachers College, Columbia Univedrsity",
      logo: require("./assets/images/tc.png"),
      subHeader: "Master of Art in Instructional Technology - Design and Development of Digital Games",
      duration: "September 2018 - Feburary 2020",
      desc: "Related Courses:",
      descBullets: [
        "Programming Interactive Media I & II", 
        "UI/UX Game Design",
        "VR/AR/XR Design Theory",
        "Data Mining"
      ]
    },
    {
      schoolName: "Boston University",
      logo: require("./assets/images/BU.png"),
      subHeader: "Bachelor of Science in Journalism",
      duration: "September 2014 - May 2018",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Individual& Hackathon Projects",
  subtitle: "Those projects are all full-stack projects done by myself or within team of two",
  projects: [
    {
      image: require("./assets/images/netflixClone.jpeg"),
      projectName: "Netflix Clone",
      projectDesc: "Netflix-Clone is a full stack application frontend with React and backend with Node. Users can search movies, watch trailers and overviews and save movies.",
      footerLink: [
        {
          name: "Visit Website",
          url: "jeflix.surge.sh"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/toDoWeb.jpeg"),
      projectName: "To Do Web App",
      projectDesc: "To Do Web App is a database-driven website using weather API and deployed with Heroku. Through the web app, users can manage their projects and archive past works. ",
      footerLink: [
        {
          name: "Visit Website",
          url: " https://todo-web-jingyi.herokuapp.com/"
        }
      ]
    },
    {
      image: require("./assets/images/realstock.png"),
      projectName: "Real Time Stock",
      projectDesc: "This is a web based stock trading simulator, which users can buy and sell stocks.",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/JingyL/RealTimeStock"
        }
      ]
    },
    {
      image: require("./assets/images/Jobly.jpeg"),
      projectName: "Jobly",
      projectDesc: "Jobly is a web app which users can search companies, opening job positions and applied.",
      footerLink: [
        {
          name: "Visit Website",
          url: "jobly-ljy.surge.sh"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Contact Section

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "I am open to talking with you!",
  number: "857-2056337",
  email_address: "linjingyikayla0@gmail.com"
};


const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  openSource,
  bigProjects,
  contactInfo,
  isHireable,
};
