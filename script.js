// In cas of refresh, update span
// AP
document.addEventListener("DOMContentLoaded", function () {updateTotalPoints(); calculateFinalHealth();});
// Name
const nameInput = document.getElementById("name");
const charaname = document.querySelector(".charaname");
charaname.textContent = nameInput.value.toUpperCase();
// End of update span

// Character Mugshots Script
const raceSelect = document.getElementById("raceSelect");
const raceMugshot = document.getElementById("raceMugshot");

raceSelect.addEventListener("change", function () {
  raceMugshot.src = `./img/charamugshots/${raceSelect.value}.png`;
});
// End of Character Mugshots Script

// Character Name Script
nameInput.addEventListener("input", function () {
    // Le nom ne doit pas dépaser 12 caractères
    if (nameInput.value.length > 12) {
      nameInput.value = nameInput.value.slice(0, 12);
    }
    charaname.textContent = nameInput.value.toUpperCase();
});
// End of Character Name Script

// Attribute Points Calculation Script
// Get numbers inputs
const levelNumber = document.getElementById("level");

const healthNumber = document.getElementById("health");
const kiNumber = document.getElementById("ki");
const staminaNumber = document.getElementById("stamina");
const basicAttackNumber = document.getElementById("basicAttack");
const kiBlastSupersNumber = document.getElementById("kiBlastSupers");
const strikeSupersNumber = document.getElementById("strikeSupers");

// Keep the level >= 1 and <= 120
levelNumber.addEventListener("input", function () {
  if (parseInt(levelNumber.value) < 1) {
    levelNumber.value = 1;
  } else if (parseInt(levelNumber.value) > 120) {
    levelNumber.value = 120;
  }
});
// Keep the total AP >= 0 and AttributesStats <= 200
healthNumber.addEventListener("input", function () {
  if (parseInt(healthNumber.value) < 0) {
    healthNumber.value = 0;
  } else if (parseInt(healthNumber.value) > 200) {
    healthNumber.value = 200;
  }
});
kiNumber.addEventListener("input", function () {
  if (parseInt(kiNumber.value) < 0) {
    kiNumber.value = 0;
  } else if (parseInt(kiNumber.value) > 200) {
    kiNumber.value = 200;
  }
});
staminaNumber.addEventListener("input", function () {
  if (parseInt(staminaNumber.value) < 0) {
    staminaNumber.value = 0;
  } else if (parseInt(staminaNumber.value) > 200) {
    staminaNumber.value = 200;
  }
});
basicAttackNumber.addEventListener("input", function () {
  if (parseInt(basicAttackNumber.value) < 0) {
    basicAttackNumber.value = 0;
  } else if (parseInt(basicAttackNumber.value) > 200) {
    basicAttackNumber.value = 200;
  }
});
kiBlastSupersNumber.addEventListener("input", function () {
  if (parseInt(kiBlastSupersNumber.value) < 0) {
    kiBlastSupersNumber.value = 0;
  } else if (parseInt(kiBlastSupersNumber.value) > 200) {
    kiBlastSupersNumber.value = 200;
  }
});
strikeSupersNumber.addEventListener("input", function () {
  if (parseInt(strikeSupersNumber.value) < 0) {
    strikeSupersNumber.value = 0;
  } else if (parseInt(strikeSupersNumber.value) > 200) {
    strikeSupersNumber.value = 200;
  }
});
// End of keep the total AP >= 0 and AttributesStats <= 200

// Function to update total & available points
function updateTotalPoints() {
     // old formula, used for now, placeolder
     const TotalAPs = 422 / 120 * parseInt(levelNumber.value);

    /* new formula that'll use this point system :
        Level 1 (you start here) - No points
        Level 2 - 2 points
        Level 3 to 19 - 3 points
        Level 20 to 34 - 4 points
        Level 35 to 45 - 5 points
        Level 46 to 50 - 6 points
        Level 51 to 54 - 7 points
        Level 55 to 59 - 6 points
        Level 60 to 62 - 5 points
        Level 63 to 67 - 4 points
        Level 68 to 83 - 3 points
        Level 83 to 97 - 2 points
        Level 97 to 99 - 3 points 
        Level 99 to 101 - 2 points
        Level 101 to 102 - 4 points
        Level 102 to 119 - 2 points
        Level 119 to 120 - 7 points

        Total points = 2 + 3*17 + 4*15 + 5*11 + 6*5 + 7*4 + 6*5 + 5*3 + 4*5 + 3*16 + 2*14 + 3*2 + 2*2 + 4*1 + 2*17 + 7 = ?
    */

    document.querySelector(".ApsTotal").textContent = parseInt(TotalAPs);

    const AvailableAPs = TotalAPs -
        (parseInt(healthNumber.value) +
        parseInt(kiNumber.value) +
        parseInt(staminaNumber.value) +
        parseInt(basicAttackNumber.value) +
        parseInt(kiBlastSupersNumber.value) +
        parseInt(strikeSupersNumber.value));
    document.querySelector(".ApsAvailable").textContent = parseInt(AvailableAPs);

    if (parseInt(AvailableAPs) == 0) {
        document.querySelector(".TooMuchAps").textContent = "You don't have Attribute Points left";
        document.querySelector(".TooMuchAps").style.color = "#ff6600";
    } else if (AvailableAPs > 0) {
        document.querySelector(".TooMuchAps").textContent = "You have Attribute Points left";
        document.querySelector(".TooMuchAps").style.color = "#007700";
    } else {
        document.querySelector(".TooMuchAps").textContent = "You have put too much Attribute Points!";
        document.querySelector(".TooMuchAps").style.color = "#dd0000";
    }
}
// End of Function to update total & available points

// Event Listeners
levelNumber.addEventListener("input", function () {
  updateTotalPoints(); // To update total points
});

// Tose are to update available points
healthNumber.addEventListener("input", function () {
  updateTotalPoints();
});
kiNumber.addEventListener("input", function () {
  updateTotalPoints();
});
staminaNumber.addEventListener("input", function () {
  updateTotalPoints();
});
basicAttackNumber.addEventListener("input", function () {
  updateTotalPoints();
});
kiBlastSupersNumber.addEventListener("input", function () {
  updateTotalPoints();
});
strikeSupersNumber.addEventListener("input", function () {
  updateTotalPoints();
});
// End of Attribute Points Calculation Script

// Calculate Stats Script
// Button script
const calculateStatsButton = document.getElementById("calculateButton");
calculateStatsButton.addEventListener("click", function () {
    calculateFinalHealth();
});
// End of Calculate Stats Script

// Final Stats input getters
const heightSelect = document.getElementById("height");

const healthFinalNumber = document.getElementById("finalHealth");
const kiFinalNumber = document.getElementById("finalKi");
const staminaFinalNumber = document.getElementById("finalStamina");
const basicAttackFinalNumber = document.getElementById("finalBasicAttack");
const kiBlastSupersFinalNumber = document.getElementById("finalKiBlastSupers");
const strikeSupersFinalNumber = document.getElementById("finalStrikeSupers");
// End of Final Stats input getters

// Fist some fix values
// Stat Genaral Constants
const healthBase = 20250;
const kiAndStaminaBase = 500;
const kiAndStaminaAPConstant = 2.4;
const kiAndStaminaClothingConstant = 2.4;
const APsConstant = 30;
const clothingConstant = 75;
// Race constants and coefficients
const raceConstant = 375;

const friezaCoef = 0;
const femaleMajinCoef = 0;
const femaleSaiyanCoef = 0;
const maleSaiyanCoef = 1;
const femaleEarthlingCoef = 4;
const maleEarthlingCoef = 4;
const namekianCoef = 7;
const maleMajinCoef = 8;
// Height constants and coefficients
const heightConstant = 375;

const shortestCoef = 0;
const shortCoef = 1;
const tallCoef = 3;
const tallestCoef = 4;
// End of fix values

// Health Final Stat calculation
// Get race coefficient
function getRaceCoef(race) {
    if (race === "Frieza") {
        return friezaCoef;
    } else if (race === "Majin (F)") {
        return femaleMajinCoef;
    } else if (race === "Saiyan (F)") {
        return femaleSaiyanCoef;
    } else if (race === "Saiyan (M)") {
        return maleSaiyanCoef;
    } else if (race === "Earthling (F)") {
        return femaleEarthlingCoef;
    } else if (race === "Earthling (M)") {
        return maleEarthlingCoef;
    } else if (race === "Namekian") {
        return namekianCoef;
    } else if (race === "Majin (M)") {
        return maleMajinCoef;
    }
    return 0;
}
// Get height coefficient
function getRaceHeightCoef(height) {
    if (height === "Shortest") {
        return shortestCoef;
    } else if (height === "Short") {
        return shortCoef;
    } else if (height === "Tall") {
        return tallCoef;
    } else if (height === "Tallest") {
        return tallestCoef;
    }
    return 0;
}
// Calculate Final Health function
function calculateFinalHealth() {
    const FinalHealth = healthBase + getRaceCoef(raceSelect.value) * raceConstant + getRaceHeightCoef(heightSelect.value) * heightConstant + healthNumber.value * APsConstant + 0 /* clothing, not implemented yet */ * clothingConstant;
    healthFinalNumber.value = parseInt(FinalHealth);
}
// End of Health Final Stat calculation