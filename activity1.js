function myAnswer(string) {
    if (string.includes("minahal") || string.includes("nasaktan") || string.includes("nagmahal") ||string.includes("Minahal") || string.includes("Nagmahal") || string.includes("Nasaktan")) {
        return "present";
    } else {
    return "absent";
    }
}
console.log(myAnswer("Minahal kita Elisa"));
console.log(myAnswer("Nasaktan kita Elisa"));
console.log (myAnswer("Nagmahal kaba Elisa"));
console.log (myAnswer("Nasaan ka Elisa"));