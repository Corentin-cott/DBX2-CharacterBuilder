<!DOCTYPE html>
<html>

<head>
    <title>Xenoverse 2 - Character Builder</title>
    <style>
        body {
            margin: 0;
        }

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

        .subtitle_container {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 1em;
            font-family: 'Arial', Arial, sans-serif;
        }

        .subsubtitle_container {
            text-align: center;
            padding: 1em;
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
            font-size: 2em;
        }

        a {
            color: #333;
            text-decoration: none;
        }

        a:hover {
            color: darkorange;
        }

        .character_builder {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
            font-family: Arial, sans-serif;
            color: #333;
        }

        .form_container {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .form_column {
            flex: 1;
            padding: 20px;
            text-align: center;
        }

        .form_column img {
            width: 200px;
            filter: drop-shadow(2px 2px 2px black);
        }
    </style>
</head>

<body>
    <header>
        <div class="title_container">
            <h1>XENOVERSE 2 - CHARACTER BUILDER</h1>
        </div>
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
        <div class="character_builder">
        <form action="#" method="get">
            <div class="subsubtitle_container">
                <h1>CHARACTER <a href="#">RACE AND SIZES</a></h1>
            </div>

            <div class="form_container">
                <div class="form_column">
                    <img id="raceMugshot" src="./img/charamugshots/unknow.png" alt="unknow">
                    <br><br>
                    <label for="select">Race : </label>
                    <select id="raceSelect" name="select">
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
                </div>

                <script>
                    const raceSelect = document.getElementById('raceSelect');
                    const raceMugshot = document.getElementById('raceMugshot');

                    raceSelect.addEventListener('change', function () {
                        raceMugshot.src = `./img/charamugshots/${raceSelect.value}.png`;
                    });
                </script>

                <div class="form_column">
                    <label for="text">Build name : </label>
                    <input type="text" id="text" name="text">
                    <br><br>
                    <label for="attaque">Level :</label>
                    <input type="number" id="level" min="0" max="120">
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

            <script>
                document.addEventListener('DOMContentLoaded', function () {
                    const levelInput = document.getElementById('level');
                    const apDisplay = document.getElementById('ap_display');

                    levelInput.addEventListener('input', function () {
                        const level = parseInt(levelInput.value);
                        const APs = 422 / 120 * level;
                        apDisplay.textContent = APs.toFixed(2);
                    });
                });
            </script>

            <div class="subsubtitle_container">
                <h1><span id="ap_display">0</span> <a href="#">ATTRIBUTE POINTS</a> LEFT</h1>
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
            
            <div class="subsubtitle_container">
                <h1><a href="#">QQBANG</a> & <a href="#">SUPER SOUL</a></h1>
            </div>

            <div class="form_container">
                <div class="form_column">
                    <label for="select">Health :</label>
                    <select id="select" name="select">
                        <option value="-5"><<<<<</option>
                        <option value="-4"><<<<</option>
                        <option value="-3"><<<</option>
                        <option value="-2"><<</option>
                        <option value="-1"><</option>
                        <option value="0" selected>-</option>
                        <option value="1">></option>
                        <option value="2">>></option>
                        <option value="3">>>></option>
                        <option value="4">>>>></option>
                        <option value="5">>>>>></option>
                    </select>
                    <br><br>
                    <label for="select">Ki :</label>
                    <select id="select" name="select">
                        <option value="-5"><<<<<</option>
                        <option value="-4"><<<<</option>
                        <option value="-3"><<<</option>
                        <option value="-2"><<</option>
                        <option value="-1"><</option>
                        <option value="0" selected>-</option>
                        <option value="1">></option>
                        <option value="2">>></option>
                        <option value="3">>>></option>
                        <option value="4">>>>></option>
                        <option value="5">>>>>></option>
                    </select>
                    <br><br>
                    <label for="select">Stamina :</label>
                    <select id="select" name="select">
                        <option value="-5"><<<<<</option>
                        <option value="-4"><<<<</option>
                        <option value="-3"><<<</option>
                        <option value="-2"><<</option>
                        <option value="-1"><</option>
                        <option value="0" selected>-</option>
                        <option value="1">></option>
                        <option value="2">>></option>
                        <option value="3">>>></option>
                        <option value="4">>>>></option>
                        <option value="5">>>>>></option>
                    </select>
                </div>

                <div class="form_column">
                    <label for="select">Basic Attack :</label>
                    <select id="select" name="select">
                        <option value="-5"><<<<<</option>
                        <option value="-4"><<<<</option>
                        <option value="-3"><<<</option>
                        <option value="-2"><<</option>
                        <option value="-1"><</option>
                        <option value="0" selected>-</option>
                        <option value="1">></option>
                        <option value="2">>></option>
                        <option value="3">>>></option>
                        <option value="4">>>>></option>
                        <option value="5">>>>>></option>
                    </select>
                    <br><br>
                    <label for="select">Super Strike :</label>
                    <select id="select" name="select">
                        <option value="-5"><<<<<</option>
                        <option value="-4"><<<<</option>
                        <option value="-3"><<<</option>
                        <option value="-2"><<</option>
                        <option value="-1"><</option>
                        <option value="0" selected>-</option>
                        <option value="1">></option>
                        <option value="2">>></option>
                        <option value="3">>>></option>
                        <option value="4">>>>></option>
                        <option value="5">>>>>></option>
                    </select>
                    <br><br>
                    <label for="select">Super Kikohas :</label>
                    <select id="select" name="select">
                        <option value="-5"><<<<<</option>
                        <option value="-4"><<<<</option>
                        <option value="-3"><<<</option>
                        <option value="-2"><<</option>
                        <option value="-1"><</option>
                        <option value="0" selected>-</option>
                        <option value="1">></option>
                        <option value="2">>></option>
                        <option value="3">>>></option>
                        <option value="4">>>>></option>
                        <option value="5">>>>>></option>
                    </select>
                </div>
                
                <div class="form_column">
                    <label for="select">Super Soul :</label>
                    <select id="select" name="select">
                        <option value="none">(Super soul is not supported yet.)</option>
                    </select>
                </div>

            </div> 
        </form>
        </div>
        
        <br><br>
        <div class="subtitle_container">
            <h1>YOUR CHARACTER'S STATS!</h1>
        </div>
    </main>

</body>

</html>