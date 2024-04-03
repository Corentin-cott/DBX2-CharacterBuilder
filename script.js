
            // In cas of refresh, update span
            // AP
            document.addEventListener('DOMContentLoaded', updateTotalPoints);
            // Name
            const nameInput = document.getElementById('name');
            const charaname = document.querySelector('.charaname');
            charaname.textContent = nameInput.value.toUpperCase();
            // End of update span

            // Character Mugshots Script
            const raceSelect = document.getElementById('raceSelect');
            const raceMugshot = document.getElementById('raceMugshot');
    
            raceSelect.addEventListener('change', function () {
                raceMugshot.src = `./img/charamugshots/${raceSelect.value}.png`;
            });
            // End of Character Mugshots Script

            // Character Name Script
            nameInput.addEventListener('input', function () {
                charaname.textContent = nameInput.value.toUpperCase();
            });
            // End of Character Name Script

            // Attribute Points Calculation Script
            // Get numbers inputs
            const levelNumber = document.getElementById('level');

            const healthNumber = document.getElementById('health');
            const kiNumber = document.getElementById('ki');
            const staminaNumber = document.getElementById('stamina');
            const basicAttackNumber = document.getElementById('basicAttack');
            const kiBlastSupersNumber = document.getElementById('kiBlastSupers');
            const strikeSupersNumber = document.getElementById('strikeSupers');

            // Keep the level >= 1 and <= 120
            levelNumber.addEventListener('input', function () {
                if (parseInt(levelNumber.value) < 1) {
                    levelNumber.value = 1;
                } else if (parseInt(levelNumber.value) > 120) {
                    levelNumber.value = 120;
                }
            });
            // Keep the total AP >= 0 and AttributesStats <= 200
            healthNumber.addEventListener('input', function () {
                if (parseInt(healthNumber.value) < 0) {
                    healthNumber.value = 0;
                } else if (parseInt(healthNumber.value) > 200) {
                    healthNumber.value = 200;
                }
            });
            kiNumber.addEventListener('input', function () {
                if (parseInt(kiNumber.value) < 0) {
                    kiNumber.value = 0;
                } else if (parseInt(kiNumber.value) > 200) {
                    kiNumber.value = 200;
                }
            });
            staminaNumber.addEventListener('input', function () {
                if (parseInt(staminaNumber.value) < 0) {
                    staminaNumber.value = 0;
                } else if (parseInt(staminaNumber.value) > 200) {
                    staminaNumber.value = 200;
                }
            });
            basicAttackNumber.addEventListener('input', function () {
                if (parseInt(basicAttackNumber.value) < 0) {
                    basicAttackNumber.value = 0;
                } else if (parseInt(basicAttackNumber.value) > 200) {
                    basicAttackNumber.value = 200;
                }
            });
            kiBlastSupersNumber.addEventListener('input', function () {
                if (parseInt(kiBlastSupersNumber.value) < 0) {
                    kiBlastSupersNumber.value = 0;
                } else if (parseInt(kiBlastSupersNumber.value) > 200) {
                    kiBlastSupersNumber.value = 200;
                }
            });
            strikeSupersNumber.addEventListener('input', function () {
                if (parseInt(strikeSupersNumber.value) < 0) {
                    strikeSupersNumber.value = 0;
                } else if (parseInt(strikeSupersNumber.value) > 200) {
                    strikeSupersNumber.value = 200;
                }
            });
            // End of keep the total AP >= 0 and AttributesStats <= 200

            // Function to update total & available points
            function updateTotalPoints() {
                // Soon old formula, used for now, placeolder
                    const TotalAPs = 422 / 120 * parseInt(levelNumber.value);

                // Soon new formula, to be used later on
                    // Level 1 (you start here) - No points
                    // Level 2 - 2 points
                    // Level 3 to 19 - 3 points
                    // Level 20 to 34 - 4 points
                    // Level 35 to 45 - 5 points
                    // Level 46 to 50 - 6 points
                    // Level 51 to 54 - 7 points
                    // Level 55 to 59 - 6 points
                    // Level 60 to 62 - 5 points
                    // Level 63 to 67 - 4 points
                    // Level 68 to 80 - 3 points

                document.querySelector('.ApsTotal').textContent = parseInt(TotalAPs);
                
                const AvailableAPs = TotalAPs - (parseInt(healthNumber.value) + parseInt(kiNumber.value) + parseInt(staminaNumber.value) + parseInt(basicAttackNumber.value) + parseInt(kiBlastSupersNumber.value) + parseInt(strikeSupersNumber.value));
                document.querySelector('.ApsAvailable').textContent = parseInt(AvailableAPs);

                if (parseInt(AvailableAPs) == 0) {
                    document.querySelector('.TooMuchAps').textContent = "You don't have Attribute Points left";
                    document.querySelector('.TooMuchAps').style.color = '#ff6600';
                } else if (AvailableAPs > 0) {
                    document.querySelector('.TooMuchAps').textContent = 'You have Attribute Points left';
                    document.querySelector('.TooMuchAps').style.color = '#007700';
                } else {
                    document.querySelector('.TooMuchAps').textContent = 'You have put too much Attribute Points!';
                    document.querySelector('.TooMuchAps').style.color = '#dd0000';
                }
            }
            // End of Function to update total & available points

            // Event Listeners
            levelNumber.addEventListener('input', function () {
                updateTotalPoints(); // To update total points
            });

            // Tose are to update available points
            healthNumber.addEventListener('input', function () {
                updateTotalPoints();
            });
            kiNumber.addEventListener('input', function () {
                updateTotalPoints();
            });
            staminaNumber.addEventListener('input', function () {
                updateTotalPoints();
            });
            basicAttackNumber.addEventListener('input', function () {
                updateTotalPoints();
            });
            kiBlastSupersNumber.addEventListener('input', function () {
                updateTotalPoints();
            });
            strikeSupersNumber.addEventListener('input', function () {
                updateTotalPoints();
            });
            // End of Attribute Points Calculation Script