const {post} = require("../apiHandler/index");
const url = require("../moduleExport/index");

const generateToken = async (req, res) => {
    try {
        const response = await post(`${process.env.apiUrl}${url.GENERATE_TOKEN}`);
        if (response.status === 200 && response.data.status) {
            const token = response.data.data.token;
            const dataObj = {
                session_id: process.env.session_id
            }
            const infoData = await post(`${process.env.apiUrl}${url.PLAN_LIST}`, dataObj, token);
            if (infoData.status === 200 && response.data.status) {
                return res.status(200).json(infoData.data);
            } else {
                return res.status(400).json({message: "Error!"});
            }
        } else {
            return res.status(400).json({message: "Error!"});
        }
    } catch (err) {
        return res.status(400).json({message: "Error!"})
    }
}

module.exports = {
    generateToken
}