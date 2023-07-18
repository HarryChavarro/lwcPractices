import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

 // imports
 export default class BoatSearch extends LightningElement {
    isLoading = false;
    
    // Handles loading event
    handleLoading() { 
        this.isLoading = true;
    }
    
    // Handles done loading event
    handleDoneLoading() {
        this.isLoading = false;
     }
    
    // Handles search boat event
    connectedCallback(){
        this.isLoading = true;

    }
    // This custom event comes from the form
    searchBoats(event) { }
    
    createNewBoat() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Boat__c',
                actionName: 'new'
            }
        });
     }
  }
  