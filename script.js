function init() {
    new Vue ({
        el: '#app',
        data: {
            albums: [],
            selectedGenre: 'All',
            filteredAlbums: []
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

            filteredAlbums: function () {
                axios.get('filtered.php'), {
                    params: {
                        'genre': this.selectedGenre
                    }
                }
                    .then(r => {
                        this.filteredAlbums = r.data;
                    })
                    .catch(e => {
                        console.log(e);
                    })
            }
        }
    });
};

document.addEventListener("DOMContentLoaded",init);