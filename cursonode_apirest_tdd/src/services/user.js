module.exports = (app) => {
    const findAll = () => {
        return app.db('users').select(['id', 'name', 'email']);
    };

    const findOne = (filter = {}) => {
        return app.db('users').where(filter).first();
    };

    const save = async (user) => {
        if (!user.name) return {error: 'Nome é um atributo obrigatório'};
        if (!user.email) return {error: 'E-mail é um atributo obrigatório'};
        if (!user.passwd) return {error: 'Senha é um atributo obrigatório'};

        const userDb = await findOne({ email: user.email });
        if (userDb) return {error: 'Já existe um usuário com esse e-mail'};

        return app.db('users').insert(user, '*');
    };
  
    return { findAll, save, findOne };
  };