const loki = require('lokijs');
const db = new loki('monkeys.db');
const db2 = new loki('monkeys.db');

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
    db2.loadDatabase({}, err => {
        if (err) {
            return cb(err);
        }

        let bananaModel = db2.getCollection('bananas');
        if (bananaModel === null) {
            bananaModel = db2.addCollection('bananas');
        }

        db2.saveDatabase(err => {

            return cb(err, { db: db2, bananaModel });
        });
    });
};

module.exports.initDatabase = initDatabase;