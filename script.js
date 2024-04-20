const scores = {
    red: 0,
    blue: 0,
    green: 0,
    yellow: 0
};

function OpeningCeremony(score, callbackFnc)
{
    console.log("Let the games begin");
    setTimeout(() => {
        console.log("Current Scores:", score);
        Race100M(score, callbackFnc);
    }, 1000);
}

function Race100M(score, callbackFnc)
{
    console.log("Race100M begins");
    setTimeout(() => {
        const times = {
            red: parseInt(Math.random() * 6) + 10,
            blue: parseInt(Math.random() * 6) + 10,
            green: parseInt(Math.random() * 6) + 10,
            yellow: parseInt(Math.random() * 6) + 10,
        };
        console.log("Race100M times:", times);
        const sortedColors = Object.keys(times).sort((a, b) => times[a] - times[b]);
        score[sortedColors[0]] += 50;
        score[sortedColors[1]] += 25;
        console.log("Updated Scores:", score);
        callbackFnc(score, LongJump);
    }, 3000);
}

function LongJump(score, callbackFnc)
{
    console.log("LongJump begins");
    setTimeout(() => {
        const selectedColor = ['red', 'blue', 'green', 'yellow'][Math.floor(Math.random() * 4)];
        console.log(selectedColor, "won the LongJump!");
        score[selectedColor] += 150;
        console.log("Updated Scores:", score);
        callbackFnc(score, HighJump);
    }, 2000);
}

function HighJump(score, callbackFnc)
{
    console.log("HighJump begins");
    const userColor = prompt("What colour secured the highest jump?");
    if (userColor && score.hasOwnProperty(userColor)) {
        score[userColor] += 100;
        console.log(userColor, "won the HighJump!");
        console.log("Updated Scores:", score);
    } else {
        console.log("Event was cancelled");
    }
    callbackFnc(score, AwardCeremony);
}

function AwardCeremony(score)
{
    console.log("AwardCeremony begins");
    const sortedColors = Object.keys(score).sort((a, b) => score[b] - score[a]);
    console.log(sortedColors[0], "came first with", score[sortedColors[0]], "points.");
    console.log(sortedColors[1], "came second with", score[sortedColors[1]], "points.");
    console.log(sortedColors[2], "came third with", score[sortedColors[2]], "points.");
}
OpeningCeremony(scores, Race100M);