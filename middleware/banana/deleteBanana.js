module.exports = (objRep) => {
    return (req, res, next) => {
        const deletedBananaById = objRep.bananas[res.locals.bananaIndex];
        objRep.bananas.splice(res.locals.bananaIndex, 1);
        res.locals.bananas = res.status(200).json({ deletedBananaById });
        return next();
    }
}