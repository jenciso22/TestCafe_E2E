import { URLS } from "../data/Constants";
import examplePage from "../pages/ExamplePage"

fixture('Set Page Timeout Fixture')
    .page `${URLS.NEW_URL}`


test('Set page timeout Test', async t => {
    await t 
        .setPageLoadTimeout(0)
        .navigateTo(URLS.NEW_URL)
} )