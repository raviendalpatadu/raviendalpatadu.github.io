import { Suspense, lazy } from "react";
import LoadingSpinner from "./components/LoadingSpinner";

const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <div className="bg-slate-900 text-slate-50 min-h-screen overflow-x-hidden">
      <Suspense fallback={<LoadingSpinner />}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
