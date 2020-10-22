import React from 'react';
import { 
  cleanup, 
  fireEvent, 
  render, 
  screen, 
  waitFor 
} from '@testing-library/react';
import { getArticles } from '../services/getArticles';
import NewsSearch from './NewsSearch';


jest.mock('../services/getArticles');

describe('NewsSearch container', () => {
  it('should a search bar with a button to search', () => {
    
    render(<NewsSearch />);

    screen.getByText('Click me');

  });

  it('should display a list of articles', async() => {
    getArticles.mockResolvedValue([
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
    ]);
    render(<NewsSearch />);

    
    fireEvent.click(screen.getByText('Click me'));
    
    setTimeout(() => {
      const articleList = screen.getAllByTestId('article');
      return expect(articleList).not.toBeEmptyDOMElement();
    }, 3000);
    
  });
});

