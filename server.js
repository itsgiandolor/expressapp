const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.listen(3000);

//Home Page
app.get('/', (req, res) => {
    
    const blogs = [     
        {title: 'Mia can lift ', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Wala nang roads', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Jonnie Confession', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];

    res.render('index', {title: "Home", blogs})
})

//About page
app.get('/about', (req, res) => {
    res.render('about', {title: "About"})
})

//Redirect of about Page
app.get('/about-us', (req, res) => {
    res.redirect('/about', {title: "About"})
})

//Routing for create
app.get('/blogs/create', (req, res) => {
    res.render('create', {title: "Create"})
})


//Error page
app.use('/404', (req, res) => {
    res.status(404).render('404', {title: "404"})
})