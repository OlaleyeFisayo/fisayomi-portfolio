import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
