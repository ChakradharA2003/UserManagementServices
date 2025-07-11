# User Management API

User Management System – Backend-Only Secure API
A robust backend system designed to manage user records with authentication and role-based access, simulating core user operations for admin dashboards and enterprise apps.

Developed secure RESTful APIs for user registration, login (JWT-based), profile retrieval, updates, and deletion.

Implemented authentication middleware using JSON Web Tokens to protect sensitive routes.

Used bcrypt.js for password hashing and enforced unique constraints on mobile and PAN numbers.

Built with Node.js, Express.js, SQLite, and Morgan for structured logging and debugging.

Ensured clean architecture with modular controllers, routes, and models for scalable maintenance.

Focused on solving the gap in lightweight, token-secured user management systems for small apps without heavy DB overhead.

Tech Stack: **Node.js, Express.js, SQLite, JWT, bcrypt.js, dotenv, morgan**. 

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install dependencies.

```bash
npm install
```



## Usage

Start the server using:

```bash
node index.js
```

The API will be running at **https://user-management-services-7vqm.onrender.com**

## API Endpoints

### Authentication Routes

#### Register a User
Request Type: POST
```https
https://user-management-services-7vqm.onrender.com/auth/register
```
**Request Body**
```json
{
  "full_name": "John Doe",
  "mob_num": "9876543210",
  "pan_num": "ABCDE1234F",
  "password": "securepassword"
}
```
**Response**
```json
{
  "message": "User registered successfully"
}
```

#### Login a User
Request Type: POST
```https
https://user-management-services-7vqm.onrender.com/auth/login
```
**Request Body**
```json
{
  "mob_num": "9876543210",
  "password": "securepassword"
}
```
**Response**
```json
{
  "token": "your_jwt_token_here"
}
```

#### Logout a User
Request Type: GET
```https
https://user-management-services-7vqm.onrender.com/auth/logout
```
**Response**
```json
{
  "message": "Logged out successfully"
}
```

---

### User Management Routes (Requires JWT Token)

#### Get All Users
Request Type: GET
```https
https://user-management-services-7vqm.onrender.com/users/all_users
```
**Headers**
```
Authorization: Bearer your_jwt_token_here
```
**Response**
```json
[
  {
    "user_id": "123456",
    "full_name": "John Doe",
    "mob_num": "9876543210",
    "pan_num": "ABCDE1234F",
    "created_at": "2024-03-27 10:30:00"
  }
]
```

#### Get a Single User
Request Type: GET
```https
https://user-management-services-7vqm.onrender.com/users/user/:id
```
**Response**
```json
{
  "user_id": "123456",
  "full_name": "John Doe",
  "mob_num": "9876543210",
  "pan_num": "ABCDE1234F",
  "created_at": "2024-03-27 10:30:00"
}
```

#### Update a User
Request Type: PUT
```https
https://user-management-services-7vqm.onrender.com/users/update_user
```
**Request Body**
```json
{
  "user_id": "123456",
  "full_name": "John Updated"
}
```
**Response**
```json
{
  "message": "User updated successfully"
}
```

#### Delete a User
Request Type: DELETE
```https
https://user-management-services-7vqm.onrender.com/users/delete/:id
```
**Response**
```json
{
  "message": "User deleted successfully"
}
```

---

## Testing the API in Postman

1. **Register a User**
   - Send `POST /auth/register` with user details.
   
2. **Login to Get JWT Token**
   - Send `POST /auth/login` and copy the token.

3. **Use Token in Protected Routes**
   - Add this header in requests:
     ```
     Authorization: Bearer your_jwt_token_here
     ```
   - Now test `GET /users/all_users`, `GET /users/user/:id`, etc.

4. **Update & Delete Users**
   - Send `PUT /users/update_user` with updated details.
   - Send `DELETE /users/delete/:id` to remove a user.

5. **Logout**
   - Send `GET /auth/logout` to end the session.

---


