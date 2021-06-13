//domain/.netlify/functions/1-hello

//parameters supplied by Netlify
//Body always needs to be a string.
exports.handler = async (event, context) => {
    return {
        statusCode:200,
        body: 'Hi there, our first Netlify Function'
    }
}