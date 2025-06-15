/**
 * Script Node.js para pegar o clima de Itaitinga-CE usando a sua API RapidAPI.
 * Não precisa de AsyncHttpClient. Usamos a biblioteca padrão HTTPS do Node.
 */

const https = require('https');
const fs = require('fs');

// Dados da sua chave RapidAPI:
const options = {
  hostname: 'open-weather13.p.rapidapi.com',
  path: '/fivedaysforcast?latitude=-3.9658&longitude=-38.5292&lang=PT',
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'eb1686163emshede8eb215211fb6p1b801cjsn3af05a99be74',
    'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
  }
};

const req = https.request(options, res => {
  let data = '';

  res.on('data', chunk => {
    data += chunk;
  });

  res.on('end', () => {
    fs.writeFileSync('weather.json', data);
    console.log('Arquivo weather.json criado!');
  });
});

req.on('error', error => {
  console.error(error);
});

req.end();
