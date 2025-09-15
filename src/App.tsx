import { Navbar} from "./components/NavBar/Navbar.tsx";
import { Hero} from "./components/Hero/Hero.tsx";
import { About} from "./components/About/About.tsx";
import { Skills} from "./components/Skills/Skills.tsx";
import { Projects} from "./components/Projects/Projects.tsx";
import { Contact} from "./components/Contact/Contact.tsx";
import { Footer} from "./components/Footer/Footer.tsx";
import "./styles/global.css";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}

export default App;