# User Management API

User Management API is a Node.js backend that provides user authentication and CRUD operations using **Express.js, SQLite, and JWT authentication**.

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

The API will be running at **http://localhost:5000**

## API Endpoints

### Authentication Routes

#### Register a User
```http
POST /auth/register
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
```http
POST /auth/login
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
```http
GET /auth/logout
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
```http
GET /users/all_users
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
```http
GET /users/user/:id
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
```http
PUT /users/update_user
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
```http
DELETE /users/delete/:id
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



#   U s e r M a n a g e m e n t S e r v i c e s  
 