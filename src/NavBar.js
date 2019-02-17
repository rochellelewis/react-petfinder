import React from "react";
import {Link} from "@reach/router";
import styled from "@emotion/styled";
import {keyframes} from "@emotion/core";
import colors from "./colors";

const Spin = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

const SearchLink = styled("span")`
	display: inline-block;
	animation: 5s ${Spin} linear infinite;
`;

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
			<SearchLink aria-label="search">
				<small>=^. .^=</small>
			</SearchLink>
		</NavLink>
	</Container>
);

export default NavBar;