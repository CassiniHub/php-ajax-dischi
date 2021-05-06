function init() {
    new Vue ({
        el: '#app',
        data: {
            albums: [],
            genres: [],
            selectedGenre: 'All'
        },
        mounted () {
            axios.get('data.php', {
                params: {
                    'genre': this.selectedGenre
                }
            })
                .then(r => {
                    this.albums = r.data;
                    this.getGenres();
                })
                .catch(e => {
                    console.log(e);
                });
        },

        methods: {
            filteredAlbums: function () {
                axios.get('data.php', {
                    params: {
                        'genre': this.selectedGenre
                    }
                })
                    .then(r => {
                        this.albums = r.data;
                    })
                    .catch(e => {
                        console.log(e);
                    })
            },

            getGenres: function () {
                let albums = this.albums;
                const genres = [];

                for (let i = 0; i < albums.length; i++) {
                    const album = albums[i];

                    if (!genres.includes(album.genre)) {
                        genres.push(album.genre);
                    }
                }
                this.genres = genres;
            }
        },

        watch: {
            selectedGenre: function () {
                this.filteredAlbums();
            }
        }
    });
};

document.addEventListener("DOMContentLoaded",init);