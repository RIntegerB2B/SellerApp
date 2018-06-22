export class PwdChangeReset {
    newPassword: string;
    confirmPassword: string;
    emailKey: string;
    constructor(
        newPassword: string,
        confirmPassword: string,
        emailKey: string) {
        this.newPassword = newPassword;
        this.confirmPassword = confirmPassword;
        this.emailKey =emailKey;
    }
}
