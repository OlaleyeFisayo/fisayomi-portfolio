import gsap from "gsap";
import { Link } from "react-router-dom";

interface LinksProps {
  className: string;
  link: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
}

export default function Links({ className, link, onClick }: LinksProps) {
  function scrollTo(link: string) {
    gsap.to(window, {
      scrollTo: {
        y: `${link}`,
        // offsetY: 60
      },
      scrollBehavior: "smooth",
    });
    if (onClick) {
      onClick;
    }
  }

  return (
    <span>
      {link.startsWith("#") ? (
        <a
          href={`${link.split(",")[0]}`}
          className={`${className} cursor-pointer`}
          onClick={() => scrollTo(link.split(",")[0])}
        >
          {link.split("#")}
        </a>
      ) : (
        <Link to={link} className={className} onClick={onClick}>
          {link.split("/")}
        </Link>
      )}
    </span>
  );
}
