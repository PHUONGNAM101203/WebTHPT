import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import { Carousel, UncontrolledCarousel } from '..';
var items = [{
  src: '',
  altText: 'a',
  caption: 'caption 1',
  key: '1'
}, {
  src: '',
  altText: 'b',
  caption: 'caption 2',
  key: '2'
}, {
  src: '',
  altText: 'c',
  caption: 'caption 3',
  key: '3'
}];
describe('UncontrolledCarousel', function () {
  beforeEach(function () {
    jest.useFakeTimers();
  });
  afterEach(function () {
    jest.clearAllTimers();
  });
  it('should have active element default to 0', function () {
    render( /*#__PURE__*/React.createElement(UncontrolledCarousel, {
      items: items
    }));
    expect(screen.getByAltText('a').parentElement).toHaveClass('active');
  });
  it('should autoplay by default', function () {
    render( /*#__PURE__*/React.createElement(UncontrolledCarousel, {
      items: items
    }));
    expect(screen.getByAltText('a').parentElement).toHaveClass('active');
    jest.advanceTimersByTime(5000);
    expect(screen.getByAltText('b').parentElement).toHaveClass('carousel-item carousel-item-start carousel-item-next');
    jest.advanceTimersByTime(600);
    expect(screen.getByAltText('b').parentElement).toHaveClass('active');
  });
  it('should not play automatically when autoPlay is false', function () {
    render( /*#__PURE__*/React.createElement(UncontrolledCarousel, {
      items: items,
      autoPlay: false
    }));
    expect(screen.getByAltText('a').parentElement).toHaveClass('active');
    jest.advanceTimersByTime(5000);
    expect(screen.getByAltText('b').parentElement).not.toHaveClass('carousel-item carousel-item-start carousel-item-next');
    jest.advanceTimersByTime(600);
    expect(screen.getByAltText('b').parentElement).not.toHaveClass('active');
  });
  it('should move to next slide when next button is clicked', function () {
    render( /*#__PURE__*/React.createElement(UncontrolledCarousel, {
      items: items,
      autoPlay: false
    }));
    user.click(screen.getByText(/next/i));
    jest.advanceTimersByTime(600);
    expect(screen.getByAltText('b').parentElement).toHaveClass('carousel-item active');
  });
  it('should not move to next slide while animating', function () {
    render( /*#__PURE__*/React.createElement(UncontrolledCarousel, {
      items: items
    }));
    user.click(screen.getByText(/next/i));
    expect(screen.getByAltText('b').parentElement).toHaveClass('carousel-item carousel-item-start carousel-item-next');
    user.click(screen.getByText(/next/i));
    expect(screen.getByAltText('c').parentElement).not.toHaveClass('carousel-item carousel-item-start carousel-item-next');
  });
  it('should wrap to first slide on reaching the end', function () {
    render( /*#__PURE__*/React.createElement(UncontrolledCarousel, {
      items: items,
      autoPlay: false
    }));
    user.click(screen.getByText(/next/i));
    jest.advanceTimersByTime(600);
    expect(screen.getByAltText('b').parentElement).toHaveClass('active');
    user.click(screen.getByText(/next/i));
    jest.advanceTimersByTime(600);
    expect(screen.getByAltText('c').parentElement).toHaveClass('active');
    user.click(screen.getByText(/next/i));
    jest.advanceTimersByTime(600);
    expect(screen.getByAltText('a').parentElement).toHaveClass('active');
  });
  it('should move to previous slide when previous button is clicked', function () {
    render( /*#__PURE__*/React.createElement(UncontrolledCarousel, {
      items: items,
      autoPlay: false
    }));
    user.click(screen.getByText(/next/i));
    jest.advanceTimersByTime(600);
    expect(screen.getByAltText('b').parentElement).toHaveClass('carousel-item active');
    user.click(screen.getByText(/previous/i));
    jest.advanceTimersByTime(600);
    expect(screen.getByAltText('a').parentElement).toHaveClass('carousel-item active');
  });
  it('should not move to previous slide while animating', function () {
    render( /*#__PURE__*/React.createElement(UncontrolledCarousel, {
      items: items
    }));
    user.click(screen.getByText(/next/i));
    expect(screen.getByAltText('b').parentElement).toHaveClass('carousel-item carousel-item-start carousel-item-next');
    user.click(screen.getByText(/previous/i));
    expect(screen.getByAltText('a').parentElement).not.toHaveClass('carousel-item carousel-item-start carousel-item-next');
  });
  it('should wrap to last slide on reaching the beginning', function () {
    render( /*#__PURE__*/React.createElement(UncontrolledCarousel, {
      items: items,
      autoPlay: false
    }));
    user.click(screen.getByText(/previous/i));
    jest.advanceTimersByTime(600);
    expect(screen.getByAltText('c').parentElement).toHaveClass('active');
  });
});