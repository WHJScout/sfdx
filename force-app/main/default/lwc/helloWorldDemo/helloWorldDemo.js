import { LightningElement, track  } from 'lwc';
export default class HelloWorldDemo extends LightningElement {
    @track name = "zhongguo";
    @track student = {
        age : 18,
        gender: 'man'
    }

    nameChange(event) {
        this.student.gender= event.target.value;
    }

}