
describe('Tests in demo.test.js file', () => {
    
    test('equals string', () => {
        
        // 1. Inicialización
        const message = 'Hola mundo';

        // 2. Estímulo
        const message2 = `Hola mundo`;

        // 3. Observe behavior
        expect(message).toBe(message2); // ===

    });

});
