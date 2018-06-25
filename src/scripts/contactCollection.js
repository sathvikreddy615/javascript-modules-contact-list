const Database = { // creates main database
    // local storage function that saves data
    saveDatabase: (databaseObject, localStorageKey) => {
        const stringifiedDatabase = JSON.stringify(databaseObject); // converts data to string

        localStorage.setItem(localStorageKey, stringifiedDatabase);
    },
    // local storage function that loads data
    loadDatabase: localStorageKey => {
        const databaseString = localStorage.getItem(localStorageKey);

        if (databaseString) { // if database has data
            return JSON.parse(databaseString); // convert date from string to normal
        } else { // if database does not have data
            return []; // return empty array
        }
    }
}

module.exports = Database; // exporting database including localStorage