import React from 'react';
import { 
  cleanup, 
  fireEvent, 
  render, 
  screen, 
  waitFor 
} from '@testing-library/react';
import Search from './Search';

describe('Search component', () => {
  afterEach(() => cleanup());

  it('should render a search input', () => {
    const { asFragment } = render(<Search 
      searchTerm="portland"
      onChange={() => {}}
    />);

    expect(asFragment()).toMatchSnapshot();
    
  });
});
