import { Given, When, Then } from '@wdio/cucumber-framework';
//import { expect, $ } from '@wdio/globals'
import { expect } from 'expect-webdriverio';
import InventoryPage from '../pageobjects/inventory.page';

Given(/^I add (\d+) (\w+)$/, (amount: number, type: string) => {
  InventoryPage.addFood(type, amount);
});

When(/^I eat (\d+) (\w+)$/, (amount: number, type: string) => {
  InventoryPage.eatFood(type, amount);
});

When(/^I make a salad with (\d+) (\w+) and (\d+) (\w+)$/, 
  (qty1: number, veg1: string, qty2: number, veg2: string) => {
    InventoryPage.makeSalad(veg1, qty1, veg2, qty2);
});

Then(/^I have (-?\d+) (\w+)$/, (expected: number, type: string) => {
  const error = InventoryPage.getError();
  if (error) {
    throw new Error(`${error}`);
  }
  expect(InventoryPage.getAmount(type)).toEqual(expected);
});

Then(/^I should see an error message saying "(.*)"$/, (expectedMessage: string) => {
  const actualMessage = InventoryPage.getError();
  expect(actualMessage).toBe(expectedMessage);
});