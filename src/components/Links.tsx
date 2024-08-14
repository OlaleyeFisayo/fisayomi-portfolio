import { Link } from "react-router-dom";

interface LinksProps {
  className: string;
  link: string;
}

export default function Links({ className, link }: LinksProps) {
  return (
    <span>
      {link.startsWith("#") ? (
        <a href={link} className={className}>
          {link.split("#")}
        </a>
      ) : (
        <Link to={link} className={className}>
          {link.split("/")}
        </Link>
      )}
    </span>
  );
}
