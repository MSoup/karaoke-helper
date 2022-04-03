import {Request, Response, NextFunction, response } from 'express';
import axios, { AxiosResponse } from 'axios';

interface User {
    id: number;
    firstName: string;
    lastName: string;
    retrievedAt: string;
}

import Pool = require('pg')
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
})

// error handler for pool, callback fires on error
pool.on('error', (err, client) => {
    console.error('Error:', err);
});

const query = `
SELECT *
FROM users
`;

pool.connect()
    .then((client) => {
        client.query(query)
            .then(res => {
                for (let row of res.rows) {
                    console.log(row);
                }
            })
            .catch(err => {
                console.error(err);
            });
    })
    .catch(err => {
        console.error(err);
    });






const endpoints = {
    USERS: "https://jsonplaceholder.typicode.com/users"
}

// Gets all users from the fake endpoint
const getUsers = async (req: Request, res: Response, next: NextFunction) => {    
    let result: AxiosResponse = await axios.get(endpoints.USERS)
    let users: [User] = result.data;
    return res.status(200).json({
        message: users
    })
}

// Gets a user from the fake endpoint
const getUser = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    console.log(req.params)
    let result: AxiosResponse = await axios.get(`${endpoints.USERS}/${id}`)
    let user: User = result.data;
    return res.status(200).json({
        message: user
    })
}

// Gets a user from the fake endpoint but curates the information
const getTestUser = async (req: Request, res: Response, next: NextFunction) => {
    let id: String = req.params.id;
    let result: AxiosResponse = await axios.get(`${endpoints.USERS}/${id}`)
    let user: User = {
        id: result.data.id,
        firstName: result.data.name.split(" ")[0],
        lastName: result.data.name.split(" ")[1],
        retrievedAt: new Date().toLocaleString(),
    }
    console.log(user)
    return res.status(200).json({
        message: user
    })
}

export default {
    getUsers, 
    getUser, 
    getTestUser
};