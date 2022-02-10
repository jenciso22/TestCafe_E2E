import { URLS } from "../data/Constants";
import examplePage from "../pages/ExamplePage"
import { ClientFunction, clientFunction } from 'testcafe';


const getPageURL = ClientFunction( () => window.location.href )

fixture('Client Function Fixture')
    .page `${URLS.NEW_URL}`


test('First Test', async t => {
    await t 
        .typeText(examplePage.fieldName, 'TAU')
        .click(examplePage.boxMacos)
        .click(examplePage.submitButton)
        .expect(getPageURL()).contains('thank-you');
} )