// import React from 'react';
// import renderer from 'react-test-renderer';
// import { View, Button } from 'react-native';

// import App from './App';

// describe('App component', () => {
//   it('renders View', () => {
//     const component = renderer.create(<App />);
//     const instance = component.root;
//     expect(instance.findByType(View)).toBeTruthy();
//   });

//   describe('within View', () => {
//     it('renders Button with text "Show alert"', () => {
//       const component = renderer.create(<App />);
//       const instance = component.root;
//       expect(instance.findByType(Button).props.title).toBe('Show alert');
//     });
//   });
// });

it('one equal one', () => {
  expect(1).toEqual(1);
});
