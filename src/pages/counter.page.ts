import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class CounterPage extends BasePage {
    readonly plusBtn = this.page.locator('i.fa-plus-circle');
    readonly basketCounter = this.page.locator('span.badge-pill');

    async open() {
        await this.page.goto("http://localhost:30080");
    }

    async addItemToBasket() {
        await this.plusBtn.first().click(); 
    }
}