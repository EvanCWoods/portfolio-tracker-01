let addPositionButton = document.getElementById("add-position-button");
let newPositionFormSection = document.getElementById("new-position-form-section");
let submitPositionButton = document.getElementById("submit-new-position-button");


// Function to handle the form for new position entries
let getPositionDetails = () => {
    submitPositionButton.addEventListener("click", (event) => {
        event.preventDefault();

        newPositionFormSection.style.display = "none";  // Set the display of the form back to none on submit
    });
}


// Main function to execute all logic
let main = () => {
    // Event listener to show the form 
    addPositionButton.addEventListener("click", () => {
        newPositionFormSection.style.display = "block";
    });
    getPositionDetails();
}

main();