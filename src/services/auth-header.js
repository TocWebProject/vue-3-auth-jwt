// SERVICE DATA
// Nous avonc ici des méthodes pour récupérer des données venant du serveur.
// Dans le cas ou on souhaite accèder à des resources protégées -> la requête http à besoin d'un Authorization Header. 

// On regarde si il ya un token dans le local storage de l'user.
// Si il y a un accesToken JWT, on retourne le HTTP Authorization header. Sinon on re tourne un objet vide. 

export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.accessToken) {
      // for Node.js Express back-end
      return { 'x-access-token': user.accessToken };
    } else {
      return {};
    }
}