# Notes - Authentication and Authorization With Node API

## TOPICS
* Password hashing and salt
* Implementing the bcrypt library for password hashing
* Introduction to JWT's
* Implementing JWTs with the library json-web-token

### Database Security - SALT and password hashing
Password *hashing* and *salt* obscure passwords so they're never stored as plain text string.

#### Hashes
* Run data through a function that will convert it into a sequence of random letter and numbers
* Minor changes in the input will result in different outputs
* The same input gets the same output
* Only work one-way, string-to-hash. You can't pass a hash and return a string.

#### Salt
* Extra bit of information added to original data before hashing it
* Process of adding random strings to every password
* Each instance is unique and doesn't repeat across any of the existing passwords
* Stores in the database/ENV VAR (must be kept secret)

### JWT - Data Structure
* Header
* Payload
* Signature
* Example: `asdgasiudgwiwg.wuiegaigoaiododahs.owaeooiese`

* `HEADER`

```
{
"alg": "HS256",
"typ": "JWT"
}

< BASE64 ENCODE>

sdgasiudgwiwg
```

* `PAYLOAD`

```
{
"user": "dominic",
"site": "udacity",
"role": "learner"
}

< BASE64 ENCODE>

wuiegaigoaiododahs
```

* `SIGNATURE`

```
(header + payload)

asdgasiudgwiwg.wuiegaigoaiododahs

HS256 --->

owaeooiese (signature)
```

> The signature is responsible for ensuring the JWT has not been tampered with and came from a trusted source
> Example signature generation = `function(hearder,payload,SECRET) = signature`
> Secret is likely to be stored as string in Authentication Service

> Useful Link [List of popular JSON Web Token implementations](https://jwt.io/introduction/)

### Using JWTs Correctly
When we use JWTs, we pass them as a special header called the Authorization header using this format:

`Authorization: Bearer <token>`

Where Bearer is a string separated by the token with a space.

#### Getting the header

In Node, we can locate the authorization header sent with a request like this:

`const authorizationHeader = req.headers.authorization`

Very similar to the way we get the request body.

#### Parsing the header

Then, to get the token out of the authorization header, we need some Javascript string parsing. 

The word "Bearer" and the token are together as string, separated by a space. 

They can be separated with this logic:

`const token = authorizationHeader.split(' ')[1]`

Where we split the string by the space, and take the second item. The second item being the token.

#### Retrieving From Request Header
Below example shows taking the authorization header and using JavaScript string parsing.

```
const create = async (req: Request, res: Response) => {
    try {
        const authorizationHeader = req.headers.authorization
        const token = authorizationHeader.split(' ')[1]
        jwt.verify(token, process.env.TOKEN_SECRET)
    } catch(err) {
        res.status(401)
        res.json('Access denied, invalid token')
        return
    }
}
```

#### Making a custom Express middleware
The below example function is virtually identical to before for retrieving token from auth header.

However, this is modified to be an express middleware function.

It is completed not with a return but by calling `next()`. 

If the token could not be verified, it will send that 401 error.

```
const verifyAuthToken = (req: Request, res: Response, next) => {
    try {
        const authorizationHeader = req.headers.authorization
        const token = authorizationHeader.split(' ')[1]
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET)

        next()
    } catch (error) {
        res.status(401)
    }
}
```

Calling with Express:

```
const mount = (app: express.Application) => {
    app.get('/users', index)
    app.get('/users/:id', show)
    app.post('/users', verifyAuthToken, create)
    app.put('/users/:id', verifyAuthToken, update)
    app.delete('/users/:id', verifyAuthToken, destroy)
}
```
