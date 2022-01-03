// Service d'authentification avec AXIOS - implémentation de 3 méthodes importantes pour les requêtes
// HTTP avex Axios
// login(): POST {username, password} & sauve le JWT dans le  Local Storage
// logout(): enlève le JWT du Local Storage
// register(): POST {username, email, password}

import axios from 'axios';

const API_URL = 'http://localhost:80/backend/api/auth/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'signin', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();