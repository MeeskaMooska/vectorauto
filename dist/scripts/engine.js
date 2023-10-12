function toggleDisplayHeaderLinks() {
    var headerLinkContainer = document.getElementById('header-link-container');

    if (headerLinkContainer.style.display === 'none') {
        headerLinkContainer.style.display = 'block';
    } else {
        headerLinkContainer.style.display = 'none';
    }
}