export default function CSS3({ className }) {
	return (
		<div className="flex flex-col items-center">
			<svg
				width="28"
				height="32"
				viewBox="0 0 28 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={`fill-white hover:fill-primBlue transition mb-3  ${className}`}
			>
				<path d="M0 0L2.49286 28.2714L13.7143 32L24.9357 28.2714L27.4286 0H0ZM22.3643 5.71429L22.0214 9.09286L13.7857 12.6143L13.7643 12.6214H21.7286L20.8143 23.0929L13.8 25.1429L6.74286 23.0571L6.28571 17.7786H9.77857L10.0071 20.5143L13.7643 21.4643L17.6714 20.3643L17.9357 15.9643L6.05714 15.9286V15.9214L6.04286 15.9286L5.78571 12.6214L13.7929 9.28571L14.2571 9.09286H5.47857L5.06429 5.71429H22.3643Z" />
			</svg>
			<h3 className="text-2xl text-white">CSS3</h3>
		</div>
	);
}
