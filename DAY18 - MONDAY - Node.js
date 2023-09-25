### DAY 18: SEPTEMBER 25, MONDAY, 2023 ()

** Today's PROGRESS**:
MORNING:
In the morning we tackled a task in GitHub - to make a clock hand move around in regular intervals of 1 second 
  (https://github.com/SchoolOfCode/bc15-w4-d1-workshop-clock-challenge-team29-w4).
   
Today we talked about Node.JS. 
It is a tool to build own API. 

The advantages of having its own API:
- we have no control over public API
- customization 
- cost efficiency
- performance
- security
- reliability
- long-term cost

Developing own API gives knowledge to a full-stack developer and it is crucial for future development. 

NODE.JS is an open-source cross-platform JavaScript runtime environment. 
  OPEN SOURCE = type of software that is free to use, share, and modify by anyone. 
  CROSS PLATFORM = refers to software that can run on different operating systems, such as Windows, Mac, or Linux. 
JS RUNTIME ENVIRONMENT - a program that allows us to run J.S. code on our computers or servers. 

I/O (Input/Output)
refers to the communication between a computer and its environment. 
  
Event-driven programming:
A programming paradigm in which the flow of a program is determined by events that occur. 

Java Script Engine - a program or SW that interprets and executes J.S. Code. 

The most popular JavaScript Engines:
Chrome (V8), Firefox (SpiderMonkey), Edge (Chakra), Safar (JavaScript). 

Node.js vs The Browser

The NODE.JS package manager ======= npm

Node.js MODULE SYSTEM

** THOUGHTS:**
Today's session about Node.js was informative - filled with lots of information that need time to be applied in real-life scenario. 

CODE EXAMPLES:
Code example from the session:
Remember, in order to import and export functionality using ESM (ECMAScript Modules), I had to generate a package.json file with this command:
npm init -y
And then, add the following to my package.json file:
"type": "module"
I then created the following files:
// math.js

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
// app.js

import {add, subtract} from "./math.js";

const sum = add(4, 5);

console.log(sum);
To run my app.js file, I entered the following command in the terminal:
node app.js

** LINK TO WORK:
https://javascript.info/settimeout-setinterval

CLOCK CHALLENGE - MORNING SESSION:
https://github.com/SchoolOfCode/bc15-w4-d1-workshop-clock-challenge-team29-w4

AFTERNOON CHALLENGE - using Node.js:
https://github.com/SchoolOfCode/bc15-w4-d1-workshop-intro-to-nodejs-team29-w4
