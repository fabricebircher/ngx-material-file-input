import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';

import { ErrorStateMatcher } from '@angular/material/core';

/**
* Shows error state on the file-input if a pdf-file is selected.
*/
export class ExampleErrorStateMatcher implements ErrorStateMatcher {
  public isErrorState(control: FormControl, _: NgForm | FormGroupDirective): boolean {
    return (control && control.value && control.value._fileNames && control.value._fileNames.endsWith('pdf'));
  }
}
