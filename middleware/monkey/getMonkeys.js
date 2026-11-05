module.exports = (objRep) => {
    const { monkeyModel } = objRep;
    return (req, res, next) => {

        //const monkey = monkeyModel.findOne({id: req.params.id});
        const monkeys = monkeyModel.find();
        if (monkeys.length === 0) {
            return res.status(404).json({ error: 'No monkeys found!' });
        }
        return res.status(200).json(monkeys);
    }
}