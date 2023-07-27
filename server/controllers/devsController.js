
const db = require('../dbConnection/elephantConnect');

const devsController = {};

devsController.getDevs = async (req, res, next) => {

    const queryString = 'SELECT * FROM devs';

    try {
        const reply = await db.query(queryString);

        let fullArrToReturn = []

        const devsOnly = reply.rows;
        for (let dev of devsOnly) {
            let newRow = dev;
            let query2 = `SELECT * FROM speaks JOIN devs_speaks js ON js.speaks_id = speaks.id AND js.devs_id = ${dev.id}; `;
            const speaksArray = await db.query(query2);
            newRow = { ...newRow, speaks: speaksArray.rows };
            fullArrToReturn.push(newRow);
        }

        res.locals.devs = fullArrToReturn;
        return next();
    } catch (err) {
        console.log('There was a db error')
    }

};

devsController.createDev = async (req, res, next) => {
    const { id, title, company, salary } = req.body;
    console.log(id, title, company, salary)

    // const queryString = `INSERT INTO jobs values(22, 'Retrain all the .NET people', 'PNC Bank', 250000)`;
    try {

        let countDevs = await db.query('SELECT COUNT(*) FROM Devs');
        console.log(countDevs.rows);
        let newId = Number(countDevs.rows[0].count) + 1;
        console.log(newId)
        const queryString = `INSERT INTO Devs values('${newId}', '${title}', '${company}', '${salary}')`;

        let response = await db.query(queryString);
        console.log(response)
    } catch (err) {
        console.log(err);
    }
}

module.exports = devsController;




