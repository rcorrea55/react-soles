/* Lesson 4: If Statements
 In this lesson you will learn how to control the flow of statements by using
 if, else if, and else, while also learning about logical operators. */

let myVar = 10;

// Syntax for if statements.
if (myVar > 5){
    console.log('I am greater than 5!');
}

//You can also add else if statements to create more control. Add an else statement to catch all other options 
if (myVar < 4){
    console.log('I am less than 4!');
} else if (myVar > 12){
    console.log('I am greater than 12!');
} else {
    console.log('I am everything else');
}

/* You can also use operators inside expressions to create different types of expressions.
! (Logical Not) - turns True to False, False to True
&& (Logical And) - Evaluates to True if the left side and right side are both True, False otherwise
|| (Logical Or) - Evaluates to True if either the left side or right side are True, False otherwise */

if (!(myVar < 4)){
    console.log('I am not less than 4!');
} 

if (myVar < 4 && myVar > 7) {
    console.log('First statement was hit!');
} else {
    console.log('Second statement was hit!');
}

// Previous statement works if the && is replaced with ||.

if (myVar < 4 || myVar > 7) {
    console.log('First statement was hit!');
} else {
    console.log('Second statement was hit!');
}
