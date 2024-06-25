module.exports = (app) => {
    const create = async (req, res) => {
        const result = await app.services.account.save(req.body);
        if(result.error) res.status(400).json(result);
        res.status(201).json(result[0]);
    };

    return { create };
};
