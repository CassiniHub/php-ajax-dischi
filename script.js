function init() {
    new Vue ({
        el: '#app',
        data: {
            albums: [],
            selectedGenre: 'All'
        },
        mounted () {
            axios.get('data.php')
                .then(r => {
                    this.albums = r.data;

                })
                .catch(e => {
                    console.log(e);
                })
        },

        methods: {

        },

        computed: {
            getGenres: function () {
                let albums = this.albums;
                const genres = [];

                for (let i = 0; i < albums.length; i++) {
                    const album = albums[i];

                    if (!genres.includes(album.genre)) {
                        genres.push(album.genre);
                    }
                }
                return genres;
            },
        }
    });
};

document.addEventListener("DOMContentLoaded",init);