
function validEmail(str) {
    // Regular expression to validate the email address
    const emailRegex = /^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]{2,6})+$/;
    // Test the string against the regex and return the result
    return emailRegex.test(str);
}

// Test cases
console.log(validEmail('abc@example.com')); // returns true
console.log(validEmail('xyz@abc.com.in')); // returns true
console.log(validEmail('john.doe@com.')); // returns false
console.log(validEmail('@example.com')); // returns false
console.log(validEmail('')); // returns false

/// Do not change the code below.
//const str = prompt("Enter an email address.");
//alert(validEmail(str));
