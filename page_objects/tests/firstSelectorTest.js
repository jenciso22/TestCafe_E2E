import { URLS } from "../data/Constants";
import { Selector } from 'testcafe';


const developerName = Selector ('#developer-name')
const macosBox = Selector ('#macos')
const submitButtonTwo = Selector ('#submit-button')

fixture('Selector Fixture')
    .page `${URLS.NEW_URL}`


test('First Test', async t => {
    await t 
        .typeText(developerName, 'TAU')
        .click(macosBox)
        .click(submitButtonTwo);
} )