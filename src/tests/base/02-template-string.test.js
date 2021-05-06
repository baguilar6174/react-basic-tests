import { getSaludo } from '../../base/02-template-string';

describe('Tests in 02-template-string.js file', () => {
    
    test('test in getSaludo method with argument', () => {
        
        // 1. Inicialización
        const name = 'Bryan';

        // 2. Estímulo
        const greting = getSaludo( name );

        // 3. Observe behavior
        expect(greting).toBe( 'Hola '+ name ); // ===

    });

    test('test in getSaludo method without argument', () => {
        
        const greting = getSaludo();
        expect(greting).toBe('Hola Alexander'); // ===

    });

});
