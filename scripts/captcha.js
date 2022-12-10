var captcha_field = document.getElementById('captcha')
var captcha_btn = document.querySelector('.btn_captcha')


function generateCaptchaAlphabet(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

var secondCaptchaArray

function generateCaptchaNumeric() {
    let array =[];
    let first_num = Math.floor(Math.random() * (100) + 1);
    let second_num = Math.floor(Math.random() * (100) + 1);

    array.push(first_num, second_num, first_num + second_num)
    return array;
}

function isEmpty(obj) {
    return Object.getOwnPropertyNames(obj).length === 1;
}

captcha_btn.innerText = generateCaptchaAlphabet(5)

captcha_btn.addEventListener("click", () => {
    if (isEmpty(captcha_field.value)) {
        alert("Поле для ввода пустое, потворите попытку")
        return
    }

    if (isNaN(captcha_btn.innerText.replace(' + ', ''))) {
        if (captcha_field.value === captcha_btn.innerText) {
            alert("Введено верно. Добро пожаловать!")
        }
        else {
            secondCaptchaArray = generateCaptchaNumeric()
            captcha_btn.innerText = secondCaptchaArray[0] + " + " + secondCaptchaArray[1]
        }
    } else {
        if (isNaN(captcha_field.value)) {
            alert("Это не число")
        } else {
            if (Number(captcha_field.value) === secondCaptchaArray[2]) {
                alert("Введено верно. Добро пожаловать!")
            }
            else {
                secondCaptchaArray = generateCaptchaNumeric()
                captcha_btn.innerText = secondCaptchaArray[0] + " + " + secondCaptchaArray[1]
            }
        }
    }

})