module.exports = (objRep) => {

    return (req, res, next) => {
        res.status(200).json(bananas[res.locals.bananaIndex]);
    }
    
}