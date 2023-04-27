import "./AboutSection.scss";
import aboutImg from "../assets/images/about-img.webp";
import workingEmoji from "../assets/images/working-emoji.c5325f52b5be329995a5.png";
import text from "../assets/svgs/text.svg";

export default function AboutSection() {
  return (
    <section id="about">
      <div className="about-content">
        <div className="img-side">
          <img src={aboutImg} alt="about img" className="about-img"/>
          <span>
            <img src={text} alt="text" />
            <img src={workingEmoji} alt="Working Emoji" />
          </span>
        </div>
        <div className="text-side">
          <h1>About Me</h1>
          <h3>A dedicated Front-end Web developer</h3>
          <p>
            Being a front-end developer, I have a passion for responsive design
            and a strong ambition to learn new skills. I've mastered HTML, CSS,
            JavaScript, and front-end frameworks, including React, through
            self-study and perseverance. I've developed my abilities through
            creating numerous responsive websites. I take pride in my ability to
            design user interfaces that are simple to understand, and I have a
            keen eye for detail. My expertise has taught me how to successfully
            debug code and resolve challenging issues. I am convinced that I
            would be a solid candidate for any frontend development role given
            the combination of my schooling, self-taught skills, and passion for
            the field.
          </p>
        </div>
      </div>
    </section>
  );
}
