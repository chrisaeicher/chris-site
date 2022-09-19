export default function Bio({ className }) {
	const textClasses = `text-white leading-relaxed mb-5 md:mr-64 ${className}`;
	return (
		<div className={`flex flex-col mt-24 mb-24 ${className}`}>
			<h2
				id="about"
				className="text-white mb-10 font-semibold text-4xl text-center md:text-left"
			>
				About Me
			</h2>
			<p className={textClasses}>
				I was born and raised in Saint George, Utah, but I've been a resident of
				Moscow, Idaho, since 2019. Outside of work, I love to spend time with my
				wife and dog, read (and sometimes write) fantasy, play video games, and
				learn more about software engineering.
			</p>
			<p className={textClasses}>
				I've worn several hats over the years—including waiter, salesman, and
				most recently technical writer—but what I enjoy most is finding creative
				solutions for difficult challenges.
			</p>
			<p className={textClasses}>
				I'm excited to use the skills I've picked up in previous roles to tackle
				problems head-on and work with a like-minded team to turn workable
				prototypes into great user experiences.
			</p>
		</div>
	);
}
