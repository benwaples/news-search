import React from 'react';
import { 
  cleanup, 
  fireEvent, 
  render, 
  screen, 
  waitFor 
} from '@testing-library/react';
import Article from './Article';

describe('Article component testing', () => {
  afterEach(() => cleanup());
  it('renders one article', () => {
    const article = {
      source: 'article source',
      title: 'test title',
      author: 'fake af author',
      content: 'some true stuff',
      imageUrl: 'https://fakeplaceholder.image.url.you/couldnt',
      url: 'google.com',
  
    };
    const { asFragment } = render(<Article article={article} />);

    screen.getByText('test title');

    expect(asFragment()).toMatchSnapshot();
  });
});


