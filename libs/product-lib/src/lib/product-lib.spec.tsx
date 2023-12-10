import { render } from '@testing-library/react';

import ProductLib from './product-lib';

describe('ProductLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductLib />);
    expect(baseElement).toBeTruthy();
  });
});
