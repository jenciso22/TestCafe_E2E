import { URLS } from "../data/Constants";
import examplePage from "../pages/ExamplePage"

fixture('MetaData Fixture')
    .page `${URLS.WRONG_URL}`


test.page `${URLS.NEW_URL}`
('First Test', async t => {
    await t 
        .typeText(examplePage.fieldName, 'TAU')
        .click(examplePage.boxMacos)
        .click(examplePage.submitButton);
} ).meta(
    'type','smoke'
    )



test.page `${URLS.NEW_URL}`
    ('Second Test', async t => {
        await t 
        .typeText(examplePage.fieldName, 'TAU')
        .click(examplePage.boxMacos)
        .click(examplePage.submitButton);
} ).meta(
    'env','production'
    )