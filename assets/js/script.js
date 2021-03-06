let totalValueElement = document.getElementById("total-value");
let addPositionButton = document.getElementById("add-position-button");
let newPositionFormSection = document.getElementById("new-position-form-section");
let submitPositionButton = document.getElementById("submit-new-position-button");
let positionsContainerSection = document.getElementById("positions-container-section");

let newPositionDetailsList = [];
let getPositionDetailsList = [];
let sumValue = 0;

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

let createPositionCard = () => {
    let positionContainer = document.createElement("div");
    positionContainer.classList.add("position-container");
    positionsContainerSection.appendChild(positionContainer);

    let positionTitleContainer = document.createElement("div");
    positionTitleContainer.classList.add("position-title-container");
    document.getElementById("position-container").appendChild(positionTitleContainer);
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
    totalValueElement.value = 0;
    // Event listener to show the form 
    addPositionButton.addEventListener("click", () => {
        newPositionFormSection.style.display = "block";
    });
    setPositionDetails();
    getPositionDetails();
    for (let i=0; i<getPositionDetailsList.length; i++) {
        sumValue += getPositionDetailsList[i].totalValue;
    }
    totalValueElement.textContent = "Total Value $" + sumValue;
}


createPositionCard();
main();