const result = document.querySelector('.result')

const fetchData = async () => {
    try {
        const { data } = await axios.get('/api/2-basic-api');
        //this will return an array but in order to show-case it we need to turn it into a string.
        //we can chain join method and we don't want commas between items so we join them with empty space.
        const products = data.map((product)=> {
            const { image: {url}, name, price } = product
            return `<article class="product">
            <img
              src="${url}" alt="${name}"
            />
            <div class="info">
              <h5>${name}</h5>
              <h5 class="price">${price}</h5>
            </div>
          </article>`
        })
        .join('')
        result.innerHTML = products
    } catch (error) {
        result.innerHTML = `<h4>There was an error, please try again later</h4>`
    }
}

fetchData()