import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CommonLibProps {}

const StyledCommonLib = styled.div`
  color: pink;
`;

export function CommonLib(props: CommonLibProps) {
  return (
    <StyledCommonLib>
      <h1>Welcome to CommonLib!</h1>
    </StyledCommonLib>
  );
}

export default CommonLib;
