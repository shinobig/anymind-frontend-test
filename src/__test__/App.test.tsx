import React from 'react';
import {MockedProvider} from "@apollo/client/testing";
import {render, screen} from '@testing-library/react';
import App from '../App';

describe('App Component:', () => {

  test('Renders without error', () => {
    Element.prototype.scrollTo = () => {}
    render(<App/>);
    const linkElement = screen.getByText(/1 day chat App/i);
    expect(linkElement).toBeInTheDocument();
  });
})

