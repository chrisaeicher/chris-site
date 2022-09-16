import { Github, LinkedIn } from './exports';

export default function Footer() {
	return (
		<footer className=" flex flex-col bg-white items-center justify-center border-t-8 border-primBlue py-10 gap-4">
			<h2 className="text-2xl text-darkGray">Get in touch:</h2>
			<div className="flex gap-4">
				<a href="https://www.github.com/chrisaeicher">
					<Github />
				</a>
				<a href="https://www.linkedin.com/in/chrisaeicher/">
					<LinkedIn />
				</a>
			</div>
		</footer>
	);
}
