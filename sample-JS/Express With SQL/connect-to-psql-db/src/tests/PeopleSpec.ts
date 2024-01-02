import { PeopleStore, Person } from '../models/data';

const store = new PeopleStore();

describe('People Model', () => {
    it('should have an index method', () => {
        expect(store.index).toBeDefined();
    });

    it('index method should return a list of people', async () => {
        const result = await store.index();
        expect(result).toEqual([]);
    });
});
