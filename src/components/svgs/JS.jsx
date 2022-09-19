export default function JS({ className }) {
	return (
		<div className="flex flex-col items-center">
			<svg
				width="32"
				height="32"
				viewBox="0 0 32 32"
				xmlns="http://www.w3.org/2000/svg"
				className={`fill-white hover:fill-primBlue transition mb-3  ${className}`}
			>
				<path d="M28.5714 0H3.42857C1.53571 0 0 1.53571 0 3.42857V28.5714C0 30.4643 1.53571 32 3.42857 32H28.5714C30.4643 32 32 30.4643 32 28.5714V3.42857C32 1.53571 30.4643 0 28.5714 0ZM17.4143 24.9571C17.4143 28.0714 15.5857 29.4929 12.9214 29.4929C10.5143 29.4929 9.12143 28.25 8.40714 26.7429L10.8571 25.2643C11.3286 26.1 11.7571 26.8071 12.7929 26.8071C13.7786 26.8071 14.4071 26.4214 14.4071 24.9143V14.6929H17.4143V24.9571V24.9571ZM24.5286 29.4929C21.7357 29.4929 19.9286 28.1643 19.05 26.4214L21.5 25.0071C22.1429 26.0571 22.9857 26.8357 24.4643 26.8357C25.7071 26.8357 26.5071 26.2143 26.5071 25.35C26.5071 24.3214 25.6929 23.9571 24.3143 23.35L23.5643 23.0286C21.3929 22.1071 19.9571 20.9429 19.9571 18.4929C19.9571 16.2357 21.6786 14.5214 24.3571 14.5214C26.2714 14.5214 27.6429 15.1857 28.6286 16.9286L26.2857 18.4286C25.7714 17.5071 25.2143 17.1429 24.35 17.1429C23.4714 17.1429 22.9143 17.7 22.9143 18.4286C22.9143 19.3286 23.4714 19.6929 24.7643 20.2571L25.5143 20.5786C28.0714 21.6714 29.5071 22.7929 29.5071 25.3071C29.5071 28.0071 27.3786 29.4929 24.5286 29.4929V29.4929Z" />
			</svg>
			<h3 className="text-2xl text-white">Javascript</h3>
		</div>
	);
}
