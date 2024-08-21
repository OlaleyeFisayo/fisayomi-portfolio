import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
