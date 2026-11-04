module.exports = (objRep) => {
    return (req, res, next) => {
        const monkeyID = objRep.monkeys[res.locals.monkeyIndex].id;
        objRep.bananas = objRep.bananas.filter(b => b.monkeyId !== monkeyID);
        next();
    };
};