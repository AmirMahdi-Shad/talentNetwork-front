const NavbarHeader = () => {
	const itemNavBar = [
		{
			name: "Home",
			link: "/",
		},
		{
			name: "work",
			link: "/work",
		},
		{
			name: "Our Team",
			link: "/team",
		},
		{
			name: "Services",
			link: "/services",
		},
		{
			name: "Contact",
			link: "/contact",
		},
	];

	return (
		<ul className="flex gap-10 items-center">
			{itemNavBar &&
				itemNavBar.map(({ name, link }, index) => (
					<li key={index}>
						<a href={link}>{name}</a>
					</li>
				))}
		</ul>
	);
};

export default NavbarHeader;
