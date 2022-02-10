import { URLS } from "../data/Constants";
import examplePage from "../pages/ExamplePage"

fixture('Assertions Fixture')
    .page `${URLS.NEW_URL}`


test('Assertions test', async t => {
    await t 
        .expect(examplePage.fieldName.value).eql('','input is empty')
        .typeText(examplePage.fieldName, 'TAU')
        .expect(examplePage.fieldName.value).eql('TAU','input contains "TAU"')
        .click(examplePage.boxMacos)
        .click(examplePage.submitButton);

} )



