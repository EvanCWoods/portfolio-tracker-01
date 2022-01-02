let addPositionButton = document.getElementById("add-position-button");
let newPositionFormSection = document.getElementById("new-position-form-section");
let submitPositionButton = document.getElementById("submit-new-position-button");

let newPositionDetailsList = [];
let getPositionDetailsList = [];

// Function to handle the form for new position entries
let setPositionDetails = () => {
    submitPositionButton.addEventListener("click", (event) => {
        event.preventDefault();
       
        let positionTitle = document.getElementById("position-name");
        let positionUnits = document.getElementById("position-units");
        let unitValue = document.getElementById("unit-value");
        let totalValue = positionUnits.value * unitValue.value;
       
        let newPosition = ({
            title: positionTitle.value,
            units: Number(positionUnits.value),
            valuePerUnit: Number(unitValue.value),
            totalValue: totalValue
        });
        localStorage.setItem(`${positionTitle.value}`, JSON.stringify(newPosition));
        positionTitle.value = "";
        positionUnits.value = "";
        unitValue.value = "";
        console.log(newPositionDetailsList);
    });
}

// Function to handle the gettign of data from local storage
let getPositionDetails = () => {
    for (let i=0; i<localStorage.length; i++) {
        positionInfo = JSON.parse(localStorage.getItem(localStorage.key(i)));
        getPositionDetailsList.push(positionInfo);
    }
}


// Main function to execute all logic
let main = () => {
    // Event listener to show the form 
    addPositionButton.addEventListener("click", () => {
        newPositionFormSection.style.display = "block";
    });
    setPositionDetails();
    getPositionDetails();
}

main();