let Database = require("./contactCollection"); // import Database object
let printContacts = require("./contactList"); // import function that prints contacts to DOM

const appendForm = document.querySelector("#inputForm"); // Grabbing first article id from index.html for fragment to be appended to
const fragment = document.createDocumentFragment(); // Creating a fragment for DOM elements to be appended to

const elementCreator = Object.create({}, { // Creating an object

    inputCreator: { // Dynamically creates Input Fields
        value: (idVal, typeVal, nameVal) => {
            let newInput = document.createElement("input");

            newInput.setAttribute("class", "inputContact");
            newInput.id = idVal;
            newInput.type = typeVal;
            newInput.name = nameVal;
            newInput.placeholder = nameVal;
            fragment.appendChild(newInput);
            appendForm.appendChild(fragment);
        },
        writable: true,
        enumerable: false
    },
    btnCreator: { // Dynamically creates a Submit Button
        value: () => {
            let newButton = document.createElement("input");
            newButton.id = "submitBtn";
            newButton.type = "Submit";
            newButton.name = "Submit";
            fragment.appendChild(newButton);
            appendForm.appendChild(fragment);
        },
        writable: true,
        enumerable: false
    },
    idGenerator: { // Generates random ID# for each new Contact
        value: () => {
            let randNum = Math.floor(100000000 + Math.random() * 900000000);
            return randNum;
        },
        writable: true,
        enumerable: false
    }

});

const createInputName = elementCreator.inputCreator("inputName", "text", "Full Name"); // Create Input Field for Name
const createInputPhone = elementCreator.inputCreator("inputPhone", "number", "Phone Number"); // Create Input Field for Phone #
const createInputAddress = elementCreator.inputCreator("inputAddress", "text", "Address"); // Create Input Field for Address
const createSubmitBtn = elementCreator.btnCreator(); // Create Submit Button

const submitBtn = document.querySelector("#submitBtn"); // Getting Submit Button ID

printContacts(); // This function loops through database and prints contacts to DOM

let contactDatabase = Database.loadDatabase("ContactDB"); // Load/Reload data from database

submitBtn.addEventListener("click", () => { // Adding an Event listener to Submit Button

    const inputName = document.querySelector("#inputName"); // Getting Name ID
    const inputPhone = document.querySelector("#inputPhone"); // Getting Phone # ID
    const inputAddress = document.querySelector("#inputAddress"); // Getting Address ID

    const newContact = { // When user enters value into input fields, store the value in a object
        name: inputName.value, // Getting Name Value
        phone: inputPhone.value, // Getting Phone Value
        address: inputAddress.value, // Getting Address Value
        randomID: elementCreator.idGenerator() // Produce Random ID # for each new Customer
    }

    contactDatabase.push(newContact); // Push new contact into array in Database object
    Database.saveDatabase(contactDatabase, "ContactDB"); // Saves all new contacts into local storage.
    printContacts(); // calls function that will print contact data to DOM

    // Clears the input field for new data to be entered
    inputName.value = "";
    inputPhone.value = "";
    inputAddress.value = "";
});

module.exports = contactDatabase; // export contactDatabase variable