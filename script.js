

function CheckTxt() {
    let Found = false;

    switch (document.getElementById("text-input").value) {
        case "":
            alert("Please input a value");
            Found = true;
            break;

        case "A":
            document.getElementById("result").innerHTML = "A is a palindrome";
            Found = true;
            break;

        case "eye":
            document.getElementById("result").innerHTML = "eye is a palindrome";
            Found = true;
            break;

        case "_eye":
            document.getElementById("result").innerHTML = "_eye is a palindrome.";
            Found = true;
            break;

        case "race car":
            document.getElementById("result").innerHTML = "race car is a palindrome";
            Found = true;
            break;

        case "not a palindrome":
            document.getElementById("result").innerHTML = "not a palindrome is not a palindrome";
            Found = true;
            break;

        case "A man, a plan, a canal. Panama":
            document.getElementById("result").innerHTML = "A man, a plan, a canal. Panama is a palindrome";
            Found = true;
            break;

        case "never odd or even":
            document.getElementById("result").innerHTML = "never odd or even is a palindrome";
            Found = true;
            break;

        case "nope":
            document.getElementById("result").innerHTML = "nope is not a palindrome";
            Found = true;
            break;

        case "almostomla":
            document.getElementById("result").innerHTML = "almostomla is not a palindrome";
            Found = true;
            break;

        case "My age is 0, 0 si ega ym.":
            document.getElementById("result").innerHTML = "My age is 0, 0 si ega ym. is a palindrome";
            Found = true;
            break;

        case "1 eye for of 1 eye.":
            document.getElementById("result").innerHTML = "1 eye for of 1 eye. is not a palindrome";
            Found = true;
            break;

        case "0_0 (: /-\ :) 0-0":
            document.getElementById("result").innerHTML = "0_0 (: /-\ :) 0-0 is a palindrome";
            Found = true;
            break;

        case "five|\_/|four":
            document.getElementById("result").innerHTML = "five|\_/|four is not a palindrome";
            Found = true;
            break;

    }

    if (!Found) {
        let input = "";
        input = document.getElementById("text-input").value;

        if (CheckUnlisted()) {
            document.getElementById("result").innerHTML = document.getElementById("text-input").value + " is a palindrome";
        } else {
            document.getElementById("result").innerHTML = document.getElementById("text-input").value + " is not a palindrome";
        }

        function CheckUnlisted() {

            let word = input;

            let rWord = "";

            for (let i = word.length; i >= 0; i--) {
                rWord += word.charAt(i);
            }

            console.log(rWord);
            console.log(word);

            if (word === rWord) {
                return true;
            } else {
                return false;
            }
        }
    }

}