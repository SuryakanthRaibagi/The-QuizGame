// let a=fetch("http://gpweather.herokuapp.com/wether/Ny")
// p.then((value1)=>{
//     return value1
// }).then((value2)=>{
//     return value2.json
// })
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice_text"));
const scoreDisplay = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = "true";
let score = 0;
let questionCounter = 0;
let avaliableQuestions = [];

const questions = [
    {
        question: "What is the output of 2 + '2' in JavaScript?",
        choice1: "4",
        choice2: "22",
        choice3: "NaN",
        choice4: "TypeError",
        answer: 2
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        choice1: "var",
        choice2: "let",
        choice3: "const",
        choice4: "variable",
        answer: 1
    },
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        choice1: "Refers to the current function",
        choice2: "Refers to the global object",
        choice3: "Refers to the object on which a method is invoked",
        choice4: "Refers to the prototype object",
        answer: 3
    },
    {
        question: "How do you check the type of a variable in JavaScript?",
        choice1: "typeof",
        choice2: "type",
        choice3: "instanceof",
        choice4: "typeOf",
        answer: 1
    },
    {
        question: "What is the purpose of the 'event' object in JavaScript?",
        choice1: "Represents the current date and time",
        choice2: "Represents the current document",
        choice3: "Represents information about the event triggered",
        choice4: "Represents the current window",
        answer: 3
    },
    {
        question: "Which method is used to add an element to the end of an array in JavaScript?",
        choice1: "append",
        choice2: "push",
        choice3: "addToEnd",
        choice4: "addElement",
        answer: 2
    },
    {
        question: "What does the 'NaN' in JavaScript stand for?",
        choice1: "Not a Number",
        choice2: "Null and None",
        choice3: "Negative Number",
        choice4: "No Assignment",
        answer: 1
    },
    {
        question: "What is the purpose of the 'async' keyword in JavaScript?",
        choice1: "Defines a function that returns a promise",
        choice2: "Declares an asynchronous function",
        choice3: "Specifies an asynchronous callback",
        choice4: "Marks a function as deprecated",
        answer: 2
    },
    {
        question: "How do you create a new object in JavaScript?",
        choice1: "new Object()",
        choice2: "{}",
        choice3: "Object.create()",
        choice4: "All of the above",
        answer: 4
    },
    {
        question: "What is the purpose of the 'map' function in JavaScript?",
        choice1: "To create a new array with the results of a provided function on every element",
        choice2: "To filter elements based on a given condition",
        choice3: "To reduce the array to a single value",
        choice4: "To sort the elements of an array",
        answer: 1
    }


]
const cLanguageQuestions = [
    {
        question: "Which statement is used to terminate the loop in C?",
        choice1: "end",
        choice2: "finish",
        choice3: "break",
        choice4: "terminate",
        answer: 3
    },
    {
        question: "What is the size of 'int' in C?",
        choice1: "4 bytes",
        choice2: "2 bytes",
        choice3: "Depends on the compiler",
        choice4: "8 bytes",
        answer: 3
    },
    {
        question: "Which function is used to allocate memory in C?",
        choice1: "alloc()",
        choice2: "malloc()",
        choice3: "allocate()",
        choice4: "memalloc()",
        answer: 2
    },
    {
        question: "In C, what is the operator used to access the value at the address of a variable?",
        choice1: "&",
        choice2: "*",
        choice3: "^",
        choice4: "->",
        answer: 2
    },
    {
        question: "Which header file is needed to use functions like malloc() and calloc()?",
        choice1: "<stdlib.h>",
        choice2: "<stdio.h>",
        choice3: "<memory.h>",
        choice4: "<alloc.h>",
        answer: 1
    },
    {
        question: "What is the correct way to declare a pointer in C?",
        choice1: "int ptr;",
        choice2: "int *ptr;",
        choice3: "pointer int;",
        choice4: "pointer *int;",
        answer: 2
    },
    {
        question: "Which function is used to read a single character from the console in C?",
        choice1: "getchar()",
        choice2: "readchar()",
        choice3: "scanf()",
        choice4: "read()",
        answer: 1
    },
    {
        question: "What is the output of the code 'printf('%d', sizeof(int));' in C?",
        choice1: "Depends on the compiler",
        choice2: "4",
        choice3: "2",
        choice4: "8",
        answer: 1
    },
    {
        question: "Which loop in C executes at least once?",
        choice1: "for loop",
        choice2: "while loop",
        choice3: "do-while loop",
        choice4: "if loop",
        answer: 3
    },
    {
        question: "What does the 'sizeof' operator return in C?",
        choice1: "Size of the variable",
        choice2: "Size of the data type",
        choice3: "Memory address",
        choice4: "Value of the variable",
        answer: 2
    }
];
const cppQuestions = [
    {
        question: "What is the correct way to create a pointer to an integer in C++?",
        choice1: "int *ptr;",
        choice2: "int ptr;",
        choice3: "pointer(int) ptr;",
        choice4: "intptr ptr;",
        answer: 1
    },
    {
        question: "Which keyword is used to inherit a class in C++?",
        choice1: "inherits",
        choice2: "extends",
        choice3: "inherits class",
        choice4: "using",
        answer: 4
    },
    {
        question: "What is the function of 'new' operator in C++?",
        choice1: "Allocate memory",
        choice2: "Delete memory",
        choice3: "Free memory",
        choice4: "Deallocate memory",
        answer: 1
    },
    {
        question: "Which type of inheritance allows a class to inherit from multiple base classes in C++?",
        choice1: "Multilevel inheritance",
        choice2: "Hierarchical inheritance",
        choice3: "Multiple inheritance",
        choice4: "Single inheritance",
        answer: 3
    },
    {
        question: "What is the output of 'cout << (5 > 3 ? 10 : 20);' in C++?",
        choice1: "10",
        choice2: "20",
        choice3: "5",
        choice4: "3",
        answer: 1
    },
    {
        question: "Which header file is needed to use 'cout' and 'cin' in C++?",
        choice1: "<stdio.h>",
        choice2: "<iostream>",
        choice3: "<iomanip>",
        choice4: "<fstream>",
        answer: 2
    },
    {
        question: "What is the purpose of 'virtual' keyword in C++?",
        choice1: "To create a static member",
        choice2: "To make a member function virtual",
        choice3: "To declare a constant",
        choice4: "To create a friend function",
        answer: 2
    },
    {
        question: "Which operator is used to access the member functions and variables of a class in C++?",
        choice1: ".",
        choice2: "->",
        choice3: "*",
        choice4: "::",
        answer: 1
    },
    {
        question: "What is the default access specifier for members of a class in C++?",
        choice1: "Public",
        choice2: "Private",
        choice3: "Protected",
        choice4: "Friend",
        answer: 2
    },
    {
        question: "What is the concept of polymorphism in C++?",
        choice1: "Ability to inherit from multiple classes",
        choice2: "Ability to write multiple functions with the same name",
        choice3: "Ability to create multiple objects",
        choice4: "Ability to perform different tasks with the same function name",
        answer: 4
    }
];
const pythonQuestions = [
    {
        question: "What symbol is used for single-line comments in Python?",
        choice1: "//",
        choice2: "#",
        choice3: "--",
        choice4: "/**/",
        answer: 2
    },
    {
        question: "Which of the following data types is immutable in Python?",
        choice1: "List",
        choice2: "Dictionary",
        choice3: "Tuple",
        choice4: "Set",
        answer: 3
    },
    {
        question: "How do you start an empty Python dictionary?",
        choice1: "{}",
        choice2: "[]",
        choice3: "dict()",
        choice4: "None",
        answer: 1
    },
    {
        question: "Which statement is used to exit a loop in Python?",
        choice1: "stop",
        choice2: "exit",
        choice3: "break",
        choice4: "end",
        answer: 3
    },
    {
        question: "What is the correct way to declare a function in Python?",
        choice1: "def myFunction():",
        choice2: "function myFunction():",
        choice3: "define myFunction():",
        choice4: "func myFunction():",
        answer: 1
    },
    {
        question: "Which keyword is used for function documentation in Python?",
        choice1: "doc",
        choice2: "comment",
        choice3: "help",
        choice4: "docstring",
        answer: 4
    },
    {
        question: "What does the 'len()' function do in Python?",
        choice1: "Returns the number of characters in a string",
        choice2: "Returns the length of a list",
        choice3: "Returns the size of a file",
        choice4: "Returns the square root of a number",
        answer: 2
    },
    {
        question: "In Python, what does the 'import' keyword do?",
        choice1: "Exports a module",
        choice2: "Imports a module or package",
        choice3: "Defines a new class",
        choice4: "Creates a new function",
        answer: 2
    },
    {
        question: "What is the output of 'print('Hello' + 'World')' in Python?",
        choice1: "Hello World",
        choice2: "HelloWorld",
        choice3: "Hello + World",
        choice4: "Error",
        answer: 1
    },
    {
        question: "Which statement is used to handle exceptions in Python?",
        choice1: "try",
        choice2: "catch",
        choice3: "except",
        choice4: "throw",
        answer: 3
    }
];
const sqlQuestions = [
    {
        question: "What does SQL stand for?",
        choice1: "Structured Query Language",
        choice2: "Simple Query Language",
        choice3: "Sequential Query Language",
        choice4: "Standard Query Language",
        answer: 1
    },
    {
        question: "Which SQL keyword is used to retrieve data from a database?",
        choice1: "FETCH",
        choice2: "SELECT",
        choice3: "RETRIEVE",
        choice4: "GET",
        answer: 2
    },
    {
        question: "What is the purpose of the 'WHERE' clause in SQL?",
        choice1: "To sort the result set",
        choice2: "To filter rows based on a condition",
        choice3: "To perform mathematical operations",
        choice4: "To join tables",
        answer: 2
    },
    {
        question: "Which SQL command is used to modify data in a database?",
        choice1: "ALTER",
        choice2: "UPDATE",
        choice3: "MODIFY",
        choice4: "CHANGE",
        answer: 2
    },
    {
        question: "What does the SQL command 'COUNT()' do?",
        choice1: "Calculates the total number of rows in a table",
        choice2: "Counts the number of columns in a table",
        choice3: "Counts the number of NULL values in a table",
        choice4: "Calculates the average value in a table",
        answer: 1
    },
    {
        question: "Which SQL clause is used to sort the result set?",
        choice1: "SORT BY",
        choice2: "ARRANGE BY",
        choice3: "ORDER BY",
        choice4: "GROUP BY",
        answer: 3
    },
    {
        question: "What is the purpose of the SQL 'GROUP BY' clause?",
        choice1: "To filter rows in a table",
        choice2: "To sort rows in a table",
        choice3: "To group rows that have the same values",
        choice4: "To perform calculations on data",
        answer: 3
    },
    {
        question: "Which SQL command is used to delete data from a database?",
        choice1: "REMOVE",
        choice2: "DELETE",
        choice3: "ERASE",
        choice4: "DROP",
        answer: 2
    },
    {
        question: "In SQL, what is the purpose of the 'JOIN' clause?",
        choice1: "To concatenate strings",
        choice2: "To combine rows from different tables",
        choice3: "To create temporary tables",
        choice4: "To perform arithmetic operations",
        answer: 2
    },
    {
        question: "What does the SQL command 'AVG()' do?",
        choice1: "Returns the total sum of a column",
        choice2: "Counts the number of NULL values in a column",
        choice3: "Calculates the average value of a column",
        choice4: "Returns the highest value in a column",
        answer: 3
    }
];



function htmlRunner(data) {
   if(data==="C") startGame(cLanguageQuestions);
   if(data==="Cpp") startGame(cppQuestions);
   if(data==="py") startGame(pythonQuestions);
   if(data==="js")startGame(questions);
   if(data==="sql")startGame(sqlQuestions);
}

//constants
const CORRECT_BONUS = 10;
const MAX_QUESTION = 10;


startGame = (language) => {
    questionCounter = 0;
    avaliableQuestions = [...language];
    console.log(avaliableQuestions);
    getNewQuestion();
};
getNewQuestion = () => {
    if (avaliableQuestions.length === 0 || questionCounter >= MAX_QUESTION) {
        // return window.location.assign("/quit.html");
        setTimeout(() => {
            document.body.innerHTML = `
            <body>
        <header>
            <h3>📝🖋QuizGame</h3>
            <nav class="navegate">
                <a href="dailyquiz_page.html">Restart</a>
            </nav>
          </header> 
          <div class="bgimage">
            <h1>Thanks...! You,Try again</h1>
            <h1>Your Score is ${score}</h1>
        </div>
        <footer>
            <footer>
                <p>&copy; 2023 QuizGame. All rights reserved.</p>
              </footer>
        </footer>
    </body>
            `
        }, 4000);
        return;
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * avaliableQuestions.length);
    currentQuestion = avaliableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion["choice" + number];
    });

    avaliableQuestions.splice(questionIndex, 1);
    console.log(avaliableQuestions);
    acceptingAnswers = true;

};
updateScoreDisplay = () => {
    scoreDisplay.innerText = `${score}/100`;
};
choices.forEach(choice => {
    choice.addEventListener("click", (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedchoice = e.target;
        const selectedAnswer = selectedchoice.dataset["number"];

        const isCorrect = selectedAnswer == currentQuestion.answer;
        if (isCorrect) {
            score += CORRECT_BONUS
            updateScoreDisplay();
        }
        console.log(selectedAnswer);

            getNewQuestion();

    });
});