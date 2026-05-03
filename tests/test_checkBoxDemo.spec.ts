import { test, expect } from "../Fixtures/Page_fixtures";

test('0010', async ({ page,baseURL,homePage,checkBoxPage }) => {
    
    await page.goto(`${baseURL}`);
    await homePage.clickCheckboxDempLink();

    expect(await checkBoxPage.istitleIsDispalyed()).toBeTruthy();

    await checkBoxPage.clickOnCheckBoxckb1();
    expect(await checkBoxPage.isclickOnCheckBoxckb1Displayed()).toBeTruthy();

    expect(await checkBoxPage.isCkb2disable1Displayed()).toBeTruthy();
    await checkBoxPage.clickCkc2();

    expect(await checkBoxPage.isCkb2IsEnabled()).toBeTruthy();
    await homePage.scrollToPosition(100);

    await checkBoxPage.clickSelectall();
    expect(await checkBoxPage.isCkb4IsChecked()).toBeTruthy();

    await checkBoxPage.clickUnSelectAll();
    expect(await checkBoxPage.ckb5IsChecked()).toBeFalsy();





});

// {const dis  =  await checkBoxPage.isTitleDisplayed();
//  expect(dis).toBeTruthy();
//  expect(await checkBoxPage.checkSingleCkbIsVisible()).toBeTruthy();

//  const ckb1Dis = await checkBoxPage.isckb1Displayed();
//  expect(ckb1Dis).toBeTruthy();
// }
