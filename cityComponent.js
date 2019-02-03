Vue.component("city", {
    data(){
        return{
            cities: [],
            myImgUrl: ""
        }
    },
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
        <div v-for="(city, index) in cities">       
            <oneCity :city="city" :key="index"></oneCity>
        </div>
    </div>`,
})
