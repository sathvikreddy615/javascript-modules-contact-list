let Database = require("./contactCollection"); // import Database object
let createContactElements = require("./contact"); // import function that dyanamically creates HTML elements

const contactArticle = document.querySelector("#contactInfo"); // HTML article for fragment to be appended
const fragment = document.createDocumentFragment(); // Fragment for DOM elements to be appended

const printContacts = () => {
    let contactDatabase = Database.loadDatabase("ContactDB"); // Load/Reload data from database
    // Keeps data from duplicating
    while (contactArticle.firstChild) {
        contactArticle.removeChild(contactArticle.firstChild)
    }

    contactDatabase.forEach(element => { // Loops through array in database
        let printContact = createContactElements(element); // Stores element creator function in a variable. passes the loop iterator as an argument to function
        fragment.appendChild(printContact); // Append variable containing function to fragment
    });
    contactArticle.appendChild(fragment); // Append fragment to contactArticle variable, which ultimately prints data to DOM
}

module.exports = printContacts; // Export function