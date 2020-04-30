import { FormControl, FormGroup, Validators } from "@angular/forms";
export class NewsFormControl extends FormControl {
    label: string;
    modelProperty: string;
    constructor(label: string, property: string, value: any, validator: any) {
        super(value, validator);
        this.label = label;
        this.modelProperty = property;
    }


    getValidationMessages() {
        let messages: string[] = [];
        if (this.errors) {
            for (let errorName in this.errors) {
                switch (errorName) {
                    case "required":
                        messages.push(`You must enter ${this.label}`);
                        break;
                    case "minlength":
                        messages.push(`A ${this.label} must be at least
    ${this.errors['minlength'].requiredLength}
   characters`);
                        break;
                    case "maxlength":
                        messages.push(`A ${this.label} must be no more than
    ${this.errors['maxlength'].requiredLength}
   characters`);
                        break; case "pattern":
                        messages.push(`The ${this.label} contains
    illegal characters`);
                        break;
                }
            }
        }
        return messages;
    }
}
export class NewsFormGroup extends FormGroup {
    constructor() {
        super({
            title: new NewsFormControl("Title", "title", "", Validators.required),
            fullNews: new NewsFormControl("Full News", "fullNews", "", Validators.required),
            image: new NewsFormControl("Image", "naimageme", "", Validators.required),
            description: new NewsFormControl("Description", "description", "",
                Validators.compose([Validators.required])),
            summary: new NewsFormControl("Summary", "summary", "",
                Validators.compose([Validators.required
            ]))
        });
    }


    get newsControls(): NewsFormControl[] {
        return Object.keys(this.controls)
            .map(k => this.controls[k] as NewsFormControl);
    }

    getFormValidationMessages(): string[] {
        let messages: string[] = [];
        this.newsControls.forEach(c => c.getValidationMessages()
            .forEach(m => messages.push(m)));
        return messages;
    }
}