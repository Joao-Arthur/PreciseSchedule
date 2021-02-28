import Authorization from './Authorization';

describe('Authorization', () => {
    it('Should generate a 256 characters long salt', () => {
        expect(Authorization.generateSalt().length).toBe(256);
    });

    it('Should generate 1 iteration', () => {
        expect(Authorization.getIterations()).toBe(1);
    });

    it('Should encrypt data', () => {
        const text = 'Lorem ipsum dolor sit amet';
        expect(Authorization.encryptRSA(text)).not.toBe(text);
    });

    it('Should decrypt data', () => {
        const text = 'Lorem ipsum dolor sit amet';
        const encryptedText = Authorization.encryptRSA(text);
        expect(Authorization.decryptRSA(encryptedText)).toBe(text);
    });
});
