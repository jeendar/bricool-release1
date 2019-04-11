import { AbstractControl } from "@angular/forms";

export function PasswordValidator(control: AbstractControl): { [key : string] : boolean } | null {
    const pwd = control.get('account').get('pwd');
    const cpwd = control.get('account').get('cpwd');
    if(pwd.pristine || cpwd.pristine){
        return null;
    }
    return pwd && cpwd && pwd.value !== cpwd.value ?
        { 'misMatch' : true } :
        null;
}