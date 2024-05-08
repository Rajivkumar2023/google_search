function search() { 
    var searchQuery = document.getElementById("search-input").value;
    var newResults = [
        `${searchQuery}`,
    ];
    var searchResultsList = document.getElementById("search-results-list");
    newResults.forEach(resultText => {
        searchResultsList.innerHTML += `<li><a href="#">${resultText}</a></li>`;
    });
}
