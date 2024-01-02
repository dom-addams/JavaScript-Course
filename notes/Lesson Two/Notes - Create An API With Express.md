# Notes - Create An API With Express

## TOPICS
* RESTful API structure
* Express for incoming requests
* Breaking Express routes into separate files
* Mapping RESTful routes to model methods
* Testing routes

### RESTful APIs
Focus is on what happens when a client-side (aka from a browser or end user) request reaches our API.

REST implies a specific set of API endpoints for every entity in the app.

There are five actionable RESTful routes for APIs: `INDEX`,`SHOW`,`CREATE`,`EDIT`,`DELETE`

Official definition = Representational State Trasnfer(-ful) Application Progamming Interface

Better definition = A pattern for organising API endpoints

### Routes
* `INDEX`
	* `/people --> GET`
	* Index route 
	* Returns all properties for all items in of this "type" in the database

* `SHOW`
	* `/people/:id --> GET`
	* Show Route
	* Returns a single object from the database
	* Matches based on the parameter provided in URL

* `CREATE`
	* `/people --> POST`
	* Create route
	* Returns a copy of the newly populated data
	* POST type request to add data as new item/row in the database

* `EDIT`
	* `/people/:id --> PUT/PATCH`
	* Update route
	* Matches based on the parameter provided in URL to update object in the database
	* Returns a copy of the updated object

* `DELETE`
	* `/people/:id --> DELETE`
	* Delete route
	* Matches based on the parameter provided in URL to select object to delete
	* Returns the deleted object

> [Video for request flow](https://youtu.be/pSV-xG1Q35s)

### Routes to Models
A folder handlers should be created for the RESTful endpoints that will call the Model.

There is one handler file per model file.

The job of the handler file is to store all the routes for the model.

Example access Model with Express in Hadler File:

```
import express, { Request, Response } from 'express'
import { Weapon, MyWeaponStore } from '../models/weapon'

const store = new MyWeaponStore()

const index = async (req: Request, res: Response) => {
	const weapons = await store.index()
	res.json(weapons)
}

const my_weapon_route = (app: express.Apllication) => {
	app.get('/weapons', index)
}

export default my_weapon_route

----------------------
server.ts file:

import my_weapon_route from './handlers/weapons'

my_weapon_route(app)
```

