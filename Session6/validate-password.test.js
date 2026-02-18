const validatePassword = require('./validate-password.js');
describe('Password Checker', () => {
    it('should return false when provided an empty password', () => {
        expect(validatePassword("")).toBeFalsy();
    });
    it('should return true when password is 8 characters or longer, has a letter and a number', () => {
        expect(validatePassword("12345678a")).toBeTruthy();
    });
    it('should return false when password is 8 characters or longer but has no letters', () => {
        expect(validatePassword("123456789")).toBeFalsy();
    });
    it('should return false when password is 8 characters or longer but has no numbers', () => {
        expect(validatePassword("abcdefghi")).toBeFalsy();
    });
    it('should return false when password is 8 characters or longer but has only upper case letters', () => {
        expect(validatePassword("ABCDEFGH")).toBeFalsy();
    }); //Didn't fail when expected to
    it('should return false when password is less than 8 characters', () => {
        expect(validatePassword("A1")).toBeFalsy();
    });
    it('should return false when password is null', () => {
        expect(validatePassword("")).toBeFalsy();
    });
})
