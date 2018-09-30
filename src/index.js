module.exports = function check(str, bracketsConfig) {
    // your solution
    var stack = [];
    var isOpeningBrackets = false;
    var counter = 0;
    var variable = 0;
    var isClosed = true;

    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < bracketsConfig.length; j++) {
            if (stack[0] === undefined && str[i] === bracketsConfig[j][1] && bracketsConfig[j][0] !== bracketsConfig[j][1]) {
                return false;
            }
            if (str[i] === bracketsConfig[j][0] && bracketsConfig[j][0] !== bracketsConfig[j][1]) {
                isOpeningBrackets = true;
            } else if (str[i] === bracketsConfig[j][0] && bracketsConfig[j][0] === bracketsConfig[j][1]) {
                if (counter > 0 && variable === str[i]) {
                    counter--;
                } else if (counter === 0) {
                    counter++;
                    variable = str[i];
                    isOpeningBrackets = true;
                }
            }
        }
        if(isOpeningBrackets === true) {
            stack.push(str[i]);
            isOpeningBrackets = false;
        } else {
            for (var j = 0; j < bracketsConfig.length; j++) {

                if (str[i] === bracketsConfig[j][1] && stack[stack.length - 1] === bracketsConfig[j][0] &&
                    (str[i] !== variable && str[str.length] !== variable || str[i] === variable)) {
                    stack.pop();
                }
            }
        }
    }
    return stack.length === 0;
};

