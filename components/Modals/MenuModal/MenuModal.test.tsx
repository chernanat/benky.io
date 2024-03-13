import '@testing-library/jest-dom/extend-expect';
import { fireEvent } from '@testing-library/react';
import { RenderResult } from '@testing-library/react';
import { optionsHome } from 'config';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { NextRouter } from 'next/router';
import React from 'react';
import { renderWithHooks, translateText } from 'tests/jest.setup';
import { createMockRouter } from 'tests/test-utils';

import MenuModal from './MenuModal';

let component: RenderResult<
  typeof import('/home/sebastianmorac/work/benky-web-page/node_modules/@testing-library/dom/types/queries'),
  HTMLElement,
  HTMLElement
>;
let router: NextRouter;
describe('MenuModal', () => {
  beforeEach(() => {
    router = createMockRouter({});
    component = renderWithHooks(
      <RouterContext.Provider value={router}>
        <MenuModal modalRef={React.createRef()} />
      </RouterContext.Provider>
    );
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
});
