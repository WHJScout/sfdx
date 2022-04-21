import {
    LightningElement,track
} from 'lwc';

export default class SimpleCalculator extends LightningElement {

    currentResult;

    firstNumber;
    secondNumber;

    areDetailsVisible;
    @track results = [];

    handleFirstNumberChange(evt) {
        console.log(`evt.target.name is ${evt.target.name}`);
        if (evt.target.name == 'firstNumber') {
            this.firstNumber = evt.target.value;
        } else {
            this.secondNumber = evt.target.value;
        }
    };

    handleAddClick() {
        // this.currentResult = "The result is: " + (parseInt(this.firstNumber) + parseInt(this.secondNumber));
        // this.currentResult = `The result is: ${parseInt(this.firstNumber)+parseInt(this.secondNumber)}`
        let first = parseInt(this.firstNumber);
        let second = parseInt(this.secondNumber);
        let result = first + second;
        this.currentResult = `The result is: ${result}`;
        this.clear();
        this.addResults(this.currentResult);
    };

    handleSubClick() {
        let first = parseInt(this.firstNumber);
        let second = parseInt(this.secondNumber);
        let result = first - second;
        this.currentResult = `The result is: ${result}`;
        this.clear();
        this.addResults(this.currentResult);
    };

    handleMultiClick() {
        let first = parseInt(this.firstNumber);
        let second = parseInt(this.secondNumber);
        let result = first * second;
        this.currentResult = `The result is: ${result}`;
        this.clear();
        this.addResults(this.currentResult);
    };

    handleDivideClick() {
        let first = parseInt(this.firstNumber);
        let second = parseInt(this.secondNumber);
        let result = first / second;
        this.currentResult = `The result is: ${result}`;
        this.clear();
        this.addResults(this.currentResult);
    };

    clear() {
        this.template.querySelectorAll('lightning-input').forEach(element => {
            if (element.type === 'checkbox' || element.type === 'checkbox-button') {
                // element.checked = false;
            } else {
                element.value = null;
            }
        });
    };

    addResults(msg) {
        console.log(msg);
        this.results.push(msg);
        console.log(this.results);
    }

    handleCheckChange(evt) {
        if(evt.target.checked){
            console.log(`result is true`);
        }else{
            console.log(`result is false`);
        }

        this.areDetailsVisible = evt.target.checked;

    };

}