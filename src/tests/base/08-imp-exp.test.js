import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Test 08-imp-exp', () => {

    test('should return a hero by id', () => {

        const id = 1;
        const hero = getHeroeById(id);
        const heroData = heroes.find((h) => h.id === id);
        expect(hero).toEqual(heroData);
    });

    test("should return undefined if hero doesn't exist", () => {

        const id = 10;
        const hero = getHeroeById(id);
        expect(hero).toBe(undefined);
    });

    test("should return array with DC's heroes", () => {
        const owner = 'DC';
        const arr = getHeroesByOwner(owner);
        expect(arr).toEqual([
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }
        ]);
    });

    test('should return array with Marvels heroes with length 2', () => {
        const owner = 'Marvel';
        const arr = getHeroesByOwner(owner);
        expect(arr.length).toBe(2); 
    });
    


})
