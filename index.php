<!DOCTYPE html>
<html>

<head>
    <title>Xenoverse 2 - Character Builder</title>
    <style>
        /* CSS Global */
        body {
            margin: 0;
        }

        /* CSS du header */
        @font-face {
            font-family: 'Saiyan Sans';
            src: url('./fonts/Saiyan-Sans Right Oblique.ttf') format('truetype');
        }

        @font-face {
            font-family: 'Haettenschweiler';
            src: url('./fonts/Haettenschweiler-Regular.ttf') format('truetype');
        }

        header {
            letter-spacing: 0.1em;
        }

        .title_container {
            background-color: #333;
            text-align: center;
            padding: 1.4em;

            font-family: 'Arial', Arial, sans-serif;
            color: white;
            font-size: 2.2em;
        }

        .title_container h1 {
            margin: 0.1em;
        }

        .menu_container {
            display: flex;
            justify-content: center;
            align-items: center;

            text-align: center;
        }

        .menu {
            background-color: white;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

            transform: translateY(-50%);
            padding: 0.4em;
            width: 26em;

            font-family: 'Haettenschweiler', Arial, sans-serif;
            color: #333;
            font-size: 2em;
        }

        .menu a {
            padding: 0 10px;
        }

        a {
            color: #333;
            text-decoration: none;
        }

        a:hover {
            color: darkorange;
        }

        /* Fin du CSS du header */

        /* CSS de la page */
        main {
            display: flex;
            justify-content: center;
            align-items: center;

            margin: 0;

            font-family: Arial, sans-serif;
            color: #333;
        }

        .subtitle_container {
            text-align: center;

            padding: 1em;
        }

        .form_container {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .form_column {
            width: 20rem;

            flex: 1;
            padding: 10px;
            text-align: center;
        }

        .form_column img {
            width: 200px;
        }

        /* Fin du CSS de la page */
    </style>
</head>

<body>
    <header>
        <!-- Title -->
        <div class="title_container">
            <h1>XENOVERSE 2 - CHARACTER BUILDER</h1>
        </div>
        <!-- Menu bar -->
        <div class="menu_container">
            <div class="menu">
                <a href="#">BUILDER</a> •
                <a href="#">OTHER'S BUILDS</a> •
                <a href="#">ITEMS AND SKILLS</a> •
                <a href="#">ABOUT THIS SITE</a>
            </div>
        </div>
    </header>

    <main>
        <form action="#" method="get">
            <!-- Main content : the character builder -->
            <div class="subtitle_container">
                <h1>CHARACTER <a href="#">RACE AND SIZES</a></h1>
            </div>

            <div class="form_container">
                <div class="form_column">
                    <img id="raceMugshot" src="./img/charamugshots/unknow.png" alt="unknow">
                    <br><br>
                    <label for="select">Race : </label>
                    <select id="select" name="select">
                        <option value="unknow">Select a race</option> 
                        <option value="m_saiyan">Saiyan (M)</option>
                        <option value="f_saiyan">Saiyan (F)</option>
                        <option value="m_human">Human (M)</option>
                        <option value="f_human">Human (F)</option>
                        <option value="m_majin">Majin (M)</option>
                        <option value="f_majin">Majin (F)</option>
                        <option value="frieza">Frieza</option>
                        <option value="namek">Namek</option>
                    </select>
                    
    <script>
        const selectElement = document.getElementById('select');
        const imageElement = document.getElementById('raceMugshot');

        selectElement.addEventListener('change', function() {
            const selectedRace = selectElement.value;
            const imagePath = `./img/charamugshots/${selectedRace}.png`;
            imageElement.src = imagePath;
        });
    </script>
                </div>
                <div class="form_column">
                    <label for="text">Build name : </label>
                    <input type="text" id="text" name="text">
                    <br><br>
                    <label for="attaque">Level :</label>
                    <input type="number" id="level">
                </div>
                <div class="form_column">
                    <label for="select">Weight : </label>
                    <select id="select" name="select">
                        <option value="Thin">Thin</option>
                        <option value="Medium">Medium</option>
                        <option value="Thick">Thick</option>
                    </select>
                    <br><br>
                    <label for="select">Height : </label>
                    <select id="select" name="select">
                        <option value="Shortest">Shortest</option>
                        <option value="Short">Short</option>
                        <option value="Tall">Tall</option>
                        <option value="Tallest">Tallest</option>
                    </select>
                </div>
            </div>

            <div class="subtitle_container">
                        <h1>0 <a href="#">ATTRIBUTE POINTS</a> LEFT</h1>
            </div>

            <div class="form_container">
                <div class="form_column">
                    <label for="attaque">Health :</label>
                    <input type="number" id="health">
                    <br><br>
                    <label for="attaque">Ki :</label>
                    <input type="number" id="ki">
                    <br><br>
                    <label for="defense">Stamina :</label>
                    <input type="number" id="stamina">
                </div>
                <div class="form_column">
                    <label for="attaque">Basic Attack :</label>
                    <input type="number" id="basicattack">
                    <br><br>
                    <label for="defense">Super Strike :</label>
                    <input type="number" id="superstrike">
                    <br><br>
                    <label for="defense">Super Kikohas :</label>
                    <input type="number" id="suprekikohas">
                </div>
            </div>
        </form>
    </main>

</body>

</html>