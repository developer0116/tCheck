import React from 'react';
import styled from 'styled-components';
//import ReactGA from "react-ga"

import BlogLayout from '../../components/BlogLayout';
import HeadingArticle from '../../components/HeadingArticle';
import SEO from '../../components/seo';
import { BR1, BR2, BR3 } from '../../lib/commonStyle';

import { sizes } from '../../lib/layout';

//ReactGA.initialize('UA-71026544-1');
//ReactGA.pageview('/growers');

const Latest = (props) => {
	const { location: { pathname } } = props;

	return (
		<BlogLayout pathName={pathname}>
			<SEO title="Blogs" keywords={[ `cannabis space`, `case studies`, `user manuals`, `faqs`, `policies` ]} />
			<BR2 />
			<HeadingArticle />
			<BR3 />
		</BlogLayout>
	);
};

export default Latest;
