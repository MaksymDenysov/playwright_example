import { expect } from '@playwright/test';
import {test} from './base';


test.afterEach('close browser', async ({ app }) => {
  app.page.close();
});


test('add item to basket test', async ({ app }) => {
  app.counterPage.open();
  app.counterPage.addItemToBasket();
  await expect(app.counterPage.basketCounter).toHaveText('1');
});

