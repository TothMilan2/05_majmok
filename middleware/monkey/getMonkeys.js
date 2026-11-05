module.exports = (objRep) => {
    return (req, res, next) => {
        console.table(objRep.monkeys);

        if(!objRep.monkeys) {
            return res.status(404).json({ error: 'No monkeys found!' });
        }
         res.locals.monkeys =res.status(200).json(objRep.monkeys);
         return next();
    }
}