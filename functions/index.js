const functions = require('firebase-functions');

const express = require("express");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
/* Express */
const app = express()

app.post('/auth/login', (req, res) => {
    const login = req.body.login;
    const password = req.body.password;
    const result = {
        token: 'veryLong_token'
    }; 
    res.send(result);
})

app.get('/restaurants/myself/', (req, res) => {
    const result = {
        id: 132,
        name: 'ЯпонаХата',
        iconUrl: '',
        backgroundPhotoUrl: '',
    }; 
    res.send(result);
})

app.get('/restaurants/myself/meals/', (req, res) => {
    const result = [
        {
            id: '',
            isPublic: true,
            name: 'first meal',
            price: 1.0,
            weight: 2.8,
            components: ['string', 'another'],
            calories: 3.4,
            minCookingTime: 2090,
            maxCookingTime: 20990,
            description: 'Some description',
            rating: 3.2,
            photoUrls: [{id: 3, url: 'http:///aslkdsk;ldhfl;'}],
            model: {
                geometryUrl: 'http:///aslkdsk;ldhfl;',
                textureUrl: 'http:sasdasd',
                materialUrl: 'http://qdwdas',
            },
            typeId: 3,
        },
    ]; 
    res.send(result);
})

app.get('/types/', (req, res) => {
    const result = [
        {
            id:1,
            name: 'Cheese',
        },
        {
            id:1,
            name: 'Beef',
        },
    ]; 
    res.send(result);
})

app.get('/restaurants/myself/types/', (req, res) => {
    const result = [
        {
            id:1,
            name: 'Cheese',
        },
    ]; 
    res.send(result);
})

app.get("*", (req, res) => {
    res.send({error:'NOT_FOUND'})
})

const api = functions.https.onRequest(app)

module.exports = {
  api
}