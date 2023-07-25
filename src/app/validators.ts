import { AbstractControl } from "@angular/forms";

export function domainValidator(control:AbstractControl){
    if(control.value?.includes('@capgemini.com')){
        return null;
    }
    else{
        return{'domainValidator':'@capgemini.com is missingg'}
    }
}