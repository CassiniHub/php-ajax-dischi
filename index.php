<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- bootstrap v4 -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

    <!-- vue 2 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.x"></script>

    <!-- axios -->
    <script src="https://cdn.jsdelivr.net/npm/axios@0.21.1/dist/axios.min.js"></script>

    <!-- js -->
    <script src="script.js"></script>

    <!-- CSS -->
    <style>
        body {
            background: purple;
            color: white;
        }
        hr {
            background: white;
        }
        img {
            width: 200px;
            height: 200px;
        }
        .box {
            background-color: grey;            
            margin: 10px;
        }
    </style>

    <title>PHP</title>

</head>
<body>
    <div id="app" class="container">
        <div class="row">
            <div class="col-12 text-center mt-3">
                <h1>Dischi</h1>
                <select v-model="selectedGenre">
                    <option
                        value="All"
                        selected>
                        All
                    </option>
                    <option
                        v-for="genre in genres"
                        :value="genre">
                        {{ genre }}
                    </option>
                </select>
                <div v-for="album in albums">
                    <img :src="album.poster" alt="">
                    <h2>
                        {{ album.title }}
                    </h2>
                    <p>
                        {{ album.author }}
                    </p>
                    <p>
                        {{ album.genre }}
                    </p>
                    <p>
                        {{ album.year }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</html>