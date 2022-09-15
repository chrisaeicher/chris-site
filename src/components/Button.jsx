function Button({
	appearance = 'primary',
	children,
	className,
	href = null,
	onClick,
}) {
	const classNames =
		appearance === 'primary'
			? `hover:bg-white hover:text-primBlue hover:border-primBlue text-white  px-4 py-2 m-3 bg-primBlue rounded-lg transition ${className}`
			: `hover:bg-primBlue hover:text-white border-2 border-primBlue px-4 py-2 m-3 bg-white text-primBlue border-primBlue rounded-lg transition ${className}`;

	return !href ? (
		<button
			className={
				classNames +
				'focus:outline-8 focus:outline-offset-2 focus:outline-green-500'
			}
			onClick={onClick}
		>
			{children}
		</button>
	) : (
		<a
			className={
				classNames +
				'focus:outline-8 focus:outline-offset-2 focus:outline-green-500'
			}
			href={href}
		>
			{children}
		</a>
	);
}

export default Button;
