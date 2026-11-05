const loki = require('lokijs');
const db = new loki('majmok.db');
//const db2 = new loki('bananas.db');

function initDatabase(cb) {
    db.loadDatabase({}, err => { 
        if (err) {
            return cb(err);
        }

        let monkeyModel = db.getCollection('monkeys');
        if (monkeyModel === null) {
            monkeyModel = db.addCollection('monkeys');
        }

        db.saveDatabase(err => {

            return cb(err, { db, monkeyModel });
        });
    });
    
};

module.exports.initDatabase = initDatabase;