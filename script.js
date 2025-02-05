const questions = [
    {
        question: "Which of the following sampling techniques involves selecting every nth person from a list?",
        image: "", // Image for the question
        options: [
            { text: "Convenience sampling", image: "" },
            { text: "Simple random sampling", image: "" },
            { text: "Systematic sampling", image: "" },
            { text: "Stratified sampling", image: "" }
        ],
        answer: 2 // Index of the correct option
    },
    {
        question: "Which of the following is the primary difference between random sampling and stratified sampling?",
        image: "",
        options: [
            { text: "Random sampling involves selecting participants based on their availability, while stratified sampling divides the population into groups before selecting participants.", image: "" },
            { text: "Random sampling gives every individual in the population an equal chance of being selected, while stratified sampling selects participants from different subgroups based on certain characteristics.", image: "" },
            { text: "Random sampling is used for quantitative data, while stratified sampling is used for qualitative data.", image: "" },
            { text: "Random sampling is used for small populations, while stratified sampling is used for large populations.", image: "" }
        ],
        answer: 1
    },
    {
        question: "What is the purpose of a frequency distribution table?",
        image: "",
        options: [
            { text: "To organize data and show how often each value occurs.", image: "" },
            { text: "To calculate the mean of the data.", image: "" },
            { text: "To find the range of the data.", image: "" },
            { text: "To list all data values in ascending order.", image: "" }
        ],
        answer: 0
    },
    {
        question: "In a frequency distribution table, which of the following gives the number of scores that are included in a given class interval?",
        image: "",
        options: [
            { text: "Class frequency", image: "" },
            { text: "Class width", image: "" },
            { text: "Lower limit", image: "" },
            { text: "Upper limit", image: "" }
        ],
        answer: 0
    },
    {
        question: "The table above shows the number of books read by students in a class during the month of January. How many students are in the class in total?",
        image: "images/5.png",
        options: [
            { text: "15", image: "" },
            { text: "18", image: "" },
            { text: "20", image: "" },
            { text: "22", image: "" }
        ],
        answer: 3
    },
    {
        question: "The  frequency distribution table above shows the number of hours spent studying by students in a week. Based on the table, how many students studied for more than 6 hours in the week?",
        image: "images/6.png",
        options: [
            { text: "6", image: "" },
            { text: "8", image: "" },
            { text: "10", image: "" },
            { text: "16", image: "" }
        ],
        answer: 2
    },
    {
        question: "The following scores were obtained from a class of 10 students: 85, 90, 85, 78, 92, 78, 85, 90, 92, 78. Which of the following is the correct frequency distribution table for these scores?",
        image: "images/7.png",
        options: [
            { text: "", image: "images/7a.png" },
            { text: "", image: "images/7b.png" },
            { text: "", image: "images/7c.png" },
            { text: "", image: "images/7d.png" }
        ],
        answer: 0
    },
    {
        question: "Which of the following graphs is best used to show the percentage distribution of data?",
        image: "",
        options: [
            { text: "Line graph", image: "" },
            { text: "Pie graph", image: "" },
            { text: "Bar graph", image: "" },
            { text: "Stem-and-leaf plot", image: "" }
        ],
        answer: 1
    },
    {
        question: "What does the height of a bar represent in a bar graph?",
        image: "",
        options: [
            { text: "The frequency of the data", image: "" },
            { text: "The mean of the data", image: "" },
            { text: "The total number of data points", image: "" },
            { text: "The category of data", image: "" }
        ],
        answer: 0
    },
    {
        question: "You are given the following data of monthly sales for a store: January: 120 units, February: 150 units, March: 170 units. Which type of graph would be most appropriate to display the trend of sales over time?",
        image: "",
        options: [
            { text: "Pie graph", image: "" },
            { text: "Line graph", image: "" },
            { text: "Bar graph", image: "" },
            { text: "Stem-and-leaf plot", image: "" }
        ],
        answer: 1
    },
    {
        question: "A stem-and-leaf plot shows the following data for the test scores of 10 students:\n50 | 2, 6, 9\n60 | 1, 4, 8\n70 | 3, 5\nWhat is the median score?",
        image: "",
        options: [
            { text: "60", image: "" },
            { text: "61", image: "" },
            { text: "62", image: "" },
            { text: "65", image: "" }
        ],
        answer: 2
    },
    {
        question: "You are comparing two different types of data using graphs. A pie graph is used to show the composition of a whole, while a line graph shows changes over time. Which of the following statements best evaluates these graph choices?",
        image: "",
        options: [
            { text: "A pie graph should be used for continuous data, while a line graph should be used for categorical data.", image: "" },
            { text: "A pie graph is best for showing changes over time, while a line graph is used for comparing parts of a whole.", image: "" },
            { text: "A pie graph is appropriate for showing the composition of a whole, while a line graph is suitable for tracking changes over time.", image: "" },
            { text: "Both pie and line graphs can show the same types of data effectively.", image: "" }
        ],
        answer: 2
    },
    {
        question: "Which of the following statistical graphs is most suitable for comparing the frequency of different categories, such as the number of students in different grade levels?",
        image: "",
        options: [
            { text: "Line graph", image: "" },
            { text: "Pie graph", image: "" },
            { text: "Bar graph", image: "" },
            { text: "Histogram", image: "" }
        ],
        answer: 2
    },
    {
        question: "Based on the pie chart showing the distribution of a class’s favorite subjects (Math, Science, English, History), if 25% of the class chose Science, what fraction of the class preferred Science?",
        image: "",
        options: [
            { text: "1/5", image: "" },
            { text: "1/4", image: "" },
            { text: "1/3", image: "" },
            { text: "1/2", image: "" }
        ],
        answer: 1
    },
    {
        question: "The line graph above shows the number of visitors to a park over five months. Based on the data shown in the line graph, which of the following statements is true?",
        image: "images/15.png",
        options: [
            { text: "The number of visitors steadily increased each month.", image: "" },
            { text: "The highest number of visitors was recorded in March.", image: "" },
            { text: "The number of visitors decreased after April.", image: "" },
            { text: "There was a 50-visitor increase between February and March, and a 100-visitor increase between March and April.", image: "" }
        ],
        answer: 2
    },
    {
        question: "Which of the following correctly represents the set of integers?",
        image: "",
        options: [
            { text: "{-3, -2, -1,1, 2, 3}", image: "" },
            { text: "{1, 2, 3, 4, 5}", image: "" },
            { text: "{-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5}", image: "" },
            { text: "{-3.5, -2.5, -1.5, 0, 1.5, 2.5, 3.5}", image: "" }
        ],
        answer: 2
    },
    {
        question: "Which of the following is true about the set of integers?",
        image: "",
        options: [
            { text: "Integers include all positive numbers and all fractions.", image: "" },
            { text: "Integers include all positive whole numbers, zero, and all negative whole numbers.", image: "" },
            { text: "Integers are only whole numbers greater than zero.", image: "" },
            { text: "Integers include only whole numbers greater than zero and their opposites.", image: "" }
        ],
        answer: 1
    },
    {
        question: "In a mountain climbing scenario, if you are 100 meters above sea level, which number represents your position?",
        image: "",
        options: [
            { text: "-100", image: "" },
            { text: "0", image: "" },
            { text: "100", image: "" },
            { text: "200", image: "" }
        ],
        answer: 2
    },
    {
        question: "A car travels 50 km north, then 30 km south. What is its final position relative to the starting point?",
        image: "",
        options: [
            { text: "80 km south", image: "" },
            { text: "50 km north", image: "" },
            { text: "30 km north", image: "" },
            { text: "20 km north", image: "" }
        ],
        answer: 3
    },
    {
        question: "A hiker climbs 200 meters up a hill, then descends 150 meters. What is the total change in elevation for the hiker?",
        image: "",
        options: [
            { text: "350 meters", image: "" },
            { text: "200 meters", image: "" },
            { text: "50 meters down", image: "" },
            { text: "50 meters up", image: "" }
        ],
        answer: 3
    },
    {
        question: "If you are located at +3 on a number line, and you move 5 units to the left, where will you be?",
        image: "",
        options: [
            { text: "+2", image: "" },
            { text: "−2", image: "" },
            { text: "-5", image: "" },
            { text: "+5", image: "" }
        ],
        answer: 1
    },
    {
        question: "Which of the following is true about locating integers on a number line?",
        image: "",
        options: [
            { text: "Positive integers are always placed to the left of zero.", image: "" },
            { text: "Negative integers are always placed to the right of zero.", image: "" },
            { text: "Zero is placed at the center of the number line.", image: "" },
            { text: "The farther an integer is from zero, the smaller its absolute value.", image: "" }
        ],
        answer: 2
    },
    {
        question: "Which of the following is the correct order of the integers from least to greatest?",
        image: "",
        options: [
            { text: "-5, -2, 0, 3, 7", image: "" },
            { text: "-4, -5, -2, 0, 3", image: "" },
            { text: "-2, 0, -5, 3, 7", image: "" },
            { text: "0, -2, -5, 3, 7", image: "" }
        ],
        answer: 0
    },
    {
        question: "Which of the following comparisons is true?",
        image: "",
        options: [
            { text: "-8 > -4", image: "" },
            { text: "3 < 7", image: "" },
            { text: "-5 < -8", image: "" },
            { text: "0 < -2", image: "" }
        ],
        answer: 1
    },
    {
        question: "The following are the depths (in meters) of four submarines below sea level: Submarine X: -120 meters, Submarine Y: -90 meters, Submarine Z: -150 meters, Submarine W: -100 meters. Which of the following correctly arranges the submarines from the shallowest to the deepest?",
        image: "",
        options: [
            { text: "Submarine Y, Submarine W, Submarine X, Submarine Z", image: "" },
            { text: "Submarine Z, Submarine X, Submarine W, Submarine Y", image: "" },
            { text: "Submarine W, Submarine Y, Submarine X, Submarine Z", image: "" },
            { text: "Submarine Y, Submarine Z, Submarine W, Submarine X", image: "" }
        ],
        answer: 0
    },
    {
        question: "Which of the following is the result when you add -4 and 6 using a number line?",
        image: "",
        options: [
            { text: "-10", image: "" },
            { text: "-2", image: "" },
            { text: "2", image: "" },
            { text: "10", image: "" }
        ],
        answer: 2
    },
    {
        question: "If you are using counters and have 3 red counters (-3) and 5 yellow counters (+5), what is the total?",
        image: "",
        options: [
            { text: "8", image: "" },
            { text: "3", image: "" },
            { text: "2", image: "" },
            { text: "-8", image: "" }
        ],
        answer: 2
    },
    {
        question: "Which of the following bar models correctly represents the sum of -6 and +8?",
        image: "",
        options: [
            { text: "A bar of 8 red blocks and 6 green blocks.", image: "" },
            { text: "A bar of 6 yellow blocks and 8 red blocks.", image: "" },
            { text: "A bar of 8 green blocks and 6 red blocks.", image: "" },
            { text: "A bar of 8 yellow blocks and 6 green blocks.", image: "" }
        ],
        answer: 2
    },
    {
        question: "Which of the following integer operations is correctly solved using a concrete model?",
        image: "",
        options: [
            { text: "-5 + (-4) = -9", image: "" },
            { text: "5 - (-2) = 3", image: "" },
            { text: "-3 - (-7) = -4", image: "" },
            { text: "2 + (-3) = 5", image: "" }
        ],
        answer: 0
    },
    {
        question: "Create a pictorial model to represent the addition of -4 and +7. Which of the following diagrams is correct?",
        image: "",
        options: [
            { text: "A line with 4 red blocks and 7 green blocks.", image: "" },
            { text: "A line with 7 red blocks and 4 green blocks.", image: "" },
            { text: "A number line with -4 on the left and +7 on the right, crossing at 3.", image: "" },
            { text: "A bar with 7 red blocks and 4 yellow blocks.", image: "" }
        ],
        answer: 2
    }, 
    {
        question: "What is the product of −4×6?",
        image: "",
        options: [
            { text: "-24", image: "" },
            { text: "24", image: "" },
            { text: "10", image: "" },
            { text: "-10", image: "" }
        ],
        answer: 0
    },
    {
        question: "Which of the following rules is true when multiplying two integers with different signs?",
        image: "",
        options: [
            { text: "The product is always positive.", image: "" },
            { text: "The product is always negative.", image: "" },
            { text: "The product depends on the absolute values of the integers.", image: "" },
            { text: "The product is zero if any number is zero.", image: "" }
        ],
        answer: 1
    },
    {
        question: "Ella is organizing her photo collection. She has 96 photos, and she wants to place an equal number of photos into 6 photo albums. How many photos will go into each album?",
        image: "",
        options: [
            { text: "18", image: "" },
            { text: "16", image: "" },
            { text: "14", image: "" },
            { text: "12", image: "" }
        ],
        answer: 1
    },
    {
        question: "Simplify the expression 5×(−2)+8÷4. What is the result?",
        image: "",
        options: [
            { text: "-8", image: "" },
            { text: "-6", image: "" },
            { text: "6", image: "" },
            { text: "-10", image: "" }
        ],
        answer: 0
    },
    {
        question: "Which of the following expressions evaluates to 5?",
        image: "",
        options: [
            { text: "(2+3)×2÷2", image: "" },
            { text: "2×3+2÷2", image: "" },
            { text: "(2×3)+(2÷2)", image: "" },
            { text: "2×(3-2)÷2", image: "" }
        ],
        answer: 0
    },
    {
        question: "Which of the following expressions involves a correct application of GEMDAS?",
        image: "",
        options: [
            { text: "3+2×5÷2", image: "" },
            { text: "(3+2) × (5÷2)", image: "" },
            { text: "3+2×(5÷2)", image: "" },
            { text: "3× (2+5) ÷2", image: "" }
        ],
        answer: 2
    },
    {
        question: "Given the expression −6+8×3−4, which part of the order of operations would you evaluate first?",
        image: "",
        options: [
            { text: "Addition of -6 and 8", image: "" },
            { text: "Multiplication of 8 and 3", image: "" },
            { text: "Subtraction of 4", image: "" },
            { text: "Addition of 3 and 8", image: "" }
        ],
        answer: 1
    },
    {
        question: "Create a numerical expression involving integers, and solve it using GEMDAS. Choose the expression that simplifies to 12.",
        image: "",
        options: [
            { text: "4×3÷2+6", image: "" },
            { text: "(6+4)×2−2", image: "" },
            { text: "3×4+6÷3", image: "" },
            { text: "5×(3+2)−3", image: "" }
        ],
        answer: 0
    },
    {
        question: "What is the absolute value of -4 and what does it represent on the number line?",
        image: "",
        options: [
            { text: "4; it is 4 units to the right of zero", image: "" },
            { text: "4; it is 4 units above zero", image: "" },
            { text: "4; it is 4 units to the left of zero", image: "" },
            { text: "-4; it is 4 units to the right of zero", image: "" }
        ],
        answer: 0
    },
    {
        question: "Which of the following statements is true regarding the absolute value of numbers?",
        image: "",
        options: [
            { text: "The absolute value of a positive number is always greater than the absolute value of a negative number.", image: "" },
            { text: "The absolute value of a number is always the same as the number itself.", image: "" },
            { text: "The absolute value of a negative number is equal to its positive counterpart.", image: "" },
            { text: "The absolute value of zero is negative.", image: "" }
        ],
        answer: 2
    }
    
    
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options');
    const questionImg = document.getElementById('question-image');

    optionsEl.innerHTML = ''; // Clear previous options

    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;

    // Set the question image if available
    if (currentQuestion.image) {
        questionImg.src = currentQuestion.image;
        questionImg.style.display = "block";
    } else {
        questionImg.style.display = "none";
    }

    // Loop through options and create elements
    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.textContent = option.text;
        li.onclick = () => checkAnswer(index);

        // Add option image if available
        if (option.image) {
            const img = document.createElement('img');
            img.src = option.image;
            img.alt = "Option Image";
            li.prepend(img);
        }

        optionsEl.appendChild(li);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];

    // Update score
    if (selectedIndex === currentQuestion.answer) {
        score++;
    }
    document.getElementById('score').textContent = score;

    // Move to next question or show results
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert(`Quiz finished! Your final score is: ${score}`);
        currentQuestionIndex = 0;
        score = 0;
        loadQuestion();
    }
}

// Load the first question when the page loads
window.onload = loadQuestion;
