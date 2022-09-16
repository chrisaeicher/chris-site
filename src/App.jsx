import './App.css';

import chrisPhoto from './assets/ChrisEicher.jpg';

import { Header, Projects, Bio, Footer } from './components/exports';

function App() {
	return (
		<div className="App min-h-screen container bg-darkGray mx-auto">
			<Header img={{ src: chrisPhoto, alt: 'Chris Eicher' }} />
			<main className="flex flex-col items-center mx-8 md:mx-16">
				<Projects />
				<Bio />
			</main>
			<Footer />
		</div>
	);
}

export default App;
