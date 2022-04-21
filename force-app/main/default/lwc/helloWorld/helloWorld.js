import {
    LightningElement
} from 'lwc';

export default class HelloWorld extends LightningElement {

    dynimacGreet;

    handleChange(event) {
        this.dynimacGreet = event.target.value;
    };

    

}