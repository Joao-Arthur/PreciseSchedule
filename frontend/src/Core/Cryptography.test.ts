import Cryptography from './Cryptography';

describe('Cryptography', () => {
    it('Should encrypt data', () => {
        const text = 'Lorem ipsum dolor sit amet';
        expect(Cryptography.encryptRSA(text)).not.toBe(text);
    });
});
