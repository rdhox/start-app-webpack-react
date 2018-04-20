const express= require('express'),
    app = express();
 

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.render('dist/index.html');
});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('The page you try to reach is not available.');
});

app.listen(3000, ()=> {
    console.log('listen on 3000');
});