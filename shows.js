// Renders list of shows to #shows-list element.
function renderShows() {
    const favoriteShows = [
        {
            title: "Lupin",
            trailerId: "gCmuYqeeNpc"
        },
        {
            title: "Money Heist",
            trailerId: "To_kVMMu-Ls"
        },
        {
            title: "Designated Survivor",
            trailerId: "N_f1v0Nx5Sw"
        },
        {
            title: "Defending Jacob",
            trailerId: "XQfeoRLvfqU"
        }
    ];

    // Clear the list
    const showsList = document.getElementById("shows-list");
    showsList.textContent = "";

    for (const show of favoriteShows) {
        // Create container for a show
        const showContainer = document.createElement("div");
        showContainer.className = "show-container";

        // Add title
        const showTitle = document.createElement("h2");
        showTitle.className = "show-title";
        showTitle.textContent = show.title;
        showContainer.appendChild(showTitle);

        // Add trailer button
        showContainer.appendChild(createWatchTrailerButton(show.trailerId));

        // Add to show list
        showsList.appendChild(showContainer);
    }
}

// Creates a button to watch a trailer
function createWatchTrailerButton(trailerId) {
    // Set up button for opening modal
    const trailerButton = document.createElement("button");
    trailerButton.className = "btn btn-primary";
    trailerButton.setAttribute("data-toggle", "modal");
    trailerButton.setAttribute("data-target", "#trailer-modal");

    // Create and add icon
    const icon = document.createElement("i");
    icon.className = "fas fa-play";
    trailerButton.appendChild(icon);

    // Add rest of text
    trailerButton.appendChild(document.createTextNode(" Watch trailer"));

    // Set URL of iframe on click event
    trailerButton.addEventListener("click", function onTrailerButtonClick() {
        const trailerIFrame = getTrailerIFrame();
        trailerIFrame.setAttribute("src", `https://www.youtube.com/embed/${trailerId}`);
    });

    return trailerButton;
}

// Returns the iframe for the trailer
function getTrailerIFrame() {
    return document.getElementById("trailer-iframe");
}

function main() {
    renderShows();
    $("#trailer-modal").on("hide.bs.modal", function onModalHide(e) {
        getTrailerIFrame().setAttribute("src", "");
    });
}

document.addEventListener("DOMContentLoaded", main);
