import React from 'react';
import renderer from 'react-test-renderer';
import { CheckBox } from 'react-native';
import App from './App';

describe('App component', () => {
  it('renders View', () => {
    const component = renderer.create(<App />);
    const instance = component.root;
    expect(instance.findByType(CheckBox)).toBeTruthy();
  });
});

// describe('within View', () => {
//   it('renders Button with text "Show alert"', () => {
//     const component = renderer.create(<App />);
//     const instance = component.root;
//     expect(instance.findByType(Button)).toBeTruthy();
//   });
// });
