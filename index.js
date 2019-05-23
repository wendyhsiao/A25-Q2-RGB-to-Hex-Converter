const colorInputRed = document.querySelector('#color-red')
const colorInputGreen = document.querySelector('#color-green')
const colorInputBlue = document.querySelector('#color-blue')
const colorInputHex = document.querySelector('#color-hex')
const displayRed = document.querySelector('#chart-red')
const displayGreen = document.querySelector('#chart-green')
const displayBlue = document.querySelector('#chart-blue')
const displayHex = document.querySelector('#chart-hex')
// colorInputRed.value = ''
const convert = document.querySelector('.btn-primary')
// const form = document.forms[0]


function length(inputNum16) {
  if (inputNum16.length < 2) {
    inputNum16 = "0" + inputNum16
    return inputNum16
    console.log('16', inputNum16)
  } return inputNum16
}


colorInputRed.addEventListener('input', event => {
  let inputNum = event.target.value
  // console.log(typeof(inputNum))
  if (Number(inputNum) <= 255 && Number(inputNum) >= 0) {
    let hexNum = parseInt(inputNum, 10).toString(16)
    let hex = "#" + length(hexNum) + "0000"
    displayRed.style.backgroundColor = hex
    console.log(hex)
  } else {
    alert("請輸入0-255的數字")
    colorInputRed.value = ''
    displayRed.style.backgroundColor = '#000000'
  }
})

colorInputGreen.addEventListener('input', event => {
  let inputNum = event.target.value
  // console.log(typeof(inputNum))
  if (Number(inputNum) <= 255 && Number(inputNum) >= 0) {
    let hexNum = parseInt(inputNum, 10).toString(16)
    let hex = "#00" + length(hexNum) + "00"
    displayGreen.style.backgroundColor = hex
    console.log(hex)
  } else {
    alert("請輸入0-255的數字")
    colorInputGreen.value = ''
    displayGreen.style.backgroundColor = '#000000'
  }
})

colorInputBlue.addEventListener('input', event => {
  let inputNum = event.target.value
  // console.log(typeof(inputNum))
  if (Number(inputNum) <= 255 && Number(inputNum) >= 0) {
    let hexNum = parseInt(inputNum, 10).toString(16)
    let hex = "#0000" + length(hexNum)
    displayBlue.style.backgroundColor = hex
    console.log(hex)
  } else {
    alert("請輸入0-255的數字")
    colorInputBlue.value = ''
    displayBlue.style.backgroundColor = '#000000'
  }
})

convert.addEventListener('click', event => {
  let r = parseInt(colorInputRed.value, 10).toString(16)
  let g = parseInt(colorInputGreen.value, 10).toString(16)
  let b = parseInt(colorInputBlue.value, 10).toString(16)

  displayHex.style.backgroundColor = "#" + length(r) + length(g) + length(b)
})

