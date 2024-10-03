import axios from "axios";

// Creating an axios instance with a base URL
const instance = axios.create({
    baseURL: 'http://localhost:5000/v1',  // Base URL for API requests
    auth: {
        username: 'admin',
        password: 'admin'
    }
});

export default instance;