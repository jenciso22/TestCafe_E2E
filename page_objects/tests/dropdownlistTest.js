import { URLS } from "../data/Constants";
import examplePage from "../pages/ExamplePage"


const interfaceOptions = examplePage.interfaceSelect.find('option')    // FIND ELEMENT OPTIONS.


fixture('Select element from Dropdownlist')
    .page `${URLS.NEW_URL}`


test('Select element list', async t => {
    await t 
        .click(examplePage.interfaceSelect)
        .click(interfaceOptions.withText('Both'));  

} );