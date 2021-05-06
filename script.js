function init() {
    new Vue ({
        el: '#app',
        data: {
            'dischi': null
        },
        mounted () {
            axios.get('data.php')
                .then(r => {
                    this.dischi = r.data;

                })
                .catch(e => {
                    console.log(e);
                })
        },

        methods: {

        },

        computed: {
            
        }
    });
};

document.addEventListener("DOMContentLoaded",init);