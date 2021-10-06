import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 5zbUkiVkixcCkYcs7zA4NbGDYfl7ZaFI9KFeArfgozg'
    }
});

