// для получения анимации

////////////////////////////////////
// used colors
var bgColor1 = "#000";
var bgColor2 = "#fff";

// cadrsNums
var currentCadrN = 0;
var cadrsQuotity = 0;

// all cadrs
var cadrs = [];

// empty cadr
// 7x11
var oneCadr = [
    false, false, false, false, false, false, false,
    false, false, false, false, false, false, false,
    false, false, false, false, false, false, false,
    false, false, false, false, false, false, false,
    false, false, false, false, false, false, false,
    false, false, false, false, false, false, false,
    false, false, false, false, false, false, false,
    false, false, false, false, false, false, false,
    false, false, false, false, false, false, false,
    false, false, false, false, false, false, false,
    false, false, false, false, false, false, false,
];

// current cadr's values
// 7x11
var isCubeClicked = [
    false, false, false, false, false, false, false,
    false, false, false, false, false, false, false,
    false, false, false, false, false, false, false,
    false, false, false, false, false, false, false,
    false, false, false, false, false, false, false,
    false, false, false, false, false, false, false,
    false, false, false, false, false, false, false,
    false, false, false, false, false, false, false,
    false, false, false, false, false, false, false,
    false, false, false, false, false, false, false,
    false, false, false, false, false, false, false,
];

// to change values of current cadr
function cubeClicked(cubeN) {

    if (!isCubeClicked[cubeN]) {
        document.querySelectorAll(".ha-button")[cubeN].style.background = bgColor2;
        document.querySelectorAll(".ha-button")[cubeN].style.color = bgColor2;
        isCubeClicked[cubeN] = true;
    } else {
        document.querySelectorAll(".ha-button")[cubeN].style.background = bgColor1;
        document.querySelectorAll(".ha-button")[cubeN].style.color = bgColor1;
        isCubeClicked[cubeN] = false;
    }
}

function cubeHovered(cubeN, e) {

    if (e.ctrlKey) {
        if (!isCubeClicked[cubeN]) {
            document.querySelectorAll(".ha-button")[cubeN].style.background = bgColor2;
            document.querySelectorAll(".ha-button")[cubeN].style.color = bgColor2;
            isCubeClicked[cubeN] = true;
        } else {
            document.querySelectorAll(".ha-button")[cubeN].style.background = bgColor1;
            document.querySelectorAll(".ha-button")[cubeN].style.color = bgColor1;
            isCubeClicked[cubeN] = false;
        }
    }
}


// display cadr's values
function displayCadr(cadrToDisplay) {

    // check all values of array and ..... display! but don't change nothing.
    for (var i = 0; i < cadrToDisplay.length; i++) {

        if (cadrToDisplay[i]) {
            document.querySelectorAll(".ha-button")[i].style.background = bgColor2;
            document.querySelectorAll(".ha-button")[i].style.color = bgColor2;
        } else {
            document.querySelectorAll(".ha-button")[i].style.background = bgColor1;
            document.querySelectorAll(".ha-button")[i].style.color = bgColor1;
        }

    }

}

// initialize current cadr's values from other cadr
function initCadr(cadrToInit, cadrN) {

    // current cadr gets values gived cadr
    for (var i = 0; i < cadrToInit.length; i++) {

        isCubeClicked[i] = cadrToInit[i];

    }

}



// Several cadrs

// save current cadr's values
function Save() {
    cadrs[currentCadrN] = isCubeClicked.slice();
}

// add empty cadr
function Add() {

    // add empty cadr
    cadrs.push(oneCadr);

    // change cadrs quotity
    cadrsQuotity++;

    // update
    showCadrsNum();
}

// previus cadr
function Prev() {
    if (currentCadrN > 0) {

        // firstly, save current cadr's values int currentCadrN
        Save();

        // prev cadr
        currentCadrN--;

        // initialize previuos cadr's values
        initCadr(cadrs[currentCadrN], currentCadrN);

        // show previuos cadr
        displayCadr(cadrs[currentCadrN]);

        // update cadrsNum
        showCadrsNum();
    }
}


// next cadr
function Next() {
    if (currentCadrN + 1 < cadrsQuotity) {

        // firstly, save current cadr's values int currentCadrN
        Save();

        // next cadr
        currentCadrN++;

        // initialize next cadr's values
        initCadr(cadrs[currentCadrN], currentCadrN);

        // show next cadr
        displayCadr(cadrs[currentCadrN]);

        // update cadrsNum
        showCadrsNum();
    }

}

// show current cadr num and cadrs quotity
function showCadrsNum() {

    // show current cadr num
    document.querySelectorAll("#cadrsQuotity > span")[0].textContent = currentCadrN + 1;

    // show cadrs quotity
    document.querySelectorAll("#cadrsQuotity > span")[1].textContent = cadrsQuotity;

}


// Default start
// add 1 cadr
Add();
// show cadr num
showCadrsNum();
// init cadr
initCadr(cadrs[currentCadrN], currentCadrN);
//
displayCadr(cadrs[currentCadrN]);
