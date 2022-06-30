import "./App.css";
import Intro from "./components/common/Intro";
import Navbar from "./components/common/Navbar";
import Services from "./components/common/Skills";
import Works from "./components/common/Works";
import Contact from "./components/common/Contact";
function App() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<Intro />
				<Services />
				<Works />
				<Contact />
			</main>
		</>
	);
}

export default App;
