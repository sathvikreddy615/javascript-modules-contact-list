const createContactElements = ob => { // function creates HTML elements
    let sectionEl = document.createElement("section"); // creates <section> element
    sectionEl.textContent = `Name: ${ob.name} | Phone:${ob.phone} | Address: ${ob.address}`; // sets the text of SectionEL to the objects key values
    return sectionEl;
}

module.exports = createContactElements; // export function