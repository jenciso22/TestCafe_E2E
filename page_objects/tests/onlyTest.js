import { URLS } from "../data/Constants";
import examplePage from "../pages/ExamplePage"

fixture('Only Fixture')
    .page `${URLS.NEW_URL}`


test('First Test', async t => {
    await t 
        .expect(examplePage.fieldName.value).eql('','input is empty')
        .typeText(examplePage.fieldName, 'TAU')
        .expect(examplePage.fieldName.value).eql('TAU','input contains "TAU"')
        .click(examplePage.boxMacos)
        .click(examplePage.submitButton);

} )

test.page`${URLS.NEW_URL}`
('Second Test', async t => {
    await t 
        .expect(examplePage.fieldName.value).eql('','input is empty')
        .typeText(examplePage.fieldName, 'TAU')
        .expect(examplePage.fieldName.value).eql('TAU','input contains "TAU"')
        .click(examplePage.boxMacos)
        .click(examplePage.submitButton);

} )


// ONLY - only RUN that TC or Fixture  { fixture.only / test.only}
// SKIP - Skip that TC or Fixture. { fixture.skip / test.skip}