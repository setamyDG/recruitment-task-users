import React from 'react';
import { Searchbar } from '@components/home';
import { render } from '../utils/test-utils';

describe('Searchbar', () => {
  it('should render', () => {
    const { container } = render(<Searchbar value='' onChange={() => undefined} handleDelete={() => undefined} />);
    expect(container).toBeInTheDocument();
  });
});
