import { Page } from '@playwright/test';

export default class CheckBoxPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private title = "//h1[text()='Checkbox Demo']";
    private ckb1="//label[text()='Click on check box']";
    private ckb1IsClicked = "//div[text()='Checked']";
    private ckb2="(//input[@class='mr-10'])[2]";
    private ckb4="(//label[text()='Option 1'])[2]";
    private ckb5="(//label[text()='Option 2'])[2]";
    private ckb6="(//label[text()='Option 3'])[2]";
    private ckb7="(//label[text()='Option 4'])[2]";
    private ckb4Input="(//label[text()='Option 1'])[2]/preceding-sibling::input";
    private ckb5Input="(//label[text()='Option 2'])[2]/preceding-sibling::input";
    private disabledCheckbox = "(//input[@class='mr-10'])[3]";
    private selectAll = { name: 'Check All' };
    private unSelectAll = { name: 'Uncheck All' };

    async istitleIsDispalyed(){
        return await this.page.isVisible(this.title);
    }

    async clickckb1btn(){
        await this.page.click(this.ckb4);
        await this.page.click(this.ckb5);
        await this.page.click(this.ckb6);
        await this.page.click(this.ckb7);

    }

    async clickOnCheckBoxckb1(){
        await this.page.click(this.ckb1);
    }

    async isclickOnCheckBoxckb1Displayed(){
        return await this.page.isVisible(this.ckb1IsClicked);
    }

    async isCkb2disable1Displayed(){
        return await this.page.isDisabled(this.disabledCheckbox);
    }

    async clickCkc2(){
        await this.page.click(this.ckb2);
    }

    async isCkb2IsEnabled(){
        return await this.page.isEnabled(this.ckb2);
    }

    async isCkb4IsChecked(){
        return await this.page.isChecked(this.ckb4Input);
    }

    async clickSelectall(){
        await this.page.getByRole('button',this.selectAll).click();
    }

    async clickUnSelectAll(){
        await this.page.getByRole('button', this.unSelectAll).click();
    }
    async ckb5IsChecked(){
        return await this.page.isChecked(this.ckb5Input);
    }

}
