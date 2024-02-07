
var hikeEl = document.querySelector('.hike-images');

const hikeList = [
    {
        "name": "Vernal and Nevada Falls via Mist Trail",
        "location": "Yosemite National Park",
        "difficulty": "hard",
        "distance": "4.6",
        "description": "Explore this 6.4-mile loop trail near Yosemite Valley, California. Generally considered a challenging route, it takes an average of 4 h 10 min to complete. This is a very popular area for hiking, so you'll likely encounter other people while exploring. The best times to visit this trail are April through October. You'll need to leave pups at home — dogs aren't allowed on this trail",
        "image_url": ""
    },
    {
        "name": "Eaton Canyon Trail",
        "location": "Los Angeles, CA",
        "difficulty": "moderate",
        "distance": "3.5",
        "description": "Tail in the Eaton Canyon Natural Area Park has a 446ft elevation gain, nice scenery with a waterfall in the end.",
        "image_url": ""
    }
];

displayHikeCards(hikeList);

// Creates forecast cards and appends to the html
function displayHikeCards(hikeList) {

    console.log("hiking");
    hikeList.forEach(function (item) {

        console.log(item);
        const cardDiv = document.createElement("div");
        cardDiv.classList.add('card');
        //img
        const hikeImg = document.createElement("img");
        hikeImg.classList.add('card-img-top');
        hikeImg.src = "https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp";
        //missing alt

        const cardBodyDiv = document.createElement("div");
        cardBodyDiv.classList.add('card-body');
        const header = document.createElement("h5");
        cardBodyDiv.classList.add('card-title');
        header.textContent = item.name;

        const pEl = document.createElement("p");
        pEl.classList.add('card-text');
        pEl.textContent = item.description;

        // const buttonEl = document.createElement("a");
        // buttonEl.classList.add('btn btn-primary');
        // buttonEl.textContent = 'Button';
        // buttonEl.href = '#!';

        cardBodyDiv.appendChild(header);
        cardBodyDiv.appendChild(pEl);
        // cardBodyDiv.appendChild(buttonEl);
        cardDiv.appendChild(hikeImg);
        cardDiv.appendChild(cardBodyDiv);
        hikeEl.appendChild(cardDiv);

        // var cardEl = $('<div class="card">');
        // cardEl.append('<img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" class="card-img-top" alt="Fissure in Sandstone"/>');

        // var cardBodyEl = $('<div class="card-body">');

        // // this is getting the icon from openweatherapi
        // cardBodyEl.append('<h5 class="card-title">' + item.name + '</h5>');
        // cardBodyEl.append('<p class="card-text">' + item.description + '</p>');
        // cardBodyEl.append('<a href="#!" class="btn btn-primary" data-mdb-ripple-init>Button</a>');

        // cardEl.append(cardBodyEl);
    });
}