import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationFlowService {

  private navigationFlow = [
    { step : 'personal', valid : false},
    { step : 'address', valid : false},
    { step : 'account', valid : false},
    { step : 'confirmation', valid : false}
  ];

  validateStep(step : string){
    var found = false;
    for(var i = 0;i<this.navigationFlow.length && !found;i++){
      if(this.navigationFlow[i].step === step){
        this.navigationFlow[i].valid = found = true;
      }
    }
  }

  resetSteps() {
    this.navigationFlow.forEach(element => {
      element.valid = false;
    });
  }

  getFirstInvalidStep(step: string) : string {
    var found = false;
    var valid = true;
    var redirectToStep = '';
    for (var i = 0; i < this.navigationFlow.length && !found && valid; i++) {
        let item = this.navigationFlow[i];
        if (item.step === step) {
            found = true;
            redirectToStep = '';
        }
        else {
            valid = item.valid;
            redirectToStep = item.step
        }
    }
    return redirectToStep;
  }
  constructor() { }
}
