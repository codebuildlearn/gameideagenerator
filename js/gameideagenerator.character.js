function generateCharacter() {
    let characters = get_active_character_list();
    const character_idx = getRandomInt(0, characters.length);
    const character = characters[character_idx];
    const gig_character = document.getElementById("gig_character");
    gig_character.innerHTML = character;
}

function get_active_character_list() {
    let characters = [];
    for (let i = 0; i < character_list.length; i++) {
        const character_filter = document.getElementById(`character${i}`);
        if (character_filter.checked) {
            characters.push(character_list[i].name);
        }
    }
    return characters;
}

function buildCharacterList() {
    let character_list_html = "<legend>Character Options</legend>";    
    character_list_html += `
        <div id='character_list_global_container'>
            <input type="checkbox" id="character_list_global" name="character_list_global" checked onchange="handle_character_global_filter_change()">
            <label for="character_list_global" id="character_list_global_label">Randomly generate character</label>
        </div>
    `;
    character_list_html += `<div id="character_list_container">`;
    for (let i = 0; i < character_list.length; i++) {
        character_list_html += get_character_list_item_html(i);
    }
    character_list_html += `</div>`;
    document.getElementById("gig_character_list").innerHTML = character_list_html;
}

function get_character_list_item_html(index) {
    return `
        <div class="character_item">
            <input type="checkbox" id="character${index}" name="character${index}" class="character_filter" checked onchange="handle_character_filter_change('character${index}')">
            <label for="character${index}" class="character_label">${character_list[index].name}</label>
        </div>
    `;
}

function handle_character_filter_change(filter_checkbox_id) {
    update_global_character_filter_checkbox();
}

function update_global_character_filter_checkbox() {
    const character_list_global = document.getElementById("character_list_global");
    let checked_count = get_character_filter_checked_count();    
    const desired_character_list_global_checked = checked_count != 0;
    const desired_character_list_global_indeterminate = desired_character_list_global_checked && checked_count != character_list.length;
    if (desired_character_list_global_checked != character_list_global.checked) {
        character_list_global.checked = desired_character_list_global_checked;
    }    
    if (desired_character_list_global_indeterminate != character_list_global.indeterminate) {
        character_list_global.indeterminate = desired_character_list_global_indeterminate;
    }
}

function get_character_filter_checked_count() {
    const character_count = character_list.length;
    let checked_count = 0;
    for (let i = 0; i < character_count; i++) {
        if (document.getElementById(`character${i}`).checked) {
            checked_count++;
        }
    }
    return checked_count;
}

function handle_character_global_filter_change() {
    const character_list_global = document.getElementById("character_list_global");
    const checked = character_list_global.checked;
    const character_count = character_list.length;    
    for (let i = 0; i < character_count; i++) {
        document.getElementById(`character${i}`).checked = checked;
    }
    const character_display_style = checked ? "block" : "none";
    const gig_character_label = document.getElementById("gig_character_label");
    gig_character_label.style.display = character_display_style;
    const gig_character = document.getElementById("gig_character");
    gig_character.style.display = character_display_style;
}