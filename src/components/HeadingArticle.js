import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { graphql, StaticQuery } from 'gatsby';

import { Flour } from '../lib/colors';
import { sizes } from '../lib/layout';

const ArticleContainer = styled.div`
	border-radius: 8px;
	box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
	height: 473px;
	background-color: #ffffff;
	display: flex;
	@media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
		margin: 0;
		padding: 1.5rem;
	}

	@media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
		margin: 0;
	}
`;
const ArticleBackground = styled(BackgroundImage)`
  &::before {
    background-position: bottom !important;
    background-color: ${Flour} !important;
  }
`;
const ArticleContent = styled.div`
	padding: 48px;
	width: 50%;
	margin-left: 50%;
`;
const ArticleHeading = styled.div`
	font-family: ArialRoundedMT;
	font-size: 32px;
	font-weight: bold;
	font-style: normal;
	font-stretch: normal;
	line-height: 1.25;
	letter-spacing: normal;
	color: #333333;
`;
const ArticleText = styled.div`
	font-family: Lato;
	font-size: 20px;
	font-weight: 500;
	font-style: normal;
	font-stretch: normal;
	line-height: 1.6;
	letter-spacing: normal;
	color: #737373;
	margin-top: 32px;
`;
const ArticleCategory = styled.div`
	font-family: Lato;
	font-size: 14px;
	font-weight: 900;
	font-style: normal;
	font-stretch: normal;
	line-height: 2.29;
	letter-spacing: normal;
	color: #109cb3;
`;
const ArticleAuthor = styled.div`
	font-family: Lato;
	font-size: 12px;
	font-weight: 500;
	font-style: normal;
	font-stretch: normal;
	line-height: 1.33;
	letter-spacing: 0.2px;
	text-align: right;
	color: #737373;
`;
const BottomRow = styled.div`margin-top: auto;`;
const HeadingArticle = () => {
	return (
		<StaticQuery
			query={graphql`
				query {
					hero: file(relativePath: { eq: "hero_homepage.jpg" }) {
						childImageSharp {
							fluid(quality: 100, maxWidth: 1440) {
								...GatsbyImageSharpFluid_withWebp
							}
						}
					}
				}
			`}
			render={(data) => {
				return (
					<ArticleBackground Tag="section" fluid={data.hero.childImageSharp.fluid}>
						<ArticleContainer>
							<ArticleContent>
								<ArticleHeading>A title that is around two lines long</ArticleHeading>
								<ArticleText>
									I’ve talked to dozens of people who have started profitable side businesses. Here’s
									what they shared about how you can start a successful business—even if you're not
									quite ready to ditch your full-time job.
								</ArticleText>
								<BottomRow>
									<ArticleCategory>Cannabis Space</ArticleCategory>
									<ArticleAuthor>Heldi Wong</ArticleAuthor>
								</BottomRow>
							</ArticleContent>
						</ArticleContainer>
					</ArticleBackground>
				);
			}}
		/>
	);
};

export default HeadingArticle;
