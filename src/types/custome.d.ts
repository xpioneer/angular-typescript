import { FormGroup, FormControl } from '@angular/forms'

declare global {

  type FormFields<T = AnyObject> = {
    [P in keyof T]: FormControl<T[P]>
  }
  
  type ValidateForm<T = any> = FormGroup<FormFields<T>>
  
}
