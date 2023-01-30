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
    generateGenres();
    generateCharacter();
    generateGameMechanics();
}

function getHintImageHtml(altText, titleText) {
    return `<img class="genre_hint" alt="${altText}" title="${titleText}" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzIiIGhlaWdodD0iMzIiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9ImZpbGw6I0ZGRkZGRjsiPgo8cGF0aCBkPSJNIDI0IDQgQyAxMi45NzIwNjYgNCA0IDEyLjk3MjA3NCA0IDI0IEMgNCAzNS4wMjc5MjYgMTIuOTcyMDY2IDQ0IDI0IDQ0IEMgMzUuMDI3OTM0IDQ0IDQ0IDM1LjAyNzkyNiA0NCAyNCBDIDQ0IDEyLjk3MjA3NCAzNS4wMjc5MzQgNCAyNCA0IHogTSAyNCA3IEMgMzMuNDA2NjE1IDcgNDEgMTQuNTkzMzkxIDQxIDI0IEMgNDEgMzMuNDA2NjA5IDMzLjQwNjYxNSA0MSAyNCA0MSBDIDE0LjU5MzM4NSA0MSA3IDMzLjQwNjYwOSA3IDI0IEMgNyAxNC41OTMzOTEgMTQuNTkzMzg1IDcgMjQgNyB6IE0gMjQgMTQgQSAyIDIgMCAwIDAgMjQgMTggQSAyIDIgMCAwIDAgMjQgMTQgeiBNIDIzLjk3NjU2MiAyMC45Nzg1MTYgQSAxLjUwMDE1IDEuNTAwMTUgMCAwIDAgMjIuNSAyMi41IEwgMjIuNSAzMy41IEEgMS41MDAxNSAxLjUwMDE1IDAgMSAwIDI1LjUgMzMuNSBMIDI1LjUgMjIuNSBBIDEuNTAwMTUgMS41MDAxNSAwIDAgMCAyMy45NzY1NjIgMjAuOTc4NTE2IHoiPjwvcGF0aD4KPC9zdmc+"/>`;
}

function buildPageLists() {
    buildGenreList();
    buildCharacterList();
    buildGameMechanicList();
}

buildPageLists();