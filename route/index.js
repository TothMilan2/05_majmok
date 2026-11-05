const uuid = require('uuid');
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
const getMonkeyIndex = require('../middleware/monkey/getMonkey');
const getBananaIndex = require('../middleware/banana/getBanana');
const checkMonkeyId = require('../middleware/banana/checkMonkeyId');



function addRoutes(app,db, monkeyModel, bananaModel) {


   

            const monkeys = [
                {
                    id: uuid.v4(),
                    name: 'Joe',
                    sex: 'male',
                    species: 'gibbon'

                },
                {
                    id: uuid.v4(),
                    name: 'Josephine',
                    sex: 'female',
                    species: 'gorilla'
                },
                {
                    id: uuid.v4(),
                    name: 'Lajos',
                    sex: 'male',
                    species: 'orangutan'
                }
            ]
            // const bananas = [
            //     {
            //         id: uuid.v4(),
            //         color: "yellow",
            //         sweet: false,
            //         monkeyId: null
            //     },
            //     {
            //         id: uuid.v4(),
            //         color: "yellow",
            //         sweet: true,
            //         monkeyId: null
            //     },
            //     {
            //         id: uuid.v4(),
            //         color: "green",
            //         sweet: true,
            //         monkeyId: null
            //     }, {
            //         id: uuid.v4(),
            //         color: "green",
            //         sweet: false,
            //         monkeyId: null
            //     }
            // ]
     
        // let globalMonkeyId = monkeys.length + 1
        // let globalBananaId = bananas.length + 1

const objRep={
    monkeys,
    monkeyModel,
    bananaModel,
    db,
    uuid,
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