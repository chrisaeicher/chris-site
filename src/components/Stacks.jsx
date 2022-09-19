import { CSS3, Express, HTML5, React, JS, MongoDB, Node } from './exports';
import './Stacks.css';

export default function Stacks({ className }) {
	return (
		<div className="mt-24 Stacks">
			<h2
				className={`text-white mb-10 text-center md:text-left font-semibold text-4xl ${className}`}
				id="stacks"
			>
				My technologies
			</h2>
			<div className="flex flex-wrap justify-center md:justify-start 2xl:justify-between gap-16">
				<React />
				<Node />
				<MongoDB />
				<Express />
				<HTML5 />
				<CSS3 />
				<JS />
			</div>
		</div>
	);
}
