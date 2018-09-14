Vue.component("city", {
    created(){
        fetch('https://api.myjson.com/bins/i8run')
        .then(function (response) {
            return response.json();
        })
        .then(myJson => {
            this.cities = myJson.list;
        });
    },
    template:`
    <div class="gallery">
        <div v-for="(city, index) in cities" class="city">       
                <div>
                   <p>{{ city.name }}</p>
        
                   <p>{{ city.weather[0].main }}</p>
            
                   <p>{{ city.main.temp + '°C'}}</p>
                </div>
        </div>
    </div>`,
    data(){
        return{
            cities: []
        }
    }
})