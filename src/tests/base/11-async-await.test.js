import { getImagen } from "../../base/11-async-await"

describe('Test in 11-async-await', () => {
    test('should return image url', async () => {
        const url = await getImagen();
        expect(url.includes('https://')).toBe(true);
    })
    
})
