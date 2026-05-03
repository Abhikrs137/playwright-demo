import { Page } from "@playwright/test";

export default class SimpPageDemo{

    constructor(public page : Page){}


    async title_simple_demoForm (){
        const verify_page = await this.page.locator("//h1[text()='Simple Form Demo']").innerText();
        return verify_page;
    }

    async text_enter_message (msg:  string){
        await this.page.getByPlaceholder('Please enter your Message').fill(msg);
    }

    async btn_get_checked_value (){
        await this.page.getByRole('button', { name: 'Get Checked Value' }).click();
    }

    async verify_enter_message_is_visible (){
        return await this.page.locator("(//p[@class='mt-20'])[1]").isVisible();
    }

    async text_enter_firstNo(first_no : string){
        await this.page.getByPlaceholder('Please enter first value').fill(first_no);
    }

    async text_enter_SecondNo(second_no : string){
        await this.page.getByPlaceholder('Please enter second value').fill(second_no);
    }


    async btn_getSum(){
        await this.page.getByRole('button', { name: 'Get Sum' }).click();
    } 
    
    async verify_getSum(exp_sum: string){

        const displayedValue = await this.page.locator("(//p[@class='mt-20'])[2]").textContent();
        return displayedValue ? displayedValue.trim() : ''; // Handle possible null value
    }


    async add_two_number(num1 : string,num2 : string){
        await this.text_enter_firstNo(num1);
        await this.text_enter_SecondNo(num2);
        await this.btn_getSum();
    }

    async Enter_message(msg:string){

        await this.text_enter_message(msg);
        await this.btn_get_checked_value();
    }


    

    
}
