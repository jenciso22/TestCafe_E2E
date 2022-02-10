import { URLS } from "../data/Constants";
import examplePage from "../pages/ExamplePage"

fixture('Navigate Example')
    .page `${URLS.NEW_URL}`


test('Navigate test', async t => {
    await t 
        .navigateTo('http://www.google.com');

} )