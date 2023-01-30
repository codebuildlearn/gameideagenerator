function generateGenres() {
    let genres = getActiveGenreList();
    const genreListGlobalCount = parseInt(document.getElementById("genre_list_global_count").value);
    let html = "";
    let count = 0;
    while (count < genreListGlobalCount) {
        const { genreHtml, remainingGenres } = generateGenre(genres);
        html += genreHtml;
        genres = remainingGenres;
        count++;
    }
    const gig_genre = document.getElementById("gig_genre");
    gig_genre.innerHTML = html;
}

function generateGenre(genres) {
    const genre_idx = getRandomInt(0, genres.length);
    const genreName = genres[genre_idx];
    const description = getGenreDescriptionByGenreName(genreName);
    genre_description_hint_html = getHintImageHtml("Genre Description", description);
    const genreHtml = `<label class="gig_genre_item">${genreName} ${genre_description_hint_html}</label>`;
    const remainingGenres = genres.filter(genre => genre !== genreName);
    return { genreHtml: genreHtml, remainingGenres: remainingGenres };
}

function getActiveGenreList() {
    let genres = [];
    for (let i = 0; i < genre_list.length; i++) {
        const genre_filter = document.getElementById(`genre${i}`);
        if (genre_filter.checked) {
            genres.push(genre_list[i].name);
        }
    }
    return genres;
}

function getGenreDescriptionByGenreName(genreName) {
    for (let i = 0; i < genre_list.length; i++) {
        if (genre_list[i].name === genreName) {
            return genre_list[i].description;
        }
    }
    return "";
}

function buildGenreList() {
    let genre_list_html = "<legend>Genre Options</legend>";    
    genre_list_html += `
        <div id='genre_list_global_container'>
            <input type="checkbox" id="genre_list_global" name="genre_list_global" checked onchange="handleGenreGlobalFilterChange()">
            <label for="genre_list_global" id="genre_list_global_label">Randomly generate genre</label>
            <label for="genre_list_global_count" id="genre_list_global_count_label">Count</label>
            <input type="number" id="genre_list_global_count" name="genre_list_global_count" min="1" max="3" value="1">
        </div>
    `;
    genre_list_html += `<div id="genre_list_container">`;
    for (let i = 0; i < genre_list.length; i++) {
        genre_list_html += getGenreListItemHtml(i);
    }
    genre_list_html += `</div>`;
    document.getElementById("gig_genre_list").innerHTML = genre_list_html;
}

function getGenreListItemHtml(index) {
    return `
        <div class="genre_item">
            ${getGenreCheckboxHtml(index)}
            ${getGenreCheckboxLabelHtml(index)}
            ${getHintImageHtml("Genre Description", genre_list[index].description)}
        </div>
    `;
}

function getGenreCheckboxHtml(index) {
    return `<input type="checkbox" id="genre${index}" name="genre${index}" class="genre_filter" checked onchange="handleGenreFilterChange('genre${index}')">`;
}

function getGenreCheckboxLabelHtml(index) {
    return `<label for="genre${index}" class="genre_label">${genre_list[index].name}</label>`;
}

function handleGenreFilterChange(filter_checkbox_id) {
    updateGlobalGenreFilterCheckbox();
}

function updateGlobalGenreFilterCheckbox() {
    const genre_list_global = document.getElementById("genre_list_global");
    let checked_count = getGenreFilterCheckedCount();    
    const desired_genre_list_global_checked = checked_count != 0;
    const desired_genre_list_global_indeterminate = desired_genre_list_global_checked && checked_count != genre_list.length;
    if (desired_genre_list_global_checked != genre_list_global.checked) {
        genre_list_global.checked = desired_genre_list_global_checked;
    }    
    if (desired_genre_list_global_indeterminate != genre_list_global.indeterminate) {
        genre_list_global.indeterminate = desired_genre_list_global_indeterminate;
    }
    updateGenreDisplay();
}

function getGenreFilterCheckedCount() {
    const genre_count = genre_list.length;
    let checked_count = 0;
    for (let i = 0; i < genre_count; i++) {
        if (document.getElementById(`genre${i}`).checked) {
            checked_count++;
        }
    }
    return checked_count;
}

function handleGenreGlobalFilterChange() {
    const genre_list_global = document.getElementById("genre_list_global");
    const checked = genre_list_global.checked;
    const genre_count = genre_list.length;    
    for (let i = 0; i < genre_count; i++) {
        document.getElementById(`genre${i}`).checked = checked;
    }
    updateGenreDisplay();
}

function updateGenreDisplay() {
    const genre_list_global = document.getElementById("genre_list_global");
    const checked = genre_list_global.checked;
    const genre_display_style = checked ? "block" : "none";
    const gig_genre_label = document.getElementById("gig_genre_label");
    gig_genre_label.style.display = genre_display_style;
    const gig_genre = document.getElementById("gig_genre");
    gig_genre.style.display = genre_display_style;
}