// Bootstrapping the app
const fs = require('fs');
const path = require('path');
const express = require('express');
const accountRoutes = require('./routes/accounts');
const servicesRoutes = require('./routes/services');
const app = express();

// Configuration
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Load application routes
app.get('/', (req, res) => res.render('index', { title: 'Account Summary', accounts}));
app.get('/profile', (req, res) => res.render('profile', { user: users[0] }));
app.use('/account', accountRoutes);
app.use('/services', servicesRoutes);

// Serving application
app.listen(3000, () => console.log('PS Project running on port 3000!'));
