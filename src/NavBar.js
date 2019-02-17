import React from "react";
import {Link} from "@reach/router";
import styled from "@emotion/styled";
import colors from "./colors";

const Container = styled("header")`
	background-color: ${colors.primary};
	position: sticky;
	top: 0;
	z-index: 10;
`;

const NavLink = styled(Link)`
	&:hover {
		text-decoration: underline;
	}
	span small {
		color: white !important;
	}
`;

const NavBar = () => (
	<Container>
		<NavLink to={"/"}>Adopt Me!</NavLink>
		<NavLink to={"/search-params"}>
			<span aria-label="search">
				<small>=^. .^=</small>
			</span>
		</NavLink>
	</Container>
);

export default NavBar;