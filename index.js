var katzDeliLine = [];

function takeANumber(line,newCust) {
  line.push(newCust)
  return `Welcome, ${newCust}. You are number ${line.length} in line.`
}

function nowServing() {
  if (katzDeliLine>0) {
    return 
  } else {
    return "There is nobody waiting to be served!"
  }
}

function nowServing(currLine) {
  if (currLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
       var name = currLine[0];
    currLine.splice(0, 1);
    return "Currently serving " + name + ".";
  }

function currentLine(NewLine) {
    var line = []
    if (NewLine.length === 0) {
      return "The line is currently empty."
    } else {
}