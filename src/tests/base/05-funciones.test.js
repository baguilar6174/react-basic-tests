import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Test in 05-funciones', () => {
    
    test('getUser should return a object', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();
        // console.log(user);

        // To compare objects
        expect(user).toEqual(userTest);
    })


    test('getUserActivo should return a object', () => {
        
        const name = 'Bryan';
        
        const userTest = {
            uid: 'ABC567',
            username: name
        };
        const user = getUsuarioActivo(name);
        // console.log(user);

        // To compare objects
        expect(user).toEqual(userTest);
    })
    
})
