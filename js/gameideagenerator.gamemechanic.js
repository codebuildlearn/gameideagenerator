function generateGameMechanics() {
    const gameMechanics = getActiveGameMechanicsList();
    const gameMechanicIdx = getRandomInt(0, gameMechanics.length);
    const gameMechanicName = gameMechanics[gameMechanicIdx];
    const description = getGameMechanicDescriptionByName(gameMechanicName);
    gameMechanicDescriptionHintHtml = getHintImageHtml("Game Mechanic Description", description);
    const gig_game_mechanic = document.getElementById("gig_game_mechanic");
    gig_game_mechanic.innerHTML = `${gameMechanicName} ${gameMechanicDescriptionHintHtml}`;
}

function getActiveGameMechanicsList() {
    let gameMechanics = [];
    for (let i = 0; i < GAME_MECHANCIC_LIST.length; i++) {
        const gameMechanicFilter = document.getElementById(`game_mechanic${i}`);
        if (gameMechanicFilter.checked) {
            gameMechanics.push(GAME_MECHANCIC_LIST[i].name);
        }
    }
    return gameMechanics;
}

function getGameMechanicDescriptionByName(gameMechanicName) {
    for (let i = 0; i < GAME_MECHANCIC_LIST.length; i++) {
        if (GAME_MECHANCIC_LIST[i].name === gameMechanicName) {
            return GAME_MECHANCIC_LIST[i].description;
        }
    }
    return "";
}

function buildGameMechanicList() {
    let gameMechanicListHtml = "<legend>Game Mechanic Options</legend>";    
    gameMechanicListHtml += `
        <div id="game_mechanic_list_global_container">
            <input type="checkbox" id="game_mechanic_list_global" name="game_mechanic_list_global" checked onchange="handleGameMechanicGlobalFilterChange()">
            <label for="game_mechanic_list_global" id="game_mechanic_list_global_label">Randomly generate game mechanic</label>
        </div>
    `;
    gameMechanicListHtml += `<div id="game_mechanic_list_container">`;
    for (let i = 0; i < GAME_MECHANCIC_LIST.length; i++) {
        gameMechanicListHtml += getGameMechanicListItemHtml(i);
    }
    gameMechanicListHtml += `</div>`;
    document.getElementById("gig_game_mechanic_list").innerHTML = gameMechanicListHtml;
}

function getGameMechanicListItemHtml(index) {
    return `
        <div class="game_mechanic_item">
            <input type="checkbox" id="game_mechanic${index}" name="game_mechanic${index}" class="game_mechanic_filter" checked onchange="handleGameMechanicFilterChange('game_mechanic${index}')">
            <label for="game_mechanic${index}" class="game_mechanic_label">${GAME_MECHANCIC_LIST[index].name}</label>
            ${getHintImageHtml("Game Mechanic Description", GAME_MECHANCIC_LIST[index].description)}
        </div>
    `;
}

function handleGameMechanicFilterChange(filter_checkbox_id) {
    updateGlobalGameMechanicFilterCheckbox();
}

function updateGlobalGameMechanicFilterCheckbox() {
    const gameMechanicListGlobal = document.getElementById("game_mechanic_list_global");
    const checkedCount = getGameMechanicFilterCheckedCount();    
    const desiredGameMechanicListGlobalChecked = checkedCount != 0;
    const desiredGameMechanicListGlobalIndeterminate = desiredGameMechanicListGlobalChecked && checkedCount != GAME_MECHANCIC_LIST.length;
    if (desiredGameMechanicListGlobalChecked != gameMechanicListGlobal.checked) {
        gameMechanicListGlobal.checked = desiredGameMechanicListGlobalChecked;
    }    
    if (desiredGameMechanicListGlobalIndeterminate != gameMechanicListGlobal.indeterminate) {
        gameMechanicListGlobal.indeterminate = desiredGameMechanicListGlobalIndeterminate;
    }
    updateGameMechanicDisplay();
}

function getGameMechanicFilterCheckedCount() {
    const gameMechanicCount = GAME_MECHANCIC_LIST.length;
    let checkedCount = 0;
    for (let i = 0; i < gameMechanicCount; i++) {
        if (document.getElementById(`game_mechanic${i}`).checked) {
            checkedCount++;
        }
    }
    return checkedCount;
}

function handleGameMechanicGlobalFilterChange() {
    const gameMechanicListGlobal = document.getElementById("game_mechanic_list_global");
    const checked = gameMechanicListGlobal.checked;
    const gameMechanicCount = GAME_MECHANCIC_LIST.length;    
    for (let i = 0; i < gameMechanicCount; i++) {
        document.getElementById(`game_mechanic${i}`).checked = checked;
    }
    updateGameMechanicDisplay();
}

function updateGameMechanicDisplay() {
    const gameMechanicListGlobal = document.getElementById("game_mechanic_list_global");
    const checked = gameMechanicListGlobal.checked;
    const gameMechanicDisplayStyle = checked ? "block" : "none";
    const gigGameMechanicLabel = document.getElementById("gig_game_mechanic_label");
    gigGameMechanicLabel.style.display = gameMechanicDisplayStyle;
    const gigGameMechanic = document.getElementById("gig_game_mechanic");
    gigGameMechanic.style.display = gameMechanicDisplayStyle;
}

