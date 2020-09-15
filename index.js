var katzDeliLine = [];

function takeANumber(line,newCust) {
  line.push(newCust)
  return `Welcome, ${newCust}. You are number ${custNum} in line.`
}

function nowServing() {
  if (katzDeliLine>0) {
    return 
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine() {
  
}