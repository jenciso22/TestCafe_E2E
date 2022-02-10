import { URLS } from "../data/Constants";
import examplePage from "../pages/ExamplePage"

fixture('Await Fixture')
    .page `${URLS.NEW_URL}`


test('Await test', async t => {
    const developerElement = 
    await examplePage.fieldName.with({visibilityCheck:true})();
    await t 
        .expect(developerElement.value).eql('','input is empty')
        .typeText(examplePage.fieldName, 'TAU')
        .expect(examplePage.fieldName.value).eql('TAU','input contains "TAU"')
        .click(examplePage.boxMacos)
        .click(examplePage.submitButton);

} )



