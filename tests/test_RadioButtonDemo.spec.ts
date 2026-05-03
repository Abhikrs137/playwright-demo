import { test, expect } from "../Fixtures/Page_fixtures";
import * as radiobtndemoData from "../test-data/Radio_Button_Demo_Data.json";

test('006 Click on button to get the selected value', async ({ page, baseURL, homePage, radioButtonDemoPage }) => {
    await page.goto(`${baseURL}`);

  await homePage.clickRadioButtonsDemo();
  await radioButtonDemoPage.selectMaleRadioButton();

  // Verifying that the radio button is Selected or not.
  expect(await radioButtonDemoPage.isMaleRadioButtonSelected()).toBeTruthy();

  await radioButtonDemoPage.clickGetValueButton();

  // Comparing the value that will come when you click that radio button.
  const getSelectedValue = await radioButtonDemoPage.getSelectedValueText();
  expect(getSelectedValue).toBe(radiobtndemoData.verify_btn_get_value);
});

test('007 Disabled Checkbox', async ({ page, baseURL, homePage, radioButtonDemoPage }) => {
    await page.goto(`${baseURL}`);
  await homePage.clickRadioButtonsDemo();

  // Wait for the page to reach a stable network idle state before proceeding with further actions in the test.
//   await page.waitForLoadState('networkidle');


  // Verifying that the radio button is Disabled or not.
  expect(await radioButtonDemoPage.isRadioButtonDisabled()).toBeFalsy();

  await radioButtonDemoPage.enableRadioButton();

//   // Verifying that the radio button is Enable or not.
//   expect(await radioButtonDemoPage.isRadioButtonEnabled()).toBeTruthy();
});

test('008 Click on button to get the selected values from Gender and Age.', async ({ page, baseURL, homePage, radioButtonDemoPage }) => {
  await page.goto(`${baseURL}`);
  await homePage.clickRadioButtonsDemo();

  // Wait for the page to reach a stable network idle state before proceeding with further actions in the test.
  await page.waitForLoadState('networkidle');
  await homePage.scrollToPosition(75);
  await radioButtonDemoPage.selectGenderMaleAndAge();
  await radioButtonDemoPage.clickGetGenderAgeValueButton();

  // Comparing the value that will come when you click that radio button.

  expect(radiobtndemoData.gender).toContain(await radioButtonDemoPage.getGenderValueText());
  expect(radiobtndemoData.age).toContain(await radioButtonDemoPage.getAgeValueText());
});
