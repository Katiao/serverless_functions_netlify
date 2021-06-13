const result = document.querySelector('.result');

const fetchData = async () => {
    try {
        // const { data } = await axios.get('/.netlify/functions/1-hello')
        // to make life easier for ourselves and users we changed the url by using redirects found in toml file
        const { data } = await axios.get('/api/1-hello')
        result.textContent = data
    } catch (error) {
        console.log(error.response.data)
    }

}

fetchData()
