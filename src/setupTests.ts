/* eslint-disable check-file/filename-naming-convention */
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { configure } from '@testing-library/react';
jest.mock('react-leaflet', () => ({
  // Mock implementation of Leaflet
}));
jest.mock('react-leaflet-cluster', () => ({
  // Mock implementation of Leaflet
}));

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn()
    };
  };

configure({
  testIdAttribute: 'data-test-id'
});
