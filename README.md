# Healthcare Services API

This is a simple MEAN stack application for managing healthcare services using **Angular**, **Node.js**, **Express**, and **MongoDB**. The application allows users to create, read, update, and delete (CRUD) healthcare services.

## Features

- Add a new healthcare service
- Get a list of all healthcare services
- Update an existing healthcare service
- Delete a healthcare service

## Technologies Used

- **Angular** for frontend
- **Node.js** with Express for the backend
- **MongoDB** for the database (using Mongoose as the ORM)
- **Postman** for API testing

## Prerequisites

Make sure you have the following installed on your system:

- [Angular] (v17+)
- [Node.js](https://nodejs.org/) (v14+)
- [MongoDB](https://www.mongodb.com/) (running locally or using MongoDB Atlas)
- [Postman](https://www.postman.com/) (optional, for testing the API)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ameya-kanchan/Healthcare-API.git
```

### 2. Backend Setup 

```bash
cd healthcare-services-api
npm install
```

### 3. Start Application

```bash
node index.js
```
The server should start on http://localhost:3000 and you should see the message:
Server running on http://localhost:3000
MongoDB connected

### 4. Frontend Setup

```bash
cd frontend\healthcare-frontend
npm install
```

### 5. Start Angular Application

```bash
ng serve
```
Local:   http://localhost:4200/

## API Endpoints

### 1. Add a New Service (POST /services)
Request:
 - URL: http://localhost:3000/services
 - Method: POST
 - Body (JSON):
    {
    "name": "Blood Test",
    "description": "Comprehensive blood analysis",
    "price": 75
    }
 - Response:
    Success: 201 Created with the newly added service object.

### 2. Get All Services (GET /services)
Request:
 - URL: http://localhost:3000/services
 - Method: GET
 - Response:
    Success: 200 OK with an array of service objects.

### 3. Update a Service (PUT /services/)
 - Request:
 - URL: http://localhost:3000/services/:id
 - Method: PUT
 - Body (JSON):
    {
    "name": "Blood Test - Updated",
    "description": "Advanced blood test",
    "price": 100
    }
 - Response:
    Success: 200 OK with the updated service object.

### 4. Delete a Service (DELETE /services/)
 - Request:
 - URL: http://localhost:3000/services/:id
 - Method: DELETE
 - Response:
    Success: 200 OK with a message indicating the service was deleted.

## ERROR Handling 
The API will return appropriate HTTP status codes for various scenarios:
 - 400 Bad Request if required fields are missing.
 - 404 Not Found if the service with the given ID does not exist.
 - 500 Internal Server Error if there’s an issue on the server side.

## Testing the API
You can use Postman to test the API. The endpoints can be tested by making HTTP requests to the localhost:3000 server (or the appropriate URL if you deploy the API).
 - Create a service using the POST endpoint.
 - Fetch all services using the GET endpoint.
 - Update a service using the PUT endpoint.
 - Delete a service using the DELETE endpoint. 
