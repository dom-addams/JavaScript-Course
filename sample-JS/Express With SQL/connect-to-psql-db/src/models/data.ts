import db_pool from '../database';

export type Person = {
    id: number;
    name: string;
    age: number;
    birthday: Date;
};

export class PeopleStore {
    async index(): Promise<Person[]> {
        try {
            const conn = await db_pool.connect();
            const sql = 'SELECT * FROM my_table';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch (err) {
            throw new Error(`Could not get people. Error: ${err}`);
        }
    }
}
