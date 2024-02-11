const searchData = async () => {
    var searchTrim = document.querySelector('#searchInput').value.trim();
    var searchInput =  searchTrim.toLowerCase();

    // if there is an input
    if (searchInput) {
        // Send a GET request to the search API endpoint
        const responseData = await fetch(`/search/?difficulty=${searchInput}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }).then(res => {
            return res.json(); //resolves response promise
        });

        if (responseData) {
            console.log(responseData);
            // if hikes found display hikeCards
            displayHikeCards(responseData);
            document.querySelector('.hike-images').scrollIntoView();
        } else {
            // no hikes found alert
            alert(responseData);
        }
    }
};

document.querySelector('.searchBtn').addEventListener('click', searchData);