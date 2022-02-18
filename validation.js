// validation script here

const inputs = document.querySelectorAll('input');


const patterns = {
    telephone: /^\d{11}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/
};

// metacharacter \w - match any letter uppercase or lower case, any digit from 0 to 9 and underscores

// \w@- match any word character, any @ symbol or hypen.

// validation function
function validate(field, regex) {
    if (regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}

inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        //console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value])
    });
});