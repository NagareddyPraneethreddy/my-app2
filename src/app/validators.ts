import { AbstractControl } from "@angular/forms";

export function domainValidator(control: AbstractControl) {
    if (control.value?.includes('@capgemini.com')) {
        return null;
    }
    else {
        return { 'domainValidator': '@capgemini.com is missingg' }
    }
}
export function stateValidator(control: AbstractControl) {
    if (control.value?.toLowerCase() == 'andhara pradesh' || control.value?.toLowerCase() == 'telangana') {
        return null;
    }
    else {
        return { 'stateValidator': 'Only Andhrapradesh and Telangana state Accepted' }
    }
}