import { saveAs } from 'file-saver';

const diary = document.getElementById("diary");

// Create a new Date object
var currentDate = new Date();

diary.innerHTML = ""

// Get the current year, month, day, etc.
var year = currentDate.getFullYear();
var month = currentDate.getMonth(); // Note: Months are zero-based, so January is 0, February is 1, and so on.
var day = currentDate.getDate();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();

// Display the current date
diary.innerText += "Current Date: " + year + "-" + (month + 1) + "-" + day;
diary.innerText += "Current Time: " + hours + ":" + minutes + ":" + seconds;

function CreateTextFile() {
    var blob = new Blob(["Current Date: " + year + "-" + (month + 1) + "-" + day], {
       type: "text/plain;charset=utf-8",
    });
    saveAs(blob, "download.txt");
 }