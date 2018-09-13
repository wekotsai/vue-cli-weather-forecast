onload = (function () {

    fetch('https://api.myjson.com/bins/i8run')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {

            displayCities(myJson.cities)

        });

})();

function displayCities(myJson) {
    new Vue({
        el: '#app',
        data: {
            cities: myJson,
        },

    })
}