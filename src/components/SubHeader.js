import React, { useState } from 'react';

import { Link } from 'gatsby';
import styled from 'styled-components';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Flour, Ink, tBlue, Fade } from '../lib/colors';
import { maxWidth, sizes } from '../lib/layout';
import Logo from '../images/tCheck-logo.png';

const SubHeaderTag = styled.header`
	background-color: ${Flour};
	position: fixed;
	width: 100%;
	top: 5.5rem;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
	z-index: 1;
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
		return isActive ? Ink : Fade;
	}};
  font-size: 14px;

  &:hover {
    color: ${Ink};
    text-decoration: none;
  }
`;

const LinksButtonContainer = styled.div`
	display: flex;
	align-items: center;
	margin: auto;
	@media (max-width: ${sizes.modifiedTablet}) {
		${({ open }) => {
			return open
				? `width: 100%; order: 2; flex-direction: column; align-items: flex-start; z-index: 2; background-color: white;`
				: `display: none`;
		}};
	}
`;

const LinkContainer = styled.div`
	margin: 0 50px 0 0;

	@media (max-width: ${sizes.modifiedTablet}) {
		margin: 11px 0;
	}
`;
const MobileMenuIconStyles = styled.div`
	display: none;
	& svg {
		padding-top: 3px;
		margin-left: 5px;
	}
	@media (max-width: ${sizes.modifiedTablet}) {
		display: block;
		margin-left: 1rem;
	}
`;

const SubHeader = React.memo(({ pathName }) => {
	const [ open, toggleOpen ] = useState(false);
	const headerNames = {
		'/blogs/latest': 'Latest',
		'/blogs/cannabis': 'Cannabis Space',
		'/blogs/studies': 'Case Studies',
		'/blogs/faq': 'FAQs',
		'/blogs/policies': 'Policies'
	};
	return (
		<SubHeaderTag>
			<HeaderContainer>
				<LinksButtonContainer open={open}>
					<LinkContainer>
						<TLink to="/blogs/latest" activeStyle={{ color: Ink }} isActive={pathName === '/blogs/latest'}>
							Latest
						</TLink>
					</LinkContainer>
					<LinkContainer>
						<TLink
							to="/blogs/cannabis"
							activeStyle={{ color: Ink }}
							isActive={pathName === '/blogs/cannabis'}
						>
							Cannabis Space
						</TLink>
					</LinkContainer>
					<LinkContainer>
						<TLink
							to="/blogs/studies"
							activeStyle={{ color: Ink }}
							isActive={pathName === '/blogs/studies'}
						>
							Case Studies
						</TLink>
					</LinkContainer>
					<LinkContainer>
						<TLink to="/blogs/faq" activeStyle={{ color: Ink }} isActive={pathName === '/blogs/faq'}>
							FAQs
						</TLink>
					</LinkContainer>
					<LinkContainer>
						<TLink
							to="/blogs/policies"
							activeStyle={{ color: Ink }}
							isActive={pathName === '/blogs/policies'}
						>
							Policies
						</TLink>
					</LinkContainer>
				</LinksButtonContainer>

				<MobileMenuIconStyles
					onClick={() => {
						toggleOpen(!open);
					}}
				>
					{headerNames[pathName]}
					<FontAwesomeIcon icon={faChevronDown} />
				</MobileMenuIconStyles>
			</HeaderContainer>
		</SubHeaderTag>
	);
});

export default SubHeader;
