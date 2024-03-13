import '@testing-library/jest-dom/extend-expect';
import { fireEvent, waitFor } from '@testing-library/react';
import { RenderResult } from '@testing-library/react';
import { optionsHome } from 'config';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { NextRouter } from 'next/router';
import React from 'react';
// import { act } from 'react-dom/test-utils';
import { renderWithHooks, translateText } from 'tests/jest.setup';
import { createMockRouter } from 'tests/test-utils';

import NavHome from './NavHome';

let component: RenderResult<
  typeof import('/home/sebastianmorac/work/benky-web-page/node_modules/@testing-library/dom/types/queries'),
  HTMLElement,
  HTMLElement
>;
let router: NextRouter;
describe('NavHome', () => {
  beforeEach(() => {
    router = createMockRouter({});
    component = renderWithHooks(
      <RouterContext.Provider value={router}>
        <NavHome />
      </RouterContext.Provider>
    );
  });

  /* grouping tests */
  test('click button', () => {
    /* individual test */
    // act(() => {
    //   const component = renderWithHooks(<NavHome />);
    //   console.log(component);
    // });
    optionsHome.forEach(option => {
      component.getByText(translateText(option.text));
    });
    const button = component.getByRole('button', {
      name: translateText('nav.button.register'),
    });
    fireEvent.click(button);

    expect(router.push).toHaveBeenCalledTimes(1);
    expect(router.push).toHaveBeenCalledWith('/register');
  });
  test('click li options', () => {
    optionsHome.forEach((option, iteration) => {
      const link = component.getByText(translateText(option.text));
      fireEvent.click(link);
      expect(router.push).toHaveBeenCalledTimes(iteration + 1);
      expect(router.push).toHaveBeenCalledWith(option.href, option.href, {
        locale: undefined,
        scroll: undefined,
        shallow: undefined,
      });
    });
  });
  test('handle modal menu', () => {
    const icon = component.getByAltText('three lines icon');
    fireEvent.click(icon);
    let modal = component.getByRole('list');
    expect(modal).toBeInTheDocument();
    fireEvent.click(icon);
    expect(modal).not.toBeInTheDocument();
    fireEvent.click(icon);
    modal = component.getByRole('list');
    expect(modal).toBeInTheDocument();
    fireEvent.mouseDown(modal);
    expect(modal).toBeInTheDocument();
  });
  test('click outside icon and modal', async () => {
    const icon = component.getByAltText('three lines icon');
    fireEvent.click(icon);
    const modal = component.getByRole('list');
    expect(modal).toBeInTheDocument();
    fireEvent.mouseDown(document.body);
    await waitFor(() => expect(modal).not.toBeInTheDocument());
  });
  test('click in icon', () => {
    const icon = component.getByAltText('Benky Logo');
    fireEvent.click(icon);
    expect(router.push).toHaveBeenCalledTimes(1);
    expect(router.push).toHaveBeenCalledWith('/');
  });
});
