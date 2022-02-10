import { URLS } from "../data/Constants";
import examplePage from "../pages/ExamplePage"

fixture('Speed Test Fixture')
    .page `${URLS.NEW_URL}`


test('Set Test Speed Test', async t => {
    await t 
        .setTestSpeed(0.01)   // SET THE SPEED
        .typeText(examplePage.fieldName, 'Parker')
        .typeText(examplePage.fieldName, ' Juan')

} )