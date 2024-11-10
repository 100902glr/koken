document.addEventListener("DOMContentLoaded", function() {
    // Haal de URL parameter 'id' op
    const urlParams = new URLSearchParams(window.location.search);
    const dishId = urlParams.get('id');

    // Voorbeeld data voor de gerechten
    const dishes = {
        "1": {
            title: "Kombu Salad",
            image: "../media/KomSalde2.jpg",
            description: "Een heerlijke salade met kombu zeewier, perfect als bijgerecht.",
            preparation: "1. Week de kombu in water voor minstens 30 minuten..."
        },
        "2": {
            title: "Green Goddess",
            image: "../media/GreenGoddes.jpg",
            description: "Een verfrissende salade vol met groene groenten en kruiden.",
            preparation: "1. Mix alle groene ingrediënten in een kom..."
        },
        "3": {
            title: "Iced Coffee",
            image: "../media/KomSalde2.jpg",
            description: "Perfecte verfrissing voor warme dagen.",
            preparation: "1. Zet sterke koffie en laat deze afkoelen..."
        },
        "4": {
            title: "Picasso Pasta",
            image: "../media/komSushi.jpeg",
            description: "Een kunstzinnige pasta geïnspireerd door Picasso.",
            preparation: "1. Kook de pasta en voeg kleurrijke groenten toe..."
        }
    };

    // Controleer of het gerecht bestaat en toon de details
    if (dishes[dishId]) {
        document.getElementById("dish-title").textContent = dishes[dishId].title;
        document.getElementById("dish-image").src = dishes[dishId].image;
        document.getElementById("dish-description").textContent = dishes[dishId].description;
        document.getElementById("dish-preparation").textContent = dishes[dishId].preparation;
    } else {
        document.getElementById("dish-title").textContent = "Gerecht niet gevonden";
    }
});
