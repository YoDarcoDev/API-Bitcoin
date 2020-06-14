const url = 'https://blockchain.info/ticker';

function recupererPrix() {
  
  let requete = new XMLHttpRequest(); 
  requete.open('GET', url) 
  requete.responseType = 'json'; 
  requete.send(); 

  requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) { 
      if (requete.status === 200) { 
        let reponse = requete.response;
        let prixEnEuros = reponse.EUR.last;
        let prixEnDollars = reponse.USD.last;
        document.querySelector('#price_label_euros').textContent = prixEnEuros;
        document.querySelector('#price_label_dollars').textContent = prixEnDollars;
      }
      else {
        alert("Un problème est intervenu, merci de revenir plus tard.");
      }
    }
  }
  console.log("Prix actualisé");
}

setInterval(recupererPrix, 5000);