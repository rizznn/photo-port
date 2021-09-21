import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
  { name: 'portraits', description: 'Portraits of people in my life' }
]

afterEach(cleanup);

describe('Nav component', () => {
  // baseline test
  it('renders', () => {
    render(<Nav />);
  });   

  // snapshot test
  it('matches snapshot', () => {
      const { asFragment } = render(<Nav />);
      // assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });    
})

describe('emoji is visible', () => {
    // Arrange
    it('inserts emoji into the h2', () => {
      const { getByLabelText } = render(<Nav />);

    // Assert  
    expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
})  

describe('links are visible', () => {
    // Arrange
    it('inserts text into the links', () => {
      const { getByTestId } = render(<Nav />);
      // Assert
    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me');

    });
})
