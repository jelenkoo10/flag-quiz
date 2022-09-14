let result = 0
let tempCountries = []
let numOfQuestions
let difficulty
let currentQuestion = 1
let questionAnswers = []
let flagSrc = []
let flag = document.getElementById("guessing-flag")
let answers = document.querySelectorAll(".answer")
let radios = document.getElementsByName('difficulty')
let questionsChoice = document.getElementById("num-questions")
let homepage = document.querySelector(".home")
let quizpage = document.querySelector(".quiz")
let resultpage = document.querySelector(".result")
let questionDisplay = document.getElementById("questions")
let resultDisplay = document.getElementById("correct")
let resultDisplayEnd = document.getElementById("result-display")

const easyCountries = ['Albania', 'Argentina', 'Australia', 'Austria', 'Azerbaijan', 'Belarus', 'Belgium', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Brazil', 'Bulgaria', 'Cameroon', 'Canada', 'Chile', 'China', 'Colombia', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Ecuador', 'Egypt', 'Faroe Islands', 'Finland', 'France', 'Georgia', 'Germany', 'Greece', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Iran', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan','Korea, North', 'Korea, South', 'Latvia', 'Lithuania', 'Luxembourg', 'Macedonia', 'Malta', 'Mexico', 'Monaco', 'Montenegro', 'Morocco', 'Netherlands', 'New Zealand', 'Nigeria', 'Norway', 'Pakistan', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Russia', 'Saudi Arabia', 'Senegal', 'Serbia', 'Slovakia', 'Slovenia', 'South Africa', 'Spain', 'Sweden', 'Switzerland', 'Tunisia', 'Turkey', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam']

const mediumCountries = ['Afghanistan', 'Albania', 'Algeria', 'Angola', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Benin', 'Bhutan', 'Bolivia', 'Brunei', 'Burkina Faso', 'Cameroon', 'Cape Verde', 'Central African Republic', 'Comoros', 'Congo, Democratic Republic of the', 'Congo, Republic of the', 'Cuba', 'Cyprus', 'Dominican Republic', 'Ecuador', 'El Salvador', 'Ethiopia', 'Faroe Islands', 'Fiji', 'Gabon', 'Ghana', 'Gibraltar', 'Guatemala', 'Haiti', 'Holy See (Vatican City)', 'Honduras', 'Indonesia', 'Iraq', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Laos', 'Lebanon', 'Liberia', 'Libya', 'Liechtenstein', 'Madagascar', 'Malaysia', 'Maldives', 'Mali', 'Mauritania', 'Mauritius', 'Moldova', 'Monaco', 'Mongolia', 'Namibia', 'Nepal', 'Nicaragua', 'Niger', 'Oman', 'Pakistan', 'Panama', 'Puerto Rico', 'Qatar', 'Romania', 'San Marino', 'Seychelles', 'Sierra Leone', 'Singapore', 'Somalia', 'South Africa', 'Sri Lanka', 'Sudan', 'Syria', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Trinidad and Tobago', 'Uganda', 'Vanuatu', 'Yemen', 'Zambia', 'Zimbabwe']

const hardCountries = ['Afghanistan', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua and Barbuda', 'Aruba', 'Bahamas, The', 'Belize', 'Bermuda', 'Bhutan', 'Botswana', 'Bouvet Island', 'British Virgin Islands', 'Burma', 'Burundi', 'Cambodia', 'Cayman Islands', 'Chad', 'Christmas Island', 'Cook Islands', 'Dhekelia', 'Djibouti', 'Dominica', 'Equatorial Guinea', 'Eritrea', 'Falkland Islands (Islas Malvinas)', 'Faroe Islands', 'French Polynesia', 'Gambia, The', 'Gibraltar', 'Greenland', 'Grenada', 'Guam', 'Guinea-Bissau', 'Guinea', 'Guyana', 'Isle of Man', 'Jersey', 'Kiribati', 'Kyrgyzstan', 'Lesotho', 'Macau', 'Malawi', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Micronesia, Federated States of', 'Montserrat', 'Mozambique', 'Namibia', 'Nauru', 'Netherlands Antilles', 'Niue', 'Norfolk Island', 'Palau', 'Papua New Guinea', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin', 'Saint Pierre and Miquelon', 'Saint Vincent and the Grenadines', 'Samoa', 'Sao Tome and Principe', 'Solomon Islands', 'Sri Lanka', 'Suriname', 'Svalbard', 'Swaziland', 'Taiwan', 'Tajikistan', 'Timor-Leste', 'Tokelau', 'Tonga', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uzbekistan', 'Virgin Islands']

function randomCountry(countryArray) {
    return countryArray[Math.floor(Math.random() * countryArray.length)]
}

function makeQuestion(difficulty) {
    let temp = 0
    let answersArray = []
    let correctAnswer
    let correctAnsPosition = Math.floor(Math.random() * 3)
    if (difficulty == "easy") {
        while (temp < 1) {
            correctAnswer = randomCountry(easyCountries)
            if (!tempCountries.includes(correctAnswer)) {
                for (let i = 0; i < 3; i++) {
                    if (correctAnsPosition == i) { 
                        answersArray.push(correctAnswer)
                    } else {
                        answersArray.push(randomCountry(easyCountries))
                    }
                }
                temp++
            }
        }
    } else if (difficulty == "medium") {
        while (temp < 1) {
            correctAnswer = randomCountry(mediumCountries)
            if (!tempCountries.includes(correctAnswer)) {
                for (let i = 0; i < 3; i++) {
                    if (correctAnsPosition == i) { 
                        answersArray.push(correctAnswer)
                    } else {
                        answersArray.push(randomCountry(mediumCountries))
                    }
                }
                temp++
            }
        }
    } else {
        while (temp < 1) {
            correctAnswer = randomCountry(hardCountries)
            if (!tempCountries.includes(correctAnswer)) {
                for (let i = 0; i < 3; i++) {
                    if (correctAnsPosition == i) { 
                        answersArray.push(correctAnswer)
                    } else {
                        answersArray.push(randomCountry(hardCountries))
                    }
                }
                temp++
            }
        }
    }
    tempCountries.push(correctAnswer)
    questionAnswers.push(answersArray)
    flagSrc.push(`./images/Flag of ${correctAnswer}.gif`)
}

function displayQuestion(number) {
    if (number != numOfQuestions.slice(0, 1) + '1') {
        questionDisplay.textContent = `${number} / ${numOfQuestions}`
        resultDisplay.textContent = `${result} correct answers`
        flag.src = flagSrc[number - 1]
        for (let i = 0; i < 3; i++) {
            answers[i].textContent = questionAnswers[number - 1][i]
        }
        currentQuestion++
    } else {
        result >= numOfQuestions / 2 ? 
        resultDisplayEnd.textContent = `Congratulations! Your score is ${result}.` : 
        resultDisplayEnd.textContent = `You can do better! Your score is ${result}.` 
        togglePages()
    }
}

function generateQuestions(numQuestions, difficulty) {
    for (let i = 0; i < numQuestions; i++) {
        makeQuestion(difficulty)
    }
}

function checkAnswer(number) {
    if (answers[number].textContent == tempCountries[currentQuestion - 2]) {
        result = result + 1
    }
    displayQuestion(currentQuestion)
}

function startQuiz() {
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            difficulty = radios[i].value
            numOfQuestions = questionsChoice.value
        }
    }
    togglePages()
    generateQuestions(numOfQuestions, difficulty)
    displayQuestion(currentQuestion)
}

function restartQuiz() {
    togglePages()
    result = 0
    tempCountries = []
    numOfQuestions = 0
    difficulty = ''
    currentQuestion = 1
    questionAnswers = []
    flagSrc = []
}

function togglePages() {
    if (homepage.classList.contains('displayed')) {
        homepage.classList.remove('displayed')
        homepage.classList.add('not-displayed')
        quizpage.classList.add('displayed')
        quizpage.classList.remove('not-displayed')
    } else if (quizpage.classList.contains('displayed') && currentQuestion - 1 == numOfQuestions) {
        quizpage.classList.remove('displayed')
        quizpage.classList.add('not-displayed')
        resultpage.classList.add('displayed')
        resultpage.classList.remove('not-displayed')
    } else {
        resultpage.classList.remove('displayed')
        resultpage.classList.add('not-displayed')
        quizpage.classList.remove('displayed')
        quizpage.classList.add('not-displayed')
        homepage.classList.add('displayed')
        homepage.classList.remove('not-displayed')
    }
}