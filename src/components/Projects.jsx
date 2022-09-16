import dadJokesPhoto from '../assets/dad-jokes.png';
import imageGallery from '../assets/image-gallery.png';
import yelpCamp from '../assets/yelp-camp.png';

import { Card, Github } from './exports';

export default function Projects({ className }) {
	return (
		<div className="mt-24">
			<h2
				className={`text-white mb-10 text-center md:text-left font-semibold text-4xl ${className}`}
				id="projects"
			>
				My projects
			</h2>
			<div className="flex flex-wrap flex-none justify-center md:justify-between gap-16">
				<Card
					title="Random Dad Jokes"
					body="A simple React app to retrieve and display dad jokes. Next iteration: adding  Firebase and user auth to sign in and favorite jokes."
					ctaObj={{
						href: 'https://www.getyourdadjokes.com',
						cta: 'See in action',
						onClick: null,
					}}
					img={{ src: dadJokesPhoto, alt: 'Screenshot of dad jokes app.' }}
					iconObj={{
						href: 'https://github.com/chrisaeicher/dad-jokes',
						component: <Github />,
					}}
					className="w-1/3"
				/>
				<Card
					title="Image Gallery"
					body="A live-refreshing, searchable image gallery that uses Pixabay's free API."
					ctaObj={{
						href: 'https://chrisae-react-image-gallery.herokuapp.com/',
						cta: 'See in action',
						onClick: null,
					}}
					img={{
						src: imageGallery,
						alt: 'Screenshot of image gallery app',
					}}
					iconObj={{
						href: 'https://github.com/chrisaeicher/react-image-gallery',
						component: <Github />,
					}}
					className="w-1/3"
				/>
				<Card
					title="YelpCamp"
					body="WIP: Full-stack app for finding and rating campgrounds. Built using Node.js, Express, MongoDB, and Bootstrap."
					img={{
						src: yelpCamp,
						alt: 'Screenshot of YelpCamp in progress',
					}}
					iconObj={{
						href: 'https://github.com/chrisaeicher/yelp-camp',
						component: <Github />,
					}}
					className="w-1/3"
				/>
			</div>
		</div>
	);
}
