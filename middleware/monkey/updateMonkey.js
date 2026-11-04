module.exports = (objRep) => {
    return (req, res, next) => {
        if (typeof req.body.name !== 'undefined') {
            objRep.monkeys[objRep.globalMonkeyId - 1].name = req.body.name;
        }
        if (typeof req.body.sex !== 'undefined') {
            objRep.monkeys[objRep.globalMonkeyId - 1].sex = req.body.sex;
    }
    if (typeof req.body.species !== 'undefined') {
        objRep.monkeys[objRep.globalMonkeyId - 1].species = req.body.species;
    }
    if (typeof req.body.bananaId !== 'undefined') {
        objRep.monkeys[objRep.globalMonkeyId - 1].bananaId = req.body.bananaId;
    }
    if ((typeof req.body.name === 'undefined') && (typeof req.body.sex === 'undefined') && (typeof req.body.species === 'undefined')) {
        return res.status(400).json({ error: 'Missing name, sex or species' })
    }
    return res.status(200).json(objRep.monkeys[objRep.globalMonkeyId - 1]);
}}