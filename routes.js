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

// nom == create-user
    if (url === '/nom' && method === 'POST') {
        const table = [];
        req.on('data', (chunk) => {
            table.push(chunk);
        });

        return req.on('end', () => {
            const parse = Buffer.concat(table).toString('utf-8');
            res.writeHead(301, {location: '/affiche'});
            res.end();
            return  name = parse.split('=')[1];
        });
        
    }


// affiche == users
    if (url === '/affiche') {
        res.setHeader('Content-Text', 'text/html');
        res.write('<html>');
        res.write('<head><title>Nom user</title></head>')
        res.write('<body><h1>Votre nom</h1>');
        res.write('<p> votre nom est <strong>' + name + '</strong>.</p>');
        res.write('</html>');
        res.end();

    }


}

module.exports = generalMethod;