import React from "react";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Footer from "../components/footer/Footer";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Profile from "./profile/Profile";
import {StyleProvider} from "../contexts/StyleContext";
import "./Main.scss";

const Main = () => {

  return (
    <div>
      <StyleProvider value={{isDark: false}}>
        {/* {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : ( */}
          <>
            <Greeting />
            <Skills />
            <Projects />
            <StartupProject />
            <Education />
            <StackProgress />
            <Profile />
            <Footer />
            <ScrollToTopButton />
          </>
        
      </StyleProvider>
    </div>
  );
};

export default Main;