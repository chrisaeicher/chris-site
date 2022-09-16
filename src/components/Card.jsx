import Button from './Button';

export default function Card({
	title,
	body,
	ctaObj = null,
	iconObj = null,
	img = null,
	className,
}) {
	const classNames = `px-1 py-3 sm:p-5 bg-white text-center min-w-[90%] sm:min-w-[75%] md:min-w-[45%] md:max-w-m border rounded-lg flex flex-col ${className}`;

	return (
		<div className={classNames}>
			<h1 className="text-2xl text-primBlue mb-3">{title}</h1>
			{img && (
				<img
					className="border-2 border-darkGray rounded"
					src={img.src}
					alt={img.alt}
				/>
			)}

			<div className="flex flex-col items-center justify-center mt-auto">
				<p className=" text-lg text-left mt-4">{body}</p>
				<div className="flex items-center mt-4">
					{ctaObj && (
						<Button
							appearance="secondary"
							href={ctaObj.href}
							onClick={ctaObj.onClick}
						>
							{ctaObj.cta}
						</Button>
					)}

					{iconObj && <a href={iconObj.href}>{iconObj.component}</a>}
				</div>
			</div>
		</div>
	);
}
