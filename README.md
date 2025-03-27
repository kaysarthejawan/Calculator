Calculator Project

Description

This is a simple calculator built using HTML, CSS, and JavaScript. It allows users to perform basic arithmetic operations like addition, subtraction, multiplication, and division.

Features

Clickable buttons for input

Supports addition, subtraction, multiplication, and division

"C" button to clear the input field

"=" button to calculate the result dynamically using new Function()

How It Works

The calculator listens for button clicks.

When a button is clicked, its value is captured and displayed in the input field.

If the "=" button is pressed, the string expression is evaluated using new Function() and the result is displayed.

If the "C" button is pressed, the input field is cleared.

Code Overview

document.querySelectorAll('.btn') selects all buttons.

document.querySelector('#display') selects the display input field.

Calculation() evaluates the mathematical expression using new Function().

changingInput() updates the input field with the clicked button value.

Installation & Usage

Clone the repository:

git clone https://github.com/kaysarthejawan/Calculator.git

Open the index.html file in a browser.

Click the buttons to perform calculations.

Technologies Used

HTML

CSS

JavaScript

License

This project is open-source and free to use.

Author

Created by kaysarthejawan.
