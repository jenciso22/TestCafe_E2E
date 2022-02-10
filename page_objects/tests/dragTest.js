import { URLS } from "../data/Constants";
import examplePage from "../pages/ExamplePage"

fixture('Drag Test Fixture')
    .page `${URLS.NEW_URL}`


test('Drag Slider Test', async t => {
    await t
        .setTestSpeed(0.01)
        .click(examplePage.triedCheckbox)
        .drag(examplePage.slider,360,0,{offsetX:10, offsetY:10})


} )