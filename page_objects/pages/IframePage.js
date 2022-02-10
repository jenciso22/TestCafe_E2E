import { Selector, t } from "testcafe";

class IframePage{
    constructor(){ 
        this.iframeName = Selector('iframe#mce_0_ifr')
        this.textArea = Selector ('body#tinymce.mce-content-body')


    }
}

export default new IframePage
