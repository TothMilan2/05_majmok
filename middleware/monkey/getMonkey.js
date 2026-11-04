module.exports = (objRep) => {
    return (req, res, next) => {
        res.status(200).json(objRep.monkeys[objRep.globalMonkeyId - 1]);
    }
}