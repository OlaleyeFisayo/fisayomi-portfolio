import "./ContactSection.scss";
import email from "../assets/svgs/email.svg"

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="contact-content">
        <div className="contact-title">
          <h1>Contact</h1>
          <h2>Hit me up 👇</h2>
        </div>
        <div className="contact-area">
          <div className="contact-box">
            <span>
                <img src={email} alt="email" />
            </span>
            <div className="contact-info">
              <h1>Mail</h1>
              <p>
                <a href="mailto:festusolaleyef@gmail.com">
                  festusolaleyef@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
