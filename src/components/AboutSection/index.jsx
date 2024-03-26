import "./index.scss";
import aboutImg from "../../assets/images/about-img.webp";
import workingEmoji from "../../assets/images/working-emoji.c5325f52b5be329995a5.png";

export default function AboutSection() {
  return (
    <section id="about">
      <div className="about-content">
        <div className="img-side">
          <img src={aboutImg} alt="about img" className="about-img" />
          <span>
            <img src={workingEmoji} alt="Working Emoji" />
          </span>
        </div>
        <div className="text-side">
          <h1>About Me</h1>
          <h3>A dedicated Full-stack Web developer</h3>
          <p>
            Passion and dedication are at the heart of everything I do in the
            tech world. I believe in the power of technology to transform ideas
            into reality, and my commitment to this belief drives me to
            continually push my boundaries and explore new horizons in full
            stack web development. From the moment I embarked on this journey,
            I've been unwavering in my dedication to honing my skills, staying
            up-to-date with the latest industry trends, and delivering
            high-quality solutions that make a real impact.
          </p>
        </div>
      </div>
    </section>
  );
}
