const getBananasMW = require('../middleware/banana/getBananas');
const getBananaMW = require('../middleware/banana/getBanana');
const createBananaMW = require('../middleware/banana/createBanana');
const deleteBananaMw = require('../middleware/banana/deleteBanana');
const updateBananaMW = require('../middleware/banana/updateBanana');

const getMonkeysMW = require('../middleware/monkey/getMonkeys');
const getMonkeyMW = require('../middleware/monkey/getMonkey');
const createMonkeyMW = require('../middleware/monkey/createMonkey');
const deleteMonkeyMW = require('../middleware/monkey/deleteMonkey');
const updateMonkeyMW = require('../middleware/monkey/updateMonkey');
const getMonkeyIndex = require('../middleware/monkey/getMonkeyIndex');
const getBananaIndex = require('../middleware/banana/getBananaIndex');
const checkMonkeyId = require('../middleware/banana/checkMonkeyId');



function addRoutes(app) {


   

            const monkeys = [
                {
                    id: 1,
                    name: 'Joe',
                    sex: 'male',
                    species: 'gibbon'

                },
                {
                    id: 2,
                    name: 'Josephine',
                    sex: 'female',
                    species: 'gorilla'
                },
                {
                    id: 3,
                    name: 'Lajos',
                    sex: 'male',
                    species: 'orangutan'
                }
            ]
            const bananas = [
                {
                    id: 1,
                    color: "yellow",
                    sweet: false,
                    monkeyId: null
                },
                {
                    id: 2,
                    color: "yellow",
                    sweet: true,
                    monkeyId: null
                },
                {
                    id: 3,
                    color: "green",
                    sweet: true,
                    monkeyId: null
                }, {
                    id: 4,
                    color: "green",
                    sweet: false,
                    monkeyId: null
                }
            ]
     
        let globalMonkeyId = monkeys.length + 1
        let globalBananaId = bananas.length + 1

const objRep={
    monkeys,
    bananas,
    globalMonkeyId,
    globalBananaId
}
    



app.get('/monkey', getMonkeysMW(objRep));
app.post('/monkey', createMonkeyMW(objRep));
app.get('/monkey/:id', getMonkeyIndex(objRep), getMonkeyMW(objRep));
app.delete('/monkey/:id', getMonkeyIndex(objRep), deleteMonkeyMW(objRep));
app.patch('/monkey/:id', getMonkeyIndex(objRep), updateMonkeyMW(objRep));

app.get('/banana', getBananasMW(objRep)); // Minden banán
app.post('/banana', checkMonkeyId(objRep), createBananaMW(objRep));
app.get('/banana/:id', getBananaIndex(objRep), getBananaMW(objRep));
app.delete('/banana/:id', getBananaIndex(objRep), deleteBananaMw(objRep));
app.patch('/banana/:id', getBananaIndex(objRep), checkMonkeyId(objRep), updateBananaMW(objRep));




}


module.exports = addRoutes;