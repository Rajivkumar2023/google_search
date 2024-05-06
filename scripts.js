function search() {
    // Get the search query from the input field
    var searchQuery = document.getElementById("search-input").value;
    
    // Perform the search (for demonstration purposes, just adding a few example results)
    var newResults = [
        "'" + searchQuery + "'",
    ];

    // Add the new results to the search results list
    var searchResultsList = document.getElementById("search-results-list");
    newResults.forEach(function(resultText) {
        var listItem = document.createElement("li");
        var link = document.createElement("a");
        link.setAttribute("href", "#");
        link.textContent = resultText;
        listItem.appendChild(link);
        searchResultsList.appendChild(listItem);
    });
}
