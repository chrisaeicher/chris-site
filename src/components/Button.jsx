export default function Button({
	appearance = 'primary',
	children,
	className,
	href = null,
	onClick,
}) {
	const classNames = {
		primary: `flex justify-center items-center hover:bg-white hover:text-primBlue hover:border-primBlue text-white  px-4 py-2 m-3 bg-primBlue rounded-lg focus:outline-8 focus:outline-offset-2 focus:outline-green-500 transition ${className}`,
		secondary: `flex justify-center items-center hover:bg-primBlue hover:text-white border-2 px-4 py-2 m-3 bg-white text-primBlue border-primBlue rounded-lg focus:outline-8 focus:outline-offset-2 focus:outline-green-500 transition ${className}`,
		accent: `flex justify-center items-center hover:text-primBlue hover:border-primBlue border-2 border-white px-4 py-2 m-3 text-white rounded-lg flex items-center justify-center focus:outline-8 focus:outline-offset-2 focus:outline-green-500 transition ${className}`,
	};
	if (!(appearance in classNames)) {
		appearance = 'primary';
	}

	return !href ? (
		<button className={classNames[appearance]} onClick={onClick}>
			{children}
		</button>
	) : (
		<a className={classNames[appearance]} href={href}>
			{children}
		</a>
	);
}
