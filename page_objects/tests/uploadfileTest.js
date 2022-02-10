import { URLS } from "../data/Constants";
import examplePage from "../pages/ExamplePage"



fixture('Upload a file Fixture')
    .page `${URLS.UPLOADFILE_URL}`


test('Upload an Image test', async t => {
    await t 
        .setFilesToUpload(examplePage.fileUpload, '../../upload/logo.png')  // UPLOAD AN IMAGEN, YOU NEED TO HAVE THE IMAGE ON A FOLDER ON THE PROJECT..
        .clearUpload(examplePage.fileUpload) // CLEAR UPLOAD
        // .debug()  //TO DEBUG THE TEST..
        .setFilesToUpload(examplePage.fileUpload, '../../upload/logo.png')  // UPLOAD AN IMAGEN, YOU NEED TO HAVE THE IMAGE ON A FOLDER ON THE PROJECT..
        .click(examplePage.uploadFileButton)


} );