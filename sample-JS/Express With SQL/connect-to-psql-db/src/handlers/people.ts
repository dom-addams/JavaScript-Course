import express, { Request, Response } from 'express' // import express
import { Person, PeopleStore } from '../models/data' // import Person and PeopleStore from ../models/data

const peopleStore = new PeopleStore() // create a new instance of PeopleStore

const index = async (_req: Request, res: Response) => { // create an index function
    const people: Person[] = await peopleStore.index() // create a people variable that is an array of Person objects
    res.json(people) // return the people variable as json
}

// create a people_routes function
const people_routes = (app: express.Application) => {
    app.get('/people', index) // create a route for the index function
}

// export the people_routes function
export default people_routes
