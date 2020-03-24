// pas besoin de charger le module fs car je ne veux pas l'enregistrer dans un fichier mais le faire apparaitre
// sur la page internet.

const generalMethod = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Text', 'text/html');
        res.write('<html>');
        res.write('<head><title>Nom user</title></head>')
        res.write('<body><h1>Votre nom</h1>');
        res.write('<h3>Renseignez votre nom et appuyez sur envoyer</h3>');
        res.write('<form action="/nom" method="POST"/><input type="text" name="nom"><button type="submit">Envoyer</button></body>')
        res.write('</html>');
        res.end();

    }


    if (url === '/nom' && method === 'POST') {
        const table = [];
        req.on('data', (chunk) => {
            table.push(chunk);
        });

        return req.on('end', () => {
            const parse = Buffer.concat(table).toString('utf-8');
            const name = parse.split('=')[1];
            // redirection
            // res.writeHead(301, {location: '/affiche'});
            res.setHeader('Content-Text', 'text/html');
            res.write('<html>');
            res.write('<head><title>Nom user</title></head>')
            res.write('<body><h1>Votre nom</h1>');
            res.write('<p> votre nom est <strong>' + name + '</strong>.</p>');
            res.write('</html>');
            res.end();
        });
    }


    
    // res.statusCode = 404;
    // // res.setHeader('Content-Type', 'text/html');
    // res.write('<html>');
    // res.write('<head><title>Erreur 404</title></head>');
    // res.write('<body><h1>Erreur 404</h1></body>');
    // res.write('</html>');
    // return res.end();
}

module.exports = generalMethod;