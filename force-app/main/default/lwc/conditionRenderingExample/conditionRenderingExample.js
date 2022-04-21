import { LightningElement,track } from 'lwc';

export default class ConditionRenderingExample extends LightningElement {
    flag = false;
    @track data = [
        {
            name:'wang',
            gender:'man',
            age:19
        },
        {
            name:'heng',
            gender:'woman',
            age:30
        },
    ];

    checkBoxOnChanged(event){
        this.flag = event.target.checked;
        
    }
 
    
}