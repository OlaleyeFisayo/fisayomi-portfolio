import { Link } from "react-router-dom";

interface LinksProps {
  className: string;
  link: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
}

export default function Links({ className, link, onClick }: LinksProps) {
  return (
    <span>
      {link.startsWith("#") ? (
        <a href={link} className={className} onClick={onClick}>
          {link.split("#")},
        </a>
      ) : (
        <Link to={link} className={className} onClick={onClick}>
          {link.split("/")}
        </Link>
      )}
    </span>
  );
}
