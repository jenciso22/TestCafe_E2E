import { URLS } from "../data/Constants";
import examplePage from "../pages/ExamplePage"

fixture('Screenshot Fixture')
    .page `${URLS.WRONG_URL}`


test.page `${URLS.NEW_URL}`
('Screenshot Test', async t => {
    await t 
        .typeText(examplePage.fieldName, 'TAU')
        .click(examplePage.boxMacos)
        .takeScreenshot()
        .takeElementScreenshot(examplePage.submitButton)
        .click(examplePage.submitButton)
        .takeScreenshot()
} )

test.page `${URLS.NEW_URL}`
('Screenshot Second Test', async t => {
    await t 
        .typeText(examplePage.fieldName, 'RAU')
        .takeScreenshot()
        .click(examplePage.boxMacos)
        .click(examplePage.submitButton);
} )