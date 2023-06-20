const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '6bc41d49',
            s: searchTerm
        }
    });
    console.log(response.data);
};

const input = document.querySelector('input');
input.addEventListener('input', (event) => {
    fetchData(event.target.value);
});