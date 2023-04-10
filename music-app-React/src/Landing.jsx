import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "./groovyWalk.json";

const Landing = () => (
  <section className="container">
    <Lottie
      style={{ height: 500 }}
      animationData={groovyWalkAnimation}
      loop={true}
    />
    <article>
      <h1>
        Enjoy the feel of <span>good music</span>
      </h1>
      <div className="btn__container">
        <button className="btn">Get Started</button>
        <button className="btn right">Sign in</button>
      </div>
    </article>
  </section>
);

export default Landing;
