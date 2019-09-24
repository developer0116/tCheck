import { sizes } from './layout';
import styled from 'styled-components';
const BR1 = styled.br`
	line-height: 2rem;
	@media (max-width: ${sizes.modifiedTablet}) {
		line-height: 1rem;
	}
`;

const BR2 = styled.br`
	line-height: 2rem;
	@media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
		line-height: 3rem;
	}

	@media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
		line-height: 4rem;
	}
`;

const BR3 = styled.br`line-height: 1.5rem;`;

export { BR1, BR2, BR3 };
