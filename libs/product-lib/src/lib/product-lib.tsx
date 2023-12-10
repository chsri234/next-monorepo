import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ProductLibProps {}

const StyledProductLib = styled.div`
  color: pink;
`;

export function ProductLib(props: ProductLibProps) {
  return (
    <StyledProductLib>
      <h1>Welcome to ProductLib!</h1>
    </StyledProductLib>
  );
}

export default ProductLib;
