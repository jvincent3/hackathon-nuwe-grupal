const { default: axios } = require('axios');

exports.getSecondPassword = (req, res) => {
    let { username } = req.params;
    let url = `https://api.github.com/users/${username}/repos`;

    axios.get(url)
    .then(({data}) => {
        let foundRepository = data.find(element => element.name == "HTSV2");

        if (foundRepository) {
            res.json({ 
                message: `La contraseña para la segunda parte es: ${foundRepository?.id}`,
                repository: foundRepository
            });
        } else {
            res.json({ 
                message: `Este usuario no contiene la contraseña esperada`,
                repositories: data
            });
        }
        

    }).catch(e => {throw e});
}