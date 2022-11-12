const signs = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!?_";

export function generatePassword(passwordArea, passLength) {
    let signTable = [];
    let randomPassword = '';

    const passwordLength = passLength;

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * signs.length);
        const randomSign = signs[randomIndex];
        signTable.push(randomSign);
        randomPassword = signTable.join('');
    }
    signTable = [];
    passwordArea.textContent = randomPassword;
}