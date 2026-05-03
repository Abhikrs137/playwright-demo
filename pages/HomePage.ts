import { Page } from '@playwright/test';

export default class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  private simpleDemoFormLink = { name: 'Simple Form Demo' };
  private inputFormSubmitLink = { name: 'Input Form Submit' };
  private selectDropdownListLink = { name: 'Select Dropdown List' };
  private radioButtonsDemoLink = { name: 'Radio Buttons Demo' };
  private dragAndDropLink = { name: 'Drag and Drop' };
  private windowPopupModalLink = { name: 'Window Popup Modal' };
  private dragAndDropSlidersLink = { name: 'Drag & Drop Sliders' };
  private checkboxDemoLink = { name: 'Checkbox Demo'};

  // Functions

  async clickCheckboxDempLink(){
    await this.page.goto('/selenium-playground/checkbox-demo');
  }


  async clickSimpleDemoForm() {
    await this.page.goto('/selenium-playground/simple-form-demo');
  }

  async clickInputFormSubmit() {
    await this.page.goto('/selenium-playground/input-form-demo');
  }

  async clickSelectDropdownList() {
    await this.page.goto('/selenium-playground/select-dropdown-demo');
  }

  async clickRadioButtonsDemo() {
    await this.page.goto('/selenium-playground/radiobutton-demo');
  }

  async clickDragAndDrop() {
    await this.page.goto('/selenium-playground/drag-and-drop-demo');
  }

  async clickWindowPopupModal() {
    await this.page.goto('/selenium-playground/window-popup-modal-demo');
  }

  async clickDragAndDropSliders() {
    await this.page.goto('/selenium-playground/drag-drop-range-sliders-demo');
  }




  //--------------------------------------------
  async scrollToPosition(y: number) {
    await this.page.evaluate((scrollY) => {
        window.scrollBy(0, scrollY);
    }, y);
}

}
