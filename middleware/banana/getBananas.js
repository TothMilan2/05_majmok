module.exports = (objRep) => {
    const { bananas } = objRep;
    return (req, res, next) => {
        console.table(bananas);
        res.locals.bananas = res.status(200).json(bananas);
        return next();
    }
}