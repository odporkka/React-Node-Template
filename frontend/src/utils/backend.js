const axios = require('axios');

const BACKEND_BASE_URL = process.env.BACKEND_BASE_URL

const testBackend = async () => {
    return axios.get(BACKEND_BASE_URL + '/status')
}

module.exports = {
    testBackend
}