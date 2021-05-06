import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Test in 09-promises', () => {
    
    /**
     * Con tareas asíncronas es necesario agregar el argumento done al test y ejecutar el método done()
     */
    
    test('should return a hero async', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toBe(heroes[0]);
                done();
            });

    });

    test("should get a error if hero by id doesn't exist", (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });

    });
    

})
