import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ImgHome from './ImgHome';

describe('ImgHome component', () => {
  describe('When the ImgHome is loaded', () => {
    test('the image should be shown', () => {
      render(<ImgHome />);

      const image = screen.getByRole('img', { name: /home/i });
      expect(image).toHaveAttribute('src', 'img2.jpg');
    });
  });
});
