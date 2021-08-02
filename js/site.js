//Get the string from the page
function getValue(){
    
    document.getElementById("alert").classList.add("invisible");
    
    let userString = document.getElementById("userString").value;
    
    let rev = reverseString(userString);
    
    displayString(rev);
}

//Reverse the string
function reverseString(userString){
    let revString = []; 

    //reverse a string using a for loop
    for (let index = userString.length-1; index >= 0; index--) {
        revString += userString[index];
    }

    return revString;
}

//Display the message with reverse string
function displayString(revString){
    //write to the page
    document.getElementById("message").innerHTML = `Your string reversed is: ${revString}`;
    
    //show the alert box
    document.getElementById("alert").classList.remove("invisible");

}