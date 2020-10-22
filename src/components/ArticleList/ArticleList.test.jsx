import React from 'react';
import { 
  cleanup, 
  fireEvent, 
  render, 
  screen, 
  waitFor 
} from '@testing-library/react';
import ArticleList from './ArticleList';

describe('test the ArticleList component', () => {
  afterEach(() => cleanup());

  it('should render a list of articles', () => {
    const articles = [
      {
        source: 'article source',
        title: 'test title3',
        author: 'fake af author',
        content: 'some true stuff',
        imageUrl: 'https://fakeplaceholder.image.url.you/couldnt',
        url: 'google.com',
      },
      {
        source: 'article source',
        title: 'test title2',
        author: 'fake af author',
        content: 'some true stuff',
        imageUrl: 'https://fakeplaceholder.image.url.you/couldnt',
        url: 'google.com',
      },
      {
        source: 'article source',
        title: 'test title1',
        author: 'fake af author',
        content: 'some true stuff',
        imageUrl: 'https://fakeplaceholder.image.url.you/couldnt',
        url: 'google.com',
      }
    ];

    const { asFragment } = render(<ArticleList articles={articles} />);

    const allArticleTitles = screen.getAllByText('some true stuff');

    expect(allArticleTitles.length).toEqual(3);

    expect(asFragment()).toMatchSnapshot();
  });
});
