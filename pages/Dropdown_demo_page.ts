import { Page } from "@playwright/test";

export default class DropdownDemo{

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private title = "//h1[text()='Dropdown Demo']";
    private dropDown1 = '#select-demo';


    async verify_dropdown_page_titile(){
        const verify_page = await this.page.innerText(this.title);
        return verify_page;
    }

    async select_single_option( day : string){
        await this.page.selectOption(this.dropDown1, day);
    }

    async verify_single_option( ){

        const element = await this.page.waitForSelector("//p[@class='selected-value text-size-14']");

        if (element) {
          return true
        } else {
          return false

        }
    }
   // page.waitForSelector("//p[@class='selected-value text-size-14']")

    async dayDisplayed(){
        return await this.page.locator(this.dropDown1).evaluate((select: HTMLSelectElement) => select.selectedOptions[0]?.textContent?.trim() || '');
    }

    async selectMultipleOptions(options: string[]) {
        const dropdownSelector = '#multi-select'; // Replace with the actual selector of your dropdown
    
        // Use page.selectOption to select multiple options
        await this.page.selectOption(dropdownSelector, options);
      }

    
    async btn_first_select(){
        await this.page.getByRole('button', { name: 'First Selected' }).click();
    }
    
    async btn_last_select(){
        await this.page.getByRole('button', { name: 'Get Last Selected' }).click();
    }

    async verify_first_select() {
        const element = await this.page.getByText('First selected option is :').innerText();
        return element;
      }

    async verify_last_select(){
        const element = await this.page.getByText('First selected option is :').innerText();
        return element;
    }

}
