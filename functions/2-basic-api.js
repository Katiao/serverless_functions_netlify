//keyword require because we're in node-land
const items = require('../assets/data')

exports.handler = async (event, context) => {
    return {
        statusCode:200,
        body: JSON.stringify(items)
    }
}