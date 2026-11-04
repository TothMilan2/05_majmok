module.exports = (objRep) => {
    return (req, res, next) => {
        if (typeof req.body.color !== 'undefined') {
            objRep.bananas[res.locals.bananaIndex].color = req.body.color;
        }
        if (typeof req.body.sweet !== 'undefined') {
            objRep.bananas[res.locals.bananaIndex].sweet = req.body.sweet;
    }
    if (typeof req.body.monkeyId !== 'undefined') {
        objRep.bananas[res.locals.bananaIndex].monkeyId = req.body.monkeyId;
    }

    if ((typeof req.body.color === 'undefined') && (typeof req.body.sweet === 'undefined')) {
        return res.status(400).json({ error: 'Missing color, sweet!' })
    }
    return res.status(200).json(objRep.bananas[res.locals.bananaIndex]);
}}