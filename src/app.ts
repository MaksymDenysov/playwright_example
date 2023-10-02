import { Page } from "@playwright/test";
import { CounterPage } from "./pages/counter.page";

export class App {
    readonly page:Page;
    readonly counterPage:CounterPage;

    constructor (page:Page) {
        this.page = page;
        this.counterPage = new CounterPage(this.page);
    }

}