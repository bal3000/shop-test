export class ContactForm {

    public firstName: string;
    public lastName: string;
    public email: string;
    public reason: string;
    public message: string;

    constructor(public reasons: any[]) {
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.reason = "";
        this.message = "";
    }
}