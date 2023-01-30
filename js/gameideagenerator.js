function getRandomInt(minInclusive, maxExclusive) {
    const min = Math.ceil(minInclusive);
    const max = Math.floor(maxExclusive);
    return Math.floor(Math.random() * (max - min) + min);
}

function handle_show_hide_advanced_click() {
    const gig_advanced_options = document.getElementById("gig_advanced_options");
    const gig_show_hide_advanced = document.getElementById("gig_show_hide_advanced");
    gig_advanced_options.style.display = gig_show_hide_advanced.checked ? "block" : "none";
}

function gig_generate_button_click() {
    generateGenre();
    generateCharacter();
}

function generateGenre() {
    let genres = get_active_genre_list();
    const genre_idx = getRandomInt(0, genres.length);
    const genreName = genres[genre_idx];
    const gig_genre = document.getElementById("gig_genre");
    const description = getGenreDescriptionByGenreName(genreName);
    genre_description_hint_html = getHintImageHtml("Genre Description", description);
    gig_genre.innerHTML = `${genreName} ${genre_description_hint_html}`;
}

function getHintImageHtml(altText, titleText) {
    return `<img class="genre_hint" alt="${altText}" title="${titleText}" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzIiIGhlaWdodD0iMzIiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9ImZpbGw6I0ZGRkZGRjsiPgo8cGF0aCBkPSJNIDI0IDQgQyAxMi45NzIwNjYgNCA0IDEyLjk3MjA3NCA0IDI0IEMgNCAzNS4wMjc5MjYgMTIuOTcyMDY2IDQ0IDI0IDQ0IEMgMzUuMDI3OTM0IDQ0IDQ0IDM1LjAyNzkyNiA0NCAyNCBDIDQ0IDEyLjk3MjA3NCAzNS4wMjc5MzQgNCAyNCA0IHogTSAyNCA3IEMgMzMuNDA2NjE1IDcgNDEgMTQuNTkzMzkxIDQxIDI0IEMgNDEgMzMuNDA2NjA5IDMzLjQwNjYxNSA0MSAyNCA0MSBDIDE0LjU5MzM4NSA0MSA3IDMzLjQwNjYwOSA3IDI0IEMgNyAxNC41OTMzOTEgMTQuNTkzMzg1IDcgMjQgNyB6IE0gMjQgMTQgQSAyIDIgMCAwIDAgMjQgMTggQSAyIDIgMCAwIDAgMjQgMTQgeiBNIDIzLjk3NjU2MiAyMC45Nzg1MTYgQSAxLjUwMDE1IDEuNTAwMTUgMCAwIDAgMjIuNSAyMi41IEwgMjIuNSAzMy41IEEgMS41MDAxNSAxLjUwMDE1IDAgMSAwIDI1LjUgMzMuNSBMIDI1LjUgMjIuNSBBIDEuNTAwMTUgMS41MDAxNSAwIDAgMCAyMy45NzY1NjIgMjAuOTc4NTE2IHoiPjwvcGF0aD4KPC9zdmc+"/>`;
}

function generateCharacter() {
    let characters = get_active_character_list();
    const character_idx = getRandomInt(0, characters.length);
    const character = characters[character_idx];
    const gig_character = document.getElementById("gig_character");
    gig_character.innerHTML = character;
}

function get_active_genre_list() {
    let genres = [];
    for (let i = 0; i < genre_list.length; i++) {
        const genre_filter = document.getElementById(`genre${i}`);
        if (genre_filter.checked) {
            genres.push(genre_list[i].name);
        }
    }
    return genres;
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

/* Genre */

function getGenreDescriptionByGenreName(genreName) {
    for (let i = 0; i < genre_list.length; i++) {
        if (genre_list[i].name === genreName) {
            return genre_list[i].description;
        }
    }
    return "";
}

function build_genre_list() {
    let genre_list_html = "<legend>Genre Options</legend>";    
    genre_list_html += `
        <div id='genre_list_global_container'>
            <input type="checkbox" id="genre_list_global" name="genre_list_global" checked onchange="handle_genre_global_filter_change()">
            <label for="genre_list_global" id="genre_list_global_label">Randomly generate genre</label>
        </div>
    `;
    genre_list_html += `<div id="genre_list_container">`;
    for (let i = 0; i < genre_list.length; i++) {
        genre_list_html += get_genre_list_item_html(i);
    }
    genre_list_html += `</div>`;
    document.getElementById("gig_genre_list").innerHTML = genre_list_html;
}

function get_genre_list_item_html(index) {
    return `
        <div class="genre_item">
            <input type="checkbox" id="genre${index}" name="genre${index}" class="genre_filter" checked onchange="handle_genre_filter_change('genre${index}')">
            <label for="genre${index}" class="genre_label">${genre_list[index].name}</label>
            ${getHintImageHtml("Genre Description", genre_list[index].description)}
        </div>
    `;
}

function handle_genre_filter_change(filter_checkbox_id) {
    update_global_genre_filter_checkbox();
}

function update_global_genre_filter_checkbox() {
    const genre_list_global = document.getElementById("genre_list_global");
    let checked_count = get_genre_filter_checked_count();    
    const desired_genre_list_global_checked = checked_count != 0;
    const desired_genre_list_global_indeterminate = desired_genre_list_global_checked && checked_count != genre_list.length;
    if (desired_genre_list_global_checked != genre_list_global.checked) {
        genre_list_global.checked = desired_genre_list_global_checked;
    }    
    if (desired_genre_list_global_indeterminate != genre_list_global.indeterminate) {
        genre_list_global.indeterminate = desired_genre_list_global_indeterminate;
    }
    update_genre_display();
}

function get_genre_filter_checked_count() {
    const genre_count = genre_list.length;
    let checked_count = 0;
    for (let i = 0; i < genre_count; i++) {
        if (document.getElementById(`genre${i}`).checked) {
            checked_count++;
        }
    }
    return checked_count;
}

function handle_genre_global_filter_change() {
    const genre_list_global = document.getElementById("genre_list_global");
    const checked = genre_list_global.checked;
    const genre_count = genre_list.length;    
    for (let i = 0; i < genre_count; i++) {
        document.getElementById(`genre${i}`).checked = checked;
    }
    update_genre_display();
}

function update_genre_display() {
    const genre_list_global = document.getElementById("genre_list_global");
    const checked = genre_list_global.checked;
    const genre_display_style = checked ? "block" : "none";
    const gig_genre_label = document.getElementById("gig_genre_label");
    gig_genre_label.style.display = genre_display_style;
    const gig_genre = document.getElementById("gig_genre");
    gig_genre.style.display = genre_display_style;
}
build_genre_list();

/* Character */

function build_character_list() {
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

build_character_list();
