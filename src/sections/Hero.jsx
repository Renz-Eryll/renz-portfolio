import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { words } from "../constants";
import Button from "../components/Button";
import HeroExperience from "../components/models/hero_models/HeroExperience";
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <p className="text-white-50 max-w-xl md:text-xl relative z-10 pointer-events-none">
              Hello, I’m{" "}
              <span className="text-purple-50 font-extrabold">Renz</span>
            </p>

            <div className="hero-text">
              <h1>
                Turning
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="text-purple-50 flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-purple-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>Into Real,</h1>
              <h1>Working Projects</h1>
            </div>

            <Button
              text="Resume"
              className="md:w-60 md:h-16 w-40 h-12"
              href="/files/RenzEryllRameloResume.pdf"
              download
            />
          </div>
        </header>
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
