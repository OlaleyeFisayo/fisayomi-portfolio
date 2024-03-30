import logo from "../assets/logo.png";
import { formatMonth } from "../functions";
import { welcomeSectionProps } from "../types";

export default function WelcomeSection({
  currentYear,
  currentMonth,
}: welcomeSectionProps) {
  return (
    <div className="shutter w-screen h-[100dvh] bg-beige">
      <nav>
        <img src={logo} alt="logo" />
        <div>
          <h1>
            Available for work {formatMonth(currentMonth)} {currentYear}
          </h1>
        </div>
      </nav>
    </div>
  );
}
