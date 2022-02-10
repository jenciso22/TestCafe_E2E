import { URLS } from "../data/Constants";
import examplePage from "../pages/ExamplePage"

fixture('Hover Test Fixture')
    .page `${URLS.NEW_URL}`


test('Hover button Test', async t => {
    await t
        .setTestSpeed(0.01)
        .hover(examplePage.populateButton)
        // .hover('input#populate')



} )