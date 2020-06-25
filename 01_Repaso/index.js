const request = require('request');
//Var -->de alcence global (MALA PRACTICA)

//ES6
//let --> variable de alcance local
//CONST --> constante de alcance local


//Fuciones anomina que no tienen nombre es6  const miFuntion = ()=>{}
/* const api_url = '';
/* 
Esta esta una funcion de Oden SUperior
(Higher Order Funciton)
--> funciones que reciben como argumento otra funcion
*/

/* request.get(api_url, () => {
/* 
Esta funcion que se ejecuta dentro de la funcion de orden superior, se conoce como CALLBACK

}) */

/* //Sin autenticacion 
const api_url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes/5';
request.get(api_url, (err, res, body) => {
    if (res.statusCode === 200) {
        const json =JSON.parse(body)
        console.log(json[0].quote);
    } else {
        console.log(res.statusCode, err);

    }
});
 */
/* const API_KEY = '1';
const ARTIST = 'Bon Jovi'
const END_POINT_MUSCI = `https://www.theaudiodb.com/api/v1/json/${API_KEY}/search.php?s=${ARTIST}`;

request.get(END_POINT_MUSCI, (err, res, body) => {
    if (res.statusCode === 200) {
        const json = JSON.parse(body);
        console.log(json.artists[0].strBiographyES);
    } else {
        console.log(res.statusCode, err);

    }
}); */


//const api_finace = 'https://developer.tradier.com/';
const TOKEN=''
request({
    method: 'post',
    url: 'https://sandbox.tradier.com/v1/oauth/accesstoken',
    form: {
       'grant_type': 'authorization_code',
       'code': 'PRpnf1o7'
    },
    headers: {
      'Authorization': '<TOKEN>',
      'Accept': 'application/json'
    }
  }, (error, response, body) => {
      console.log(response.statusCode);
      console.log(body);
  });


