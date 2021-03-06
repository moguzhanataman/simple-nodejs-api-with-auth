# Case Study for 4dsight

## User Authentication System

Using the Nodejs/Express library and the MongoDB database, create a membership system that hosts the following Rest Api endpoints of an application.

### Requirements

- Node.js/Express
- MongoDB
- JSON Web Token
- RESTful
- Event-Driven Programming

## Endpoints

---

### POST /signup

Input:

```json
{
  "email": "oguzhan@example.com",
  "firstname": "Oguzhan",
  "lastname": "Ataman",
  "password": "123"
}
```

Output:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9ndXpoYW5AZXhhbXBsZS5jb20iLCJmaXJzdG5hbWUiOiJPZ3V6aGFuIiwibGFzdG5hbWUiOiJBdGFtYW4iLCJwYXNzd29yZCI6IjEyMyIsImxhc3RUb2tlbklzc3VlZEF0IjoxNjM1MDk3MDg3LCJfaWQiOiI2MTc1OTlmZjIxZWY1MzQxMWQyNmQ2ZmYiLCJfX3YiOjAsImlhdCI6MTYzNTA5NzA4N30.kn0t3DNH7tB63Sti4qyTbFPqzbiFkZLVHPqfrjTOuuY"
}
```

Email exists:

```json
{
  "error": "email already exists"
}
```

---

### POST /login

Input:

```json
{
  "email": "oguzhan@example.com",
  "password": "123"
}
```

Output:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTc1OTlmZjIxZWY1MzQxMWQyNmQ2ZmYiLCJlbWFpbCI6Im9ndXpoYW5AZXhhbXBsZS5jb20iLCJmaXJzdG5hbWUiOiJiIiwibGFzdG5hbWUiOiJhIiwibGFzdFRva2VuSXNzdWVkQXQiOjE2MzUwOTk0NzAsIl9fdiI6MCwiaWF0IjoxNjM1MDk5NDg2fQ.zHC4L-Q1jU9Ndh0vOWIiGljwo5voVSAqB7j5oWGDKB4"
}
```

Incorrect login:

```json
{
  "error": "Email or password incorrect"
}
```

---

### GET /my-profile

Output:

```json
{
  "_id": "617599ff21ef53411d26d6ff",
  "email": "oguzhan@example.com",
  "firstname": "Oguzhan",
  "lastname": "Ataman",
  "lastTokenIssuedAt": 1635099588,
  "__v": 0,
  "iat": 1635099589
}
```

---

### POST /logout

Output:

```json
{
  "success": true
}
```

---

### GET /code

Output (swapping possible)

```json
{
  "code": "OguzhanAtamna"
}
```

Output (swapping not possible)

```json
{
  "error": "No swapping possible"
}
```

---

### For all endpoints require authentication but user logged out

```json
{
  "error": "Token expired"
}
```
