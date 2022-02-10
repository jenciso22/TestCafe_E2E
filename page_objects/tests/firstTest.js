import { URLS } from "../data/Constants";
import examplePage from "../pages/ExamplePage"

fixture('First Fixture')
    .page `${URLS.WRONG_URL}`


test.page `${URLS.NEW_URL}`
('First Test', async t => {
    await t 
        .typeText(examplePage.fieldName, 'TAU')
        .click(examplePage.boxMacos)
        .click(examplePage.submitButton);
} )