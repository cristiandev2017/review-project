import React from 'react';
import {render,scren} from '@testing-library/react';
import Footer from '../../../Application/layout/Footer';

test('Testing Footer ', () => {
  render(<Footer />);
  const linkElement = screen.getByText("Training");
  expect(linkElement).toBeInTheDocument();
});