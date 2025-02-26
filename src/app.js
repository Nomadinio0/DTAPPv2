import { atwTargets, bobsTargets } from "./modules/targets.js";
import {
  atwButtonBox,
  atwHitsBox,
  atwPercentBox,
  atwScoreBox,
  atwTargetBox,
  bobsButtonBox,
  bobsHitsBox,
  bobsPercentBox,
  bobsScoreBox,
  bobsTargetBox,
  playerOneAverageBox,
  playerOneBox,
  playerOneCheckoutBox,
  playerOneDartsBox,
  playerOneLegsBox,
  playerOneNameBox,
  playerOneRemainBox,
  playerOneScoreBox,
  playerOneSetsBox,
  playerTwoAverageBox,
  playerTwoBox,
  playerTwoCheckoutBox,
  playerTwoDartsBox,
  playerTwoLegsBox,
  playerTwoNameBox,
  playerTwoRemainBox,
  playerTwoScoreBox,
  playerTwoSetsBox,
} from "/src/modules/boxElements.js";
import {
  atwBtn,
  atwStartBtn,
  atwTripleBtn,
  bobsBtn,
  bobsStartBtn,
  matchBtn,
  matchStartBtn,
  matchStatsReturnBtn,
} from "/src/modules/buttons.js";
import checkouts from "/src/modules/checkouts.js";
import {
  atwSection,
  atwStartSection,
  atwStatsSection,
  bobsSection,
  bobsStartSection,
  bobsStatsSection,
  mainMenuSection,
  matchSection,
  matchStartSection,
  matchStatsSection,
} from "/src/modules/sections.js";

function hideSection() {
  let visibleSection = document.querySelector(".gameSection.flex");
  visibleSection.classList.remove("flex");
  visibleSection.classList.add("hidden");
}

function showBobStats(bobStats) {
  classToggle(bobsStatsSection, "flex");
  classToggle(bobsStartSection, "grid");
  document.querySelector(".bobsScore").innerHTML = bobStats.currentScore;
  document.querySelector(".bobsDifficulty").innerHTML = bobStats.difficulty;
  document.querySelector(
    ".bobsHits"
  ).innerHTML = `${bobStats.dartHits}/${bobStats.dartTotal}`;
  document.querySelector(
    ".bobsPercentage"
  ).innerHTML = `${bobStats.percentage.toFixed(2)}%`;
}

function showAtwStats(atwStats) {
  classToggle(atwStatsSection, "flex");
  classToggle(atwStartSection, "grid");
  document.querySelector(".atwScore").innerHTML = atwStats.currentScore;
  document.querySelector(".atwMode").innerHTML = atwStats.mode;
  document.querySelector(
    ".atwHits"
  ).innerHTML = `${atwStats.dartHits}/${atwStats.dartTotal}`;
  document.querySelector(
    ".atwPercentage"
  ).innerHTML = `${atwStats.percentage.toFixed(2)}%`;
}

function showMatchStats(playerOne, playerTwo) {
  classToggle(matchStatsSection, "flex");
  classToggle(matchStartSection, "grid");
  document.querySelector(".pOneName").innerHTML = playerOne.name;
  document.querySelector(".pOneSets").innerHTML = playerOne.setsWon;
  document.querySelector(".pOneLegs").innerHTML = playerOne.legsWon;
  document.querySelector(".pOneAvg").innerHTML = playerOne.average.toFixed(2);
  document.querySelector(".pOneBL").innerHTML = playerOne.bestLeg;
  document.querySelector(".pOneHF").innerHTML = playerOne.highestFinish;
  document.querySelector(".pOne100").innerHTML = playerOne.tonplus;
  document.querySelector(".pOne130").innerHTML = playerOne.ton30plus;
  document.querySelector(".pOne170").innerHTML = playerOne.ton70plus;
  document.querySelector(".pOne180").innerHTML = playerOne.ton80;
  document.querySelector(".pTwoName").innerHTML = playerTwo.name;
  document.querySelector(".pTwoSets").innerHTML = playerTwo.setsWon;
  document.querySelector(".pTwoLegs").innerHTML = playerTwo.legsWon;
  document.querySelector(".pTwoAvg").innerHTML = playerTwo.average.toFixed(2);
  document.querySelector(".pTwoBL").innerHTML = playerTwo.bestLeg;
  document.querySelector(".pTwoHF").innerHTML = playerTwo.highestFinish;
  document.querySelector(".pTwo100").innerHTML = playerTwo.tonplus;
  document.querySelector(".pTwo130").innerHTML = playerTwo.ton30plus;
  document.querySelector(".pTwo170").innerHTML = playerTwo.ton70plus;
  document.querySelector(".pTwo180").innerHTML = playerTwo.ton80;
}

function legReset(playerOne, playerTwo, matchSettings) {
  playerOne.remainScore = matchSettings.distance;
  playerOne.dartCount = 0;
  playerTwo.remainScore = matchSettings.distance;
  playerTwo.dartCount = 0;
  playerOneDartsBox.innerHTML = `Darts: ${playerOne.dartCount}`;
  playerTwoDartsBox.innerHTML = `Darts: ${playerTwo.dartCount}`;
  playerOneCheckoutBox.innerHTML = "";
  playerTwoCheckoutBox.innerHTML = "";
  playerOneRemainBox.innerHTML = matchSettings.distance;
  playerTwoRemainBox.innerHTML = matchSettings.distance;
  playerOneAverageBox.innerHTML = `Avg: ${playerOne.average.toFixed(2)}`;
  playerTwoAverageBox.innerHTML = `Avg: ${playerTwo.average.toFixed(2)}`;
  playerOneScoreBox.innerHTML = "";
  playerTwoScoreBox.innerHTML = "";
  playerOneLegsBox.innerHTML = `Legs: ${playerOne.legScore}`;
  playerTwoLegsBox.innerHTML = `Legs: ${playerTwo.legScore}`;
  playerOneSetsBox.innerHTML = `Sets: ${playerOne.setsWon}`;
  playerTwoSetsBox.innerHTML = `Sets: ${playerTwo.setsWon}`;
}

function classToggle(gameSection, layoutType) {
  if (gameSection.classList.contains(layoutType)) {
    gameSection.classList.remove(layoutType);
    gameSection.classList.add("hidden");
  } else if (gameSection.classList.contains("hidden")) {
    gameSection.classList.remove("hidden");
    gameSection.classList.add(layoutType);
  }
}

function onFinish(score) {
  const checkout = checkouts.find((item) => item.score === score);
  if (checkout) {
    return checkout.combinations;
  }
}

function getTargetByIndex(index, target) {
  return index >= 0 && index < target.length ? target[index].target : null;
}

// Funkcja do załadowania ustawień meczu
function loadMatchSettings() {
  let settings = {
    p1Name: document.getElementById("p1NameInput").value,
    p2Name: document.getElementById("p2NameInput").value,
    distance: parseInt(document.getElementById("distance").value, 10),
    setDistance: parseInt(document.getElementById("sets").value, 10),
    legDistance: parseInt(document.getElementById("legs").value, 10),
  };
  return settings;
}

function loadPlayerOne() {
  let playerOneStats = {
    name: document.getElementById("p1NameInput").value,
    legsWon: 0,
    legScore: 0,
    scores: [],
    setsWon: 0,
    average: 0,
    bestLeg: 0,
    highestFinish: 0,
    ton80: 0,
    ton70plus: 0,
    ton30plus: 0,
    tonplus: 0,
    remainScore: 0,
    dartCount: 0,
    dartTotal: 0,
  };
  return playerOneStats;
}

function loadPlayerTwo() {
  let playerTwoStats = {
    name: document.getElementById("p2NameInput").value,
    legsWon: 0,
    legScore: 0,
    scores: [],
    setsWon: 0,
    average: 0,
    bestLeg: 0,
    highestFinish: 0,
    ton80: 0,
    ton70plus: 0,
    ton30plus: 0,
    tonplus: 0,
    remainScore: 0,
    dartCount: 0,
    dartTotal: 0,
  };
  return playerTwoStats;
}

function matchSettingsReset(playerOne, playerTwo, matchSettings) {
  playerOne = loadPlayerOne();
  playerTwo = loadPlayerTwo();
  playerOne.remainScore = matchSettings.distance;
  playerTwo.remainScore = matchSettings.distance;
  playerOneRemainBox.innerHTML = matchSettings.distance;
  playerTwoRemainBox.innerHTML = matchSettings.distance;
  playerOneDartsBox.innerHTML = `Darts: ${playerOne.dartCount}`;
  playerTwoDartsBox.innerHTML = `Darts: ${playerTwo.dartCount}`;
  playerOneCheckoutBox.innerHTML = "";
  playerTwoCheckoutBox.innerHTML = "";
  playerOneScoreBox.innerHTML = "";
  playerTwoScoreBox.innerHTML = "";
  playerOneLegsBox.innerHTML = `Legs: ${playerOne.legScore}`;
  playerOneSetsBox.innerHTML = `Sets: ${playerOne.setsWon}`;
  playerTwoLegsBox.innerHTML = `Legs: ${playerTwo.legScore}`;
  playerTwoSetsBox.innerHTML = `Sets: ${playerTwo.setsWon}`;
  playerOneAverageBox.innerHTML = `AVG: ${playerOne.average.toFixed(2)}`;
  playerTwoAverageBox.innerHTML = `AVG: ${playerTwo.average.toFixed(2)}`;
}

function bobsInput(bobStats) {
  let score = 0;

  bobsButtonBox.addEventListener("click", function (event) {
    if (event.target.id === "bobsSingleBtn") {
      score = 1;
    } else if (event.target.id === "bobsDoubleBtn") {
      score = 2;
    } else if (event.target.id === "bobsTripleBtn") {
      score = 3;
    } else if (event.target.id === "bobsNoscoreBtn") {
      score = 0;
    }
    bobStats.dartTotal += 3;
    bobStats.dartHits += score;
    bobStats.percentage = (bobStats.dartHits / bobStats.dartTotal) * 100;
    if (score == 0) {
      bobStats.currentScore =
        bobStats.currentScore - getTargetByIndex(bobStats.round, bobsTargets);
    } else {
      bobStats.currentScore =
        bobStats.currentScore +
        getTargetByIndex(bobStats.round, bobsTargets) * score;
    }

    bobsHitsBox.innerHTML = `Hits <br />${bobStats.dartHits} / ${bobStats.dartTotal}`;
    bobsScoreBox.innerHTML = `Score <br />${bobStats.currentScore}`;
    bobsPercentBox.innerHTML = `Percentage <br />${bobStats.percentage.toFixed(
      2
    )}%`;
    bobStats.round++;
    if (bobStats.difficulty == "Hard" && bobStats.currentScore <= 0) {
      showBobStats(bobStats);
    } else if (bobStats.round == 21) {
      showBobStats(bobStats);
    } else {
      bobsTargetBox.innerHTML = bobsTargets[bobStats.round].description;
    }
  });
}

function atwInput(atwStats, atwOrder) {
  let score = 0;
  atwButtonBox.addEventListener("click", function (event) {
    if (event.target.id === "atwSingleBtn") {
      score = 1;
    } else if (event.target.id === "atwDoubleBtn") {
      score = 2;
    } else if (event.target.id === "atwTripleBtn") {
      score = 3;
    } else if (event.target.id === "atwNoscoreBtn") {
      score = 0;
    }
    if (score != 0) {
      atwStats.dartHits++;
    }
    atwStats.dartTotal++;
    atwStats.currentScore += score;
    atwStats.percentage = (atwStats.dartHits / atwStats.dartTotal) * 100;
    atwStats.round++;
    if (atwStats.round == 21) {
      showAtwStats(atwStats);
    } else {
      atwHitsBox.innerHTML = `Hits <br />${atwStats.dartHits} / ${atwStats.dartTotal}`;
      atwScoreBox.innerHTML = `Score <br />${atwStats.currentScore}`;
      atwPercentBox.innerHTML = `Percentage <br />${atwStats.percentage.toFixed(
        2
      )}%`;
      atwTargetBox.innerHTML =
        atwTargets[atwOrder[atwStats.round] - 1].description;
    }
    if (atwTargets[atwOrder[atwStats.round] - 1].description == "Throw Bull") {
      atwTripleBtn.disabled = true;
    } else {
      atwTripleBtn.disabled = false;
    }
  });
}

function matchInput(
  playerOne,
  playerTwo,
  matchSettings,
  currentLeg,
  currentSet
) {
  let scoreInput = document.getElementById("matchInput");
  let playerOneTurn = true;
  let currentPlayerRemainScore;
  let currentPlayerDartsCount;
  let currentPlayerAvg;
  let currentPlayerTotalScore;

  function playerTurn() {
    if (playerOneTurn) {
      return playerOne;
    } else {
      return playerTwo;
    }
  }

  function highlightPlayer() {
    if (playerOneTurn) {
      playerOneBox.classList.add("bg-[#befcc3]");
      playerTwoBox.classList.remove("bg-[#befcc3]");
    } else {
      playerTwoBox.classList.add("bg-[#befcc3]");
      playerOneBox.classList.remove("bg-[#befcc3]");
    }
  }

  function scoreStatsCount(score) {
    if (score == 180) {
      playerTurn().ton80++;
    } else if (score >= 170 && score < 180) {
      playerTurn().ton70plus++;
    } else if (score >= 130 && score < 170) {
      playerTurn().ton30plus++;
    } else if (score >= 100 && score < 130) {
      playerTurn().tonplus++;
    }
  }

  scoreInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      let score = parseInt(scoreInput.value, 10);
      // Sprawdzanie który gracz rzuca i wybieranie odpowiednich statystyk do uzupełnienia
      currentPlayerRemainScore = playerTurn().remainScore;
      currentPlayerDartsCount = playerTurn().dartCount;
      currentPlayerRemainScore -= score;
      scoreStatsCount(score);

      // Walidacja wprowadzonej wartości
      if (isNaN(score) || score < 0 || score > 180) {
        alert("Błędna wartość!");
        scoreInput.value = "";
        return;
      } else if (currentPlayerRemainScore < 0) {
        alert("Za wysoka wartość!");
        currentPlayerRemainScore += score; // Cofnięcie ostatniego odejmowania
        return;
      } else if (currentPlayerRemainScore == 1) {
        alert("Pozostała wartość nie może być równa 1!");
        currentPlayerRemainScore += score; // Cofnięcie ostatniego odejmowania
        return;
      } else if (currentPlayerRemainScore > 1) {
        playerTurn().dartTotal += 3;
        currentPlayerDartsCount = currentPlayerDartsCount + 3;
        playerTurn().scores.push(score);
        currentPlayerTotalScore = playerTurn().scores.reduce(
          (acc, val) => acc + val,
          0
        );
        currentPlayerAvg =
          (currentPlayerTotalScore / playerTurn().dartTotal) * 3;
        playerTurn().average = currentPlayerAvg;
      } else if (currentPlayerRemainScore == 0) {
        playerTurn().scores.push(score);
        let dartsUsed = parseInt(
          prompt("Ilość użytych lotek? (Wpisz 1, 2 lub 3)"),
          10
        );
        if (isNaN(dartsUsed) || dartsUsed > 3 || dartsUsed < 1) {
          alert("Błędna wartość!");
          return;
        } else {
          if (score > playerTurn().highestFinish) {
            playerTurn().highestFinish = score;
          }
          playerTurn().dartCount += dartsUsed;
          playerTurn().dartTotal += dartsUsed;
          playerTurn().legsWon++;
          playerTurn().legScore++;
          if (playerTurn().dartCount > playerTurn().bestLeg) {
            playerTurn().bestLeg = playerTurn().dartCount;
          }
          currentPlayerTotalScore = playerTurn().scores.reduce(
            (acc, val) => acc + val,
            0
          );
          currentPlayerAvg =
            (currentPlayerTotalScore / playerTurn().dartTotal) * 3;
          playerTurn().average = currentPlayerAvg;
          currentLeg++;
          if (playerTurn().legScore == matchSettings.legDistance) {
            playerTurn().setsWon++;
            currentSet++;
            currentLeg = 1;
            playerOne.legScore = 0;
            playerTwo.legScore = 0;
            if (playerTurn().setsWon == matchSettings.setDistance) {
              // wygrana
              showMatchStats(playerOne, playerTwo);
              matchSettingsReset(playerOne, playerTwo, matchSettings);
            }
          }
        }
        currentPlayerRemainScore = matchSettings.distance;

        if (currentSet % 2 != 0) {
          if (currentLeg % 2 != 0) {
            playerOneTurn = true;
          } else {
            playerOneTurn = false;
          }
        } else {
          if (currentLeg % 2 != 0) {
            playerOneTurn = false;
          } else {
            playerOneTurn = true;
          }
        }
        legReset(playerOne, playerTwo, matchSettings);
        highlightPlayer();
        scoreInput.value = "";
        return;
      }

      // Wyświetlenie aktualnego wyniku
      let currentRemainBox = playerOneTurn
        ? "playerOneRemainBox"
        : "playerTwoRemainBox";
      let currentScoreBox = playerOneTurn
        ? "playerOneScoreBox"
        : "playerTwoScoreBox";
      let dartCountBox = playerOneTurn
        ? "playerOneDartsBox"
        : "playerTwoDartsBox";
      let currentCheckoutBox = playerOneTurn
        ? "playerOneCheckoutBox"
        : "playerTwoCheckoutBox";
      let currentAverageBox = playerOneTurn
        ? "playerOneAvgBox"
        : "playerTwoAvgBox";

      document.getElementById(
        currentRemainBox
      ).innerHTML = `${currentPlayerRemainScore}`;
      document.getElementById(
        currentScoreBox
      ).innerHTML = `Last score <br />${score}`;
      document.getElementById(
        dartCountBox
      ).innerHTML = `Darts <br />${currentPlayerDartsCount}`;
      if (onFinish(currentPlayerRemainScore)) {
        document.getElementById(currentCheckoutBox).innerHTML = onFinish(
          currentPlayerRemainScore
        );
      } else {
        document.getElementById(currentCheckoutBox).innerHTML = "";
      }
      document.getElementById(
        currentAverageBox
      ).innerHTML = `Avg <br />${currentPlayerAvg.toFixed(2)}`;

      // Aktualizacja wyniku gracza
      playerTurn().remainScore = currentPlayerRemainScore;
      playerTurn().dartCount = currentPlayerDartsCount;

      // Przełączanie gracza
      playerOneTurn = !playerOneTurn;
      highlightPlayer();
      // Czyszczenie pola input
      scoreInput.value = "";
      return;
    }
  });
}

function matchHandle() {
  let matchSettings = loadMatchSettings();
  if (matchSettings.p1Name === "" || matchSettings.p2Name === "") {
    alert("Popraw dane. Gracze muszą mieć nazwy!");
    return;
  } else {
    classToggle(matchStartSection, "grid");
    classToggle(mainMenuSection, "flex");
    let playerOne = loadPlayerOne();
    let playerTwo = loadPlayerTwo();
    let currentSet = 1;
    let currentLeg = 1;
    playerOne.remainScore = matchSettings.distance;
    playerTwo.remainScore = matchSettings.distance;
    playerOneNameBox.innerHTML = matchSettings.p1Name;
    playerTwoNameBox.innerHTML = matchSettings.p2Name;
    playerOneRemainBox.innerHTML = matchSettings.distance;
    playerTwoRemainBox.innerHTML = matchSettings.distance;
    playerOneLegsBox.innerHTML = `Legs: ${playerOne.legScore}`;
    playerTwoLegsBox.innerHTML = `Legs: ${playerTwo.legScore}`;
    playerOneSetsBox.innerHTML = `Sets: ${playerOne.setsWon}`;
    playerTwoSetsBox.innerHTML = `Sets: ${playerTwo.setsWon}`;
    matchInput(playerOne, playerTwo, matchSettings, currentLeg, currentSet);
  }
}

function bobsHandle() {
  let bobStats = {
    round: 0,
    dartTotal: 0,
    dartHits: 0,
    percentage: 0,
    currentScore: 27,
    difficulty: document.getElementById("bobsDifficulty").value,
  };
  bobsHitsBox.innerHTML = `Hits <br />${bobStats.dartHits} / ${bobStats.dartTotal}`;
  bobsScoreBox.innerHTML = `Score <br />${bobStats.currentScore}`;
  bobsPercentBox.innerHTML = `Percentage <br />${bobStats.percentage.toFixed(
    2
  )}%`;
  bobsTargetBox.innerHTML = bobsTargets[bobStats.round].description;
  bobsInput(bobStats);
}

function atwHandle() {
  let atwStats = {
    round: 0,
    dartTotal: 0,
    dartHits: 0,
    percentage: 0,
    currentScore: 0,
    mode: document.getElementById("atwMode").value,
  };
  let atwOrder = Array.from({ length: 21 }, (_, i) => i + 1);
  if (atwStats.mode == "Random") {
    for (let i = atwOrder.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [atwOrder[i], atwOrder[j]] = [atwOrder[j], atwOrder[i]];
    }
  } else if (atwStats.mode == "Descending") {
    atwOrder = Array.from({ length: 21 }, (_, i) => 21 - i);
  } else if (atwStats.mode == "Clockwise") {
    atwOrder = [
      1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5, 20, 21,
    ];
  }

  atwHitsBox.innerHTML = `Hits <br />${atwStats.dartHits} / ${atwStats.dartTotal}`;
  atwScoreBox.innerHTML = `Score <br />${atwStats.currentScore}`;
  atwPercentBox.innerHTML = `Percentage <br />${atwStats.percentage.toFixed(
    2
  )}%`;
  atwTargetBox.innerHTML = atwTargets[atwOrder[atwStats.round] - 1].description;
  if (atwTargets[atwOrder[atwStats.round] - 1].description == "Throw Bull") {
    atwTripleBtn.disabled = true;
  }
  atwInput(atwStats, atwOrder);
}

matchBtn.addEventListener("click", function () {
  hideSection();
  classToggle(matchSection, "flex");
});

matchStartBtn.addEventListener("click", function () {
  matchHandle();
});

matchStatsReturnBtn.addEventListener("click", function () {
  classToggle(matchStatsSection, "flex");
  classToggle(mainMenuSection, "flex");
});

atwBtn.addEventListener("click", function () {
  hideSection();
  classToggle(atwSection, "flex");
});

atwStartBtn.addEventListener("click", function () {
  classToggle(atwStartSection, "grid");
  classToggle(mainMenuSection, "flex");
  atwHandle();
});

bobsBtn.addEventListener("click", function () {
  hideSection();
  classToggle(bobsSection, "flex");
});

bobsStartBtn.addEventListener("click", function () {
  classToggle(bobsStartSection, "grid");
  classToggle(mainMenuSection, "flex");
  bobsHandle();
});
