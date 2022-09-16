import Button from './Button';
export default function Header({ img }) {
	return (
		<header className="flex flex-col items-center justify-center pt-2 sm:pt-24 text-center mb-16">
			<img
				className="w-3/4 sm:w-1/2 md:5/12 lg:w-1/4 h-auto rounded-full border-2 border-primBlue"
				src={img.src}
				alt={img.alt}
			/>
			<h1 className="text-white font-normal text-2xl mt-6">Hi, my name is</h1>
			<h2 className="mt-2 font-semibold text-primBlue text-bold text-5xl">
				Chris Eicher
			</h2>
			<p className="text-white mt-10 text-lg px-8 sm:px-16 md:w-1/2 text-center">
				I'm a technical writer turned developer who focuses on building
				intuitive, accessible applications using modern technology stacks.
			</p>
			<div className="flex mt-4">
				<Button href="#projects">View my projects</Button>
				<Button href="#about" appearance="accent">
					Read about me
				</Button>
			</div>
		</header>
	);
}
