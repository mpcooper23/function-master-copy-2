//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 I: object
 O: array of object values
 C: for-in loop
 E:
 */

function objectValues(object) {
    let output = [];

    for(let key in object){
        output.push(object[key])
    }

    return output;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 I: object
 O: string of object keys with a space in between
 C:
 E: use trim() on output to delete final space
 */

function keysToString(object) {
let output = '';
for(let key in object){
    output += key + " "
}
return output.trim(); //affix trim() to delete space after last element.
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 I: object
 O: object values 
 C:
 E:
 */

function valuesToString(object) {
    let output = '';
    for(let key in object){
      if (typeof object[key] === "string") { //remember to check for string keys first
      output += object[key] + " "
    }
}
    return output.trim(); 
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 I: collection, either array or object
 O: returns type of complex object
 C: use type of in conditional statement to determine type of collection returns
 E:
 */

function arrayOrObject(collection) {
    if (Array.isArray(collection)){
        return 'array'
    }else if (typeof collection === 'object'){//make sure to put object in quotes
        return 'object'
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 I: string
 O: cap first char
 C:
 E:
 */

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1)//concatenate string.slice(1) to capped 0 index
}                                                    //NOT string[0].toUpperCase().slice(1)

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 I: string
 O:  string with each word capped
 C: split sentence, use for loop to access each first char
 E:
 */

function capitalizeAllWords(string) {
    let split = string.split(" ");
    for(let i = 0; i < split.length; i++){
    split[i] = split[i][0].toUpperCase() + split[i].slice(1);
}
return split.join(" ")//remember to put space in quotes, to separate eachr rejoined word
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 I: object
 O: return a welcome message to object's name property
 C: use dot notation to access object.name
 E:
 */

function welcomeMessage(object) {
return `Welcome ${object.name}!`
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 I:object
 O: return string of object.name + object.species
 C: dot notation to access object values
 E:
 */

function profileInfo(object) {
return object.name + " is a " + object.species
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 I: object
 O: return object array of noises
 C:
 E:
 */

function maybeNoises(object) {
for(let key in object){
    if(object[key] === Array.isArray(noises)){
        return noises.split(" ")
    }else if (object[key] !== Array.isArray(noises)){
        return 'there are no noises'
    }
}
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 I: string of words and a single word
 O: return true if word is in string
 C:
 E:
 */

function hasWord(string, word) {
let split = string.split(" ") //remember to place a quote with a space in between 
for (let i = 0; i < split.length; i++){
    if(split[i] === word){
        return true;
    }  
}
return false //return false only after loop executes through all words, not just the first
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 I: name (string data) and an object
 O: return object with name added to friends array
 C:
 E:
 */

function addFriend (name, object) {
 if(Array.isArray(object.friends)){//don't need a for-in loop to access object[key]
        object.friends.push(name)    //just use dot notation to access friends array and push
    }
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 I: name (string data) and an object
 O: return true if name is in friends array of object, false if not
 C:
 E:
 */

function isFriend(name, object) {
if(Array.isArray(object.friends)){
    for(let i = 0; i < object.friends.length; i++){
        if(object.friends[i] === name){
            return true;
        }
    }   
}
return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 I:
 O:
 C:
 E:
 */

function nonFriends(name, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 I:
 O:
 C:
 E:
 */

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 I:
 O:
 C:
 E:
 */

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 I:
 O:
 C:
 E:
 */

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}