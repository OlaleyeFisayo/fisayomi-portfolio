import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function About() {
  //   useGSAP(() => {
  //     gsap
  //       .timeline({
  //         scrollTrigger: {
  //           trigger: "#about",
  //           start: "top 60%",
  //           toggleActions: "restart none none reverse",
  //         },
  //       })
  //       .to(["#home", "#about"], {
  //         duration: 0.1,
  //         backgroundColor: "black",
  //         ease: "back.in",
  //       })
  //       .to("#hamburger", {
  //         duration: 0.1,
  //         opacity: 1,
  //         display: "flex",
  //       });
  //   });

  return (
    <section
      className="section-max-width grid min-h-[100dvh] w-full place-items-center"
      id="about"
    >
      <h1 className="text-4xl font-bold text-neutral-500 md:text-5xl lg:text-7xl xl:text-8xl">
        I create elevating digital experiences that inspire and connect with
        people through development.
      </h1>
    </section>
  );
}
