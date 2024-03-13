import '@testing-library/jest-dom/extend-expect';
import { cleanup, fireEvent } from '@testing-library/react';
import React from 'react';
// import { act } from 'react-dom/test-utils';
import { renderWithHooks } from 'tests/jest.setup';
import { IColorsButton } from 'types/interfaces';

import Button from './Button';
import styles from './Button.module.css';

describe('Button', () => {
  test('use action', () => {
    const handleClick = jest.fn();
    const component = renderWithHooks(
      <Button msg='test' action={handleClick} />
    );
    component.getByText('test');
    const button = component.getByRole('button');
    fireEvent.click(button);
    const arrow = component.queryByAltText('arrow');
    expect(arrow).toBeNull();
  });
  test('use arrow', () => {
    const component = renderWithHooks(<Button msg='test' arrow />);
    component.getByText('test');
    component.getByAltText('arrow rigth');
  });
  test('arror botton blue', () => {
    const component = renderWithHooks(<Button msg='test' arrow color='blue' />);
    component.getByAltText('arrow rigth');
  });
  test('arror botton white', () => {
    const component = renderWithHooks(
      <Button msg='test' arrow color='white' />
    );
    component.getByAltText('arrow left');
  });
  test('colors classnames', () => {
    const colors: IColorsButton[] = ['blue', 'white', 'orange'];
    let component;
    let button;
    colors.forEach(color => {
      component = renderWithHooks(<Button msg='test' color={color} />);
      button = component.getByRole('button');
      expect(button).toHaveClass(styles[`button__${color}`]);
      cleanup();
    });
  });
});
