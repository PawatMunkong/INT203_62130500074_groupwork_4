const app = {
    data() {
        return {
            // msg: 'Hello & Welcome, Vue3',
            searchPhoto: false,
            findGura: true,
            showGura: false,

            imgs: [{
                    love: "Gura",
                    src: "./images/31.jpg",
                    likes: false,
                    Hiddenimgs: false
                },
                {
                    love: "Gura zZZ",
                    src: "./images/32.jpg",
                    likes: false,
                    Hiddenimgs: false
                },
                {
                    love: "Gura lovely",
                    src: "./images/344.jpg",
                    likes: false,
                    Hiddenimgs: false
                },
            ]

        }

    },

    methods: {
        GuraShow(index) {
            this.imgs[index].likes = !this.imgs[index].likes;
        },


        SearchGura() {
            this.searchPhoto = !this.searchPhoto;
        },
        Guracick(src) {
            this.Guralove = src;
            this.showGura = true;
        },
        Guraclose() {
            this.showGura = false;
        },
        GuraResult() {
            if (this.Gurasearch) {
                for (GuraO of this.imgs) {
                    if (GuraO.love === this.Gurasearch) {
                        GuraO.Hiddenimgs = false;
                    } else {
                        GuraO.Hiddenimgs = true;
                    }
                }
                if (this.imgs.every(element => element.Hiddenimgs)) this.findGura = false;
            }

        },
        Cancel() {
            this.searchPhoto = !this.searchPhoto;
            for (const element of this.imgs) {
                element.Hiddenimgs = false
            }
            this.findGura = true
        }

    },
    computed: {

        getImgLength() {
            return this.imgs.length;
        },
        countLikes() {
            return this.imgs.filter(t => t.likes).length
        }
        // 
        //    filterredPhotoFeed: function(){
        //         Guraimgs = this.PhotoFeed;
        //         authorName =this.authorName;
        //         if(!authorNameS){
        //             return GuraimgsS;
        //         }
        //         search = authorName.trim().toLowerCase();
        //         Guraimgs = Guraimgs.filter(function(item){
        //             if(item.love.toLowerCase().indexOf(authorName) !== -1){
        //                 return item;
        //             }
        //         })
        //         return Guraimgs;
        //    }

    }

}
Vue.createApp(app).mount('#app')