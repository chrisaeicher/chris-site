import './App.css';
import chrisPhoto from './assets/ChrisEicher.jpg';
import dadJokesPhoto from './assets/dad-jokes.png';
import imageGallery from './assets/image-gallery.png';

import Button from './components/Button';
import Card from './components/Card';
import { useState, useEffect } from 'react';

function App() {
	return (
		<div className="App bg-darkGray min-h-screen">
			<div className="container mx-auto pt-5">
				<header className="flex flex-col items-center justify-center pt-10 mb-20">
					<img
						className="w-3/4 sm:w-1/2 md:5/12 lg:w-1/4 h-auto rounded-full border-2 border-primBlue"
						src={chrisPhoto}
						alt="Chris Eicher"
					/>
					<h1 className="text-white font-normal text-2xl mt-6">
						Hi, my name is
					</h1>
					<h2 className="mt-4 font-semibold text-primBlue text-bold text-5xl">
						Chris Eicher
					</h2>
					<p className="text-white mt-6 text-lg px-8 sm:px-16 md:w-1/2 text-center">
						I'm a technical writer turned developer who focuses on building
						intuitive, accessible applications using modern technology stacks.
					</p>
					<Button href="#projects">View my projects</Button>
				</header>
				<hr />
				<main className="flex flex-col items-center mt-20">
					<h2 className="text-white font-semibold text-2xl" id="projects">
						My projects
					</h2>
					<div className="flex flex-wrap gap-2">
						<Card
							title="Random Dad Jokes"
							body="A simple React app for retrieving and displaying dad jokes."
							cta="See in action"
							img={{ src: dadJokesPhoto, alt: 'Screenshot of dad jokes app.' }}
							href={null}
							className="m-5 w-1/3"
						/>
						<Card
							title="Searchable Image Gallery"
							body="A live-refreshing image gallery pulling from Pixabay's API."
							cta="See in action"
							img={{
								src: imageGallery,
								alt: 'Screenshot of image gallery app',
							}}
							href="https://chrisae-react-image-gallery.herokuapp.com/"
							className="m-5 w-1/3"
						/>
						<Card
							title="Dad Jokes"
							body="A simple React app for retrieving and displaying dad jokes. "
							cta="See in action"
							href={null}
							className="m-5 w-1/3"
						/>
						<Card
							title="Dad Jokes"
							body="A simple React app for retrieving and displaying dad jokes. "
							cta="See in action"
							href={null}
							className="m-5 w-1/3"
						/>
					</div>
				</main>
			</div>
		</div>
	);
}

export default App;
