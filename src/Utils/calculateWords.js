export function calculateWords(text) {
    // no spaces in the end or the beginning of the string
    //turn into array
    const listOfWords = text.trim().split(" ");
    //filter empty values out, create new array and find its length
    return listOfWords.filter((word) => word !== "").length;
}