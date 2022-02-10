import { Selector, t } from "testcafe";

class ExamplePage{
    constructor(){ 
        this.fieldName = Selector('#developer-name')
        this.boxMacos = Selector ('#macos')
        this.submitButton = Selector('#submit-button')

        this.interfaceSelect = Selector('select#preferred-interface')

        this.fileUpload = Selector ('input#file-upload')
        this.uploadFileButton = Selector ('input#file-submit.button')

        this.triedCheckbox = Selector ('label').withText("I have tried TestCafe")
        this.slider = Selector ('#slider')

        this.populateButton = Selector('input#populate')


    }
}

export default new ExamplePage


