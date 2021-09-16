import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
    //renders About test

    // First Test -will be the baseline to verify that the component is rendering.
    it('renders', () => {
        render(<About />);
    });


    // Second Test - test case - compare snapshot versions of the DOM node structure
    // A snapshot is a serialized version of the DOM node structure, enabled by Jest.
    it('matches snapshot DOM node structure', () => {
        // render About
        // asFragment function, which returns a snapshot of the About component
        const { asFragment } = render(<About />);
        // expect function with a matcher to assert something about a value
        expect(asFragment()).toMatchSnapshot();
      }
  )
    })