import dotenv from 'dotenv';
dotenv.config();

const env = process.env;

// app
export const NODE_ENV = env.NODE_ENV;
export const API_URL = env.API_URL;
export const API_PORT = env.API_PORT;

