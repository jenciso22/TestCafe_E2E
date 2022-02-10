import { URLS } from "../data/Constants";
import iframePage from "../pages/IframePage"

fixture('Iframe Fixture')
    .page `${URLS.FRAME_URL}`


test('Iframe test', async t => {
    await t 
        .switchToIframe(iframePage.iframeName)
        .click(iframePage.textArea)
        .pressKey('ctrl+a delete')
        .typeText(iframePage.textArea, 'Hello from TAU')
        .expect(iframePage.textArea.innerText).contains('TAU')
        .switchToMainWindow();

} )