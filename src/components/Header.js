import React, { useState } from 'react';

import { Link } from 'gatsby';
import styled from 'styled-components';

import Button from './Button';
import MobileMenuIcon from './MobileMenuIcon';

import { Flour, Ink, tBlue } from '../lib/colors';
import { maxWidth, sizes } from '../lib/layout';
import Logo from '../images/tCheck-logo.png';

const HeaderTag = styled.header`
	background-color: ${Flour};
	position: fixed;
	z-index: 10;
	width: 100%;
`;

const HeaderContainer = styled.div`
	max-width: ${maxWidth}px;
	margin: 0 auto;
	width: 100%;
	height: 5.5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	padding: 0 60px;

	@media (max-width: ${sizes.modifiedTablet}) {
		height: unset;
		padding: 20px;
		${({ open }) => {
			return open ? `box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);` : ``;
		}};
	}
`;

const TLink = styled(Link)`
  font-family: Lato;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.29;
  letter-spacing: normal;
  text-decoration: none;
  color: ${({ isActive }) => {
		return isActive ? tBlue : Ink;
	}};
  font-size: 0.875rem;

  &:hover {
    color: ${tBlue};
    text-decoration: none;
  }
`;

const ExternalLink = styled.a`
	font-family: Lato;
	font-weight: 900;
	font-style: normal;
	font-stretch: normal;
	line-height: 2.29;
	letter-spacing: normal;
	text-decoration: none;
	color: ${Ink};
	font-size: 0.875rem;

	&:hover {
		color: ${tBlue};
		text-decoration: none;
	}
`;

const LogoImg = styled.img`
	width: 87px;
	height: 41px;

	@media (max-width: ${sizes.modifiedTablet}) {
		order: -1;
	}
`;

const LinksButtonContainer = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: ${sizes.modifiedTablet}) {
		${({ open }) => {
			return open
				? `width: 100%; order: 2; flex-direction: column; align-items: flex-start; z-index: 2; background-color: white;`
				: `display: none`;
		}};
	}
`;

const LinkContainer = styled.div`
	margin: 0 30px 0 0;

	@media (max-width: ${sizes.modifiedTablet}) {
		margin: 11px 0;
	}
`;

const ResponsiveButton = styled(Button)`
  cursor: pointer;

  @media (max-width: ${sizes.modifiedTablet}) {
    display: none;
  }
`;

const MobileResponsiveButton = styled(Button)`
  display: none;
  cursor: pointer;

  @media (max-width: ${sizes.modifiedTablet}) {
    display: unset;
  }
`;

const MobileButtonLink = styled.a`
	display: none;
	text-decoration: none;

	@media (max-width: ${sizes.modifiedTablet}) {
		margin-left: auto;
		display: unset;
	}
`;

const ButtonLink = styled.a`
	text-decoration: none;

	&:hover {
		text-decoration: none;
	}
`;

const MobileMenuIconStyles = styled.div`
	display: none;

	@media (max-width: ${sizes.modifiedTablet}) {
		display: block;
		margin-left: 2rem;
	}
`;

const Header = React.memo(({ pathName }) => {
	const [ open, toggleOpen ] = useState(false);

	return (
		<HeaderTag>
			<HeaderContainer open={open}>
				<TLink to="/">
					<LogoImg src={Logo} />
				</TLink>
				<LinksButtonContainer open={open}>
					<LinkContainer>
						<TLink to="/makers" activeStyle={{ color: tBlue }} isActive={pathName === '/makers/'}>
							Edible Makers
						</TLink>
					</LinkContainer>
					<LinkContainer>
						<TLink to="/growers" activeStyle={{ color: tBlue }} isActive={pathName === '/growers/'}>
							Growers
						</TLink>
					</LinkContainer>
					<LinkContainer>
						<TLink to="/processors" activeStyle={{ color: tBlue }} isActive={pathName === '/processors/'}>
							Processors
						</TLink>
					</LinkContainer>
					<LinkContainer>
						<TLink
							to="/blogs/latest"
							activeStyle={{ color: tBlue }}
							isActive={pathName === '/blogs/latest/'}
						>
							Blogs
						</TLink>
					</LinkContainer>
					<LinkContainer>
						<ExternalLink href="https://medium.com/tcheck/i-need-help-e7ede86f2191" target="_blank">
							Support
						</ExternalLink>
					</LinkContainer>
					<ButtonLink href="https://tcheckshop.com" target="_blank">
						<ResponsiveButton>Buy Now</ResponsiveButton>
					</ButtonLink>
				</LinksButtonContainer>
				<MobileButtonLink target="_blank" href="https://tcheckshop.com">
					<MobileResponsiveButton>Buy Now</MobileResponsiveButton>
				</MobileButtonLink>
				<MobileMenuIconStyles
					onClick={() => {
						toggleOpen(!open);
					}}
				>
					<MobileMenuIcon />
				</MobileMenuIconStyles>
			</HeaderContainer>
		</HeaderTag>
	);
});

export default Header;
