//this function allows a prompt 
const ps = require("prompt-sync");
const prompt =ps();

//instantiation of variables
let name = prompt("Enter your name: ");
let addr = prompt("Enter your address: ");
let age = parseInt(prompt("Enter your age: "));
let cRole = prompt("Enter you class role(Officer, Student, Teacher): ");
let course = prompt("Enter your course(BSCS, BSM, BAEL): ");

    // Utilization of conditional statements for course with its respective class roles
if (course === "BSCS") { // BSCS course
        if (cRole === "OFFICER") {
            for (let i = 0; i < Math.floor(age / 4); i++) { // 1/4 iteration based on the age input
                console.log(`Name: ${name}, Address: ${addr}, Age: ${age}, Course: ${course}, Class Role: ${cRole}`);
            }
        } else if (cRole === "STUDENT") {
            for (let i = 0; i < Math.floor(age / 4); i++) {
                console.log(`Name: ${name}, Address: ${addr}, Age: ${age}, Course: ${course}, Class Role: ${cRole}`);
            }
        } else if (cRole === "TEACHER") {
            for (let i = 0; i < Math.floor(age / 4); i++) {
                console.log(`Name: ${name}, Address: ${addr}, Age: ${age}, Course: ${course}, Class Role: ${cRole}`);
            }
        } else {
            console.log("Invalid Class Role. Defaulting to Student.");
            for (let i = 0; i < Math.floor(age / 4); i++) {
                console.log(`Name: ${name}, Address: ${addr}, Age: ${age}, Course: ${course}, Class Role: Student`);
            }
        }
    } else if (course === "BSM") { // BSM course
        if (cRole === "OFFICER") {
            for (let i = 0; i < Math.floor(age / 4); i++) {
                console.log(`Name: ${name}, Address: ${addr}, Age: ${age}, Course: ${course}, Class Role: ${cRole}`);
            }
        } else if (cRole === "STUDENT") {
            for (let i = 0; i < Math.floor(age / 4); i++) {
                console.log(`Name: ${name}, Address: ${addr}, Age: ${age}, Course: ${course}, Class Role: ${cRole}`);
            }
        } else if (cRole === "TEACHER") {
            for (let i = 0; i < Math.floor(age / 4); i++) {
                console.log(`Name: ${name}, Address: ${addr}, Age: ${age}, Course: ${course}, Class Role: ${cRole}`);
            }
        } else {
            console.log("Invalid Class Role. Defaulting to Student.");
            for (let i = 0; i < Math.floor(age / 4); i++) {
                console.log(`Name: ${name}, Address: ${addr}, Age: ${age}, Course: ${course}, Class Role: Student`);
            }
        }
    } else if (course === "BAEL") { // BAEL course
        if (cRole === "OFFICER") {
            for (let i = 0; i < Math.floor(age / 4); i++) {
                console.log(`Name: ${name}, Address: ${addr}, Age: ${age}, Course: ${course}, Class Role: ${cRole}`);
            }
        } else if (cRole === "STUDENT") {
            for (let i = 0; i < Math.floor(age / 4); i++) {
                console.log(`Name: ${name}, Address: ${addr}, Age: ${age}, Course: ${course}, Class Role: ${cRole}`);
            }
        } else if (cRole === "TEACHER") {
            for (let i = 0; i < Math.floor(age / 4); i++) {
                console.log(`Name: ${name}, Address: ${addr}, Age: ${age}, Course: ${course}, Class Role: ${cRole}`);
            }
        } else {
            console.log("Invalid Class Role. Defaulting to Student.");
            for (let i = 0; i < Math.floor(age / 4); i++) {
                console.log(`Name: ${name}, Address: ${addr}, Age: ${age}, Course: ${course}, Class Role: Student`);
            }
        }
    } else {
        console.log("Invalid Course. Cannot determine your course."); // Invalid course input
    }

