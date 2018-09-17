Vue.component("city", {
    data(){
        return{
            cities: [],
            myImgUrl: ""
        }
    },
    // beforeCreate() {
    //     let imgArray = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"];
    //     let randomIndex = Math.floor( Math.random() * imgArray.length );
    //     console.log(imgArray[ randomIndex ]);
    //     this.myImgUrl = imgArray[ randomIndex ];
    //     console.log(this.myImgUrl);
    // },
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
    // methods: {
    //     getImgUrl(){
    //         let imgArray = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"];
    //         let randomIndex = Math.floor( Math.random() * imgArray.length );
    //         console.log(imgArray[ randomIndex ]);
    //         this.myImgUrl = imgArray[ randomIndex ];
    //     }
    
})

//

//background-image: url("img1.jpg")