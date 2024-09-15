const images = [
    'images/image-1.jpg',
    'images/image-2.jpg',
    'images/image-3.jpg',
    'images/image-4.jpg',
    'images/image-5.jpg',
];

const aboutLocation = [
    {
        name: "Paris, France",
        details: "I like France for its rich history and stunning architecture, especially in cities like Paris. The culture, with its art, music, and literature, is incredibly inspiring. French cuisine is a delight, from croissants to fine dining. Plus, the beautiful landscapes, from the Alps to the French Riviera, offer so much to explore."
    },
    {
        name: "Rome, Italy",
        details: "I love Rome for its rich history, breathtaking architecture, and vibrant culture. The ancient ruins, like the Colosseum and the Roman Forum, transport you back in time. Its charming streets and piazzas are filled with life, art, and delicious food. Every corner holds a story, making it a truly magical city."
    },
    {
        name: "Greece",
        details: "I love Greece for its rich history, stunning landscapes, and vibrant culture. The crystal-clear waters and beautiful islands create a serene atmosphere. Greek cuisine, with its fresh flavors and healthy ingredients, is incredible. The warmth and hospitality of the Greek people make every visit memorable."
    },
    {
        name: "New York, USA",
        details: "I love New York for its vibrant energy and endless opportunities. The city's diverse culture, iconic landmarks, and fast-paced lifestyle make it incredibly exciting. There's always something to explore, from world-class museums to hidden cafes. The skyline at night is breathtaking, and it feels like anything is possible here."
    },
    {
        name: "Istanbul, Turkey",
        details: "Istanbul captivates me with its rich history, where ancient landmarks meet vibrant modern life. The city's unique blend of European and Asian cultures is fascinating. Its stunning architecture, like the Hagia Sophia and the Blue Mosque, showcases remarkable artistry. Plus, the Bosphorus offers breathtaking views and an incredible atmosphere."
    },
]

let currentIndex = 0;

const sliderImage = document.getElementById('slider-image');
const sliderLocation = document.getElementById('slider-location');
const sliderLocationDetails = document.getElementById('slider-location-details');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function updateSlider() {
    sliderImage.src = images[currentIndex];
    sliderLocation.textContent = aboutLocation[currentIndex].name
    sliderLocationDetails.textContent = aboutLocation[currentIndex].details
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
})

updateSlider();
