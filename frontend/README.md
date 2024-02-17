# Workout Bro

Workout Bro is a full-stack web application built with the MERN stack that allows users to add their workout routines on to the application. Secured with authentication using JSON Web Tokens (JWTs), users can ensure that their routines stay private to them.

## Technical Features

- **React:** The frontend of Workout Bro is built using React, a popular JavaScript library for building user interfaces. React's component-based architecture facilitates the creation of reusable UI components, ensuring a modular and maintainable codebase.

- **Vite:** Vite is utilized as the frontend build tool, providing fast and efficient bundling and hot module replacement during development. Its modern development environment enables rapid iteration and enhances developer productivity.

- **MongoDB with Mongoose:** MongoDB, a NoSQL database, serves as the backend database for storing workout routines and user data. Mongoose, an Object Data Modeling (ODM) library for MongoDB and Node.js, simplifies interactions with the database by providing a schema-based solution and powerful querying capabilities.

- **Express:** Express.js, a minimalist web framework for Node.js, is employed to build the backend server of Workout Bro. Express facilitates the creation of RESTful APIs to handle HTTP requests and responses, enabling seamless communication between the frontend and backend layers of the application.

- **JWT Authentication:** Workout Bro ensures secure authentication using JSON Web Tokens (JWTs). JWTs are issued to authenticated users upon successful login and subsequently used to authenticate and authorize access to protected routes and resources within the application. This helps maintain user privacy and data security.

- **bcrypt:** To enhance security, Workout Bro utilizes bcrypt, a popular password hashing library. bcrypt securely hashes and salts user passwords before storing them in the database, mitigating the risk of password-related security vulnerabilities such as brute-force attacks and password cracking.

Workout Bro seamlessly integrates these technologies to deliver a feature-rich and secure web application for managing workout routines, empowering users to track their fitness goals with confidence and privacy.
