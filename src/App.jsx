import './App.css';

import chrisPhoto from './assets/ChrisEicher.jpg';

import { Header, Projects, Bio, Footer, Stacks } from './components/exports';

function App() {
	return (
		<div className="App min-h-screen container bg-darkGray mx-auto">
			<Header img={{ src: chrisPhoto, alt: 'Chris Eicher' }} />
			<main className="mx-8 md:mx-16">
				<Stacks />
				<Projects />
				<Bio />
			</main>
			<Footer />
		</div>
	);
}

export default App;
