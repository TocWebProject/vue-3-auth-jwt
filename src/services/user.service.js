// Accèder au data de l'user
// Comme on peut le voir que nous avons le header HTTP avec l'aide de la function authHeader() 
// lorsqu'on demande l'accès a des ressources protégées. 

import axios from 'axios';
import authHeader from './auth-header.js';

const API_URL = 'http://localhost:80/backend/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

//   getModeratorBoard() {
//     return axios.get(API_URL + 'mod', { headers: authHeader() });
//   }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();