export class PwdChangeReset {
    newPassword: string;
    confirmPassword: string;
    constructor(
        newPassword: string,
        confirmPassword: string) {
        this.newPassword = newPassword;
        this.confirmPassword = confirmPassword;
    }
}
