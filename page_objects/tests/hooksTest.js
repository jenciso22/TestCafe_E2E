import { URLS } from "../data/Constants";
import examplePage from "../pages/ExamplePage"

fixture('Hooks Fixture')
    .page `${URLS.WRONG_URL}`
    .beforeEach( async t =>{
        await t
            .maximizeWindow()
            .setTestSpeed(0.1)
            .setPageLoadTimeout(0)
    })


test.page `${URLS.NEW_URL}`
('First Test', async t => {
    await t 
        .typeText(examplePage.fieldName, 'TAU')
        .click(examplePage.boxMacos)
        .click(examplePage.submitButton);
} ).meta(
    'env','production',
    )



test.page `${URLS.NEW_URL}`
('Second Test', async t => {
        await t 
        .typeText(examplePage.fieldName, 'Test University')
        .click(examplePage.boxMacos)
        .click(examplePage.submitButton);
} ).meta(
    'type','smoke'
    )
