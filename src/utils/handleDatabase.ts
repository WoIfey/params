import { db } from './db'

export async function getData() {
    const data = await db.query('SELECT * FROM rows')
    return data.rows
}