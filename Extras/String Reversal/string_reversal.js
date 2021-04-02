// Method 1

function reverser(string){
    let flipped_string = []; 
    
    for(let i = string.length; i <= string.length; i--){  
        if(i < 0){
            break;
        }
        else{
            flipped_string.push(string[i]);
        };
    };
    return flipped_string.join("");
};

console.log(reverser("ABCDEFGHIJKLMNOPQRSTUVWXYZ")); // ZYXWVUTSRQPONMLKJIHGFEDCBA
console.log(reverser("Hey my name is John!")); // !nhoJ si eman ym yeH
console.log(reverser("I like coding :D")); // D: gnidoc ekil I

// Method 2

function reverser2(string){
    // Places the string into an array
    let split_str = string.split("");
    // Reverses the elements of the array
    let rev_str = split_str.reverse();
    // Combines all the elements of the reversed array into a string
    let final_str = rev_str.join(""); 

    return(final_str);
}

console.log(reverser2("Lets see how this works")); // skrow siht woh ees steL
console.log(reverser2("I like messing with strings, lol.")); // .lol ,sgnirts htiw gnissem ekil I
