Vue.component("oneCity", {
    props: ['city'],
    template: `
        <div class="city" :style="{ backgroundImage: 'url(' + this.myImgUrl + ')'}">

            <p>{{ city.name }}</p>

            <p>{{ city.weather[0].main }}</p>

            <p>{{ city.main.temp + '°C'}}</p>
        </div>
    `,
     methods: {
        getImgUrl(){
            let imgArray = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"];
            let randomIndex = Math.floor( Math.random() * imgArray.length );
            console.log(imgArray[ randomIndex ]);
            this.myImgUrl = imgArray[ randomIndex ];
        }
    },
    created() {
        this.getImgUrl();
    },
    data() {
        return {
            myImgUrl: ""
        }
    }
});
