import Button from './Button';

function Card({
	title,
	body,
	cta,
	ctaClick = null,
	href = null,
	img = null,
	className,
}) {
	const classNames = `mx-auto p-5 bg-white text-center border rounded-lg flex flex-col ${className}`;

	return (
		<div className={classNames}>
			<h1 className="text-2xl text-primBlue mb-3">{title}</h1>
			{img && (
				<img className="border-2 border-darkGray" src={img.src} alt={img.alt} />
			)}

			<div className="flex flex-col items-center justify-center mt-auto">
				<p className=" text-lg m-3">{body}</p>
				<Button
					appearance="secondary"
					href={href}
					onClick={ctaClick}
					className="text-lg"
				>
					{cta}
				</Button>
			</div>
		</div>
	);
}

export default Card;
