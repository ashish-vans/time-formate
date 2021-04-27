import { LightningElement,track} from 'lwc';
export default class App extends LightningElement {
  @track message = 'Hello World';
  @track date = '26-04-2021';
 @track x;

    initDate() {
        this.x = new Date();
    }

    updateDate() {
        this.x.setHours(7);
    }
}
    

