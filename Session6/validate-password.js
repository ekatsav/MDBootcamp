// We have been asked to ensure that passwords entered on a website follow a required criteria:
// At least 8 characters long
// Contains at least one letter
// Contains at least one number

// When all of these are met than a password is deemed to be of the required format.

// const validatePassword = () => false;

//always remember to export/import when it comes to testing

// const validatePassword = (password) => {
//     if (password.length >= 8) {
//         return true;
//     }
// return false;
// };

// const validatePassword = (password) => password.length >= 8;

// const validatePassword = (password) =>
//     password.length >= 8 && /[a-z]/g.test(password); //ARRAY RANGING A-Z?

// const validatePassword = (password) => {
//     const hasCorrectLength = password.length >= 8;
//     const hasLetters = /[a-z]/g.test(password);

//     return hasCorrectLength && hasLetters;
// }

// const validatePassword = (password) => {
//     const hasCorrectLength = password.length >= 8;
//     const hasLetters = /[a-z]/g.test(password);
//     const hasNumbers = /[0-9]/g.test(password);
//     return hasCorrectLength && hasLetters && hasNumbers;
// }

const validatePassword = (password) => {
    const hasCorrectLength = password.length >= 8;
    const hasLetters = /[a-zA-Z]/g.test(password);
    const hasNumbers = /[0-9]/g.test(password);
    return hasCorrectLength && hasLetters && hasNumbers;
}

module.exports = validatePassword; 

