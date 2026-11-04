module.exports = (objRep) => {
    return (req, res, next) => {
        const deletedMonkeyById = objRep.monkeys[objRep.globalMonkeyId - 1];
        objRep.monkeys.splice(objRep.globalMonkeyId - 1, 1);
        return res.status(200).json({ deletedMonkeyById });
    }
}