const firstBoxText = `This is the first box`
const secondBoxText = `This is the second box`
const thirdBoxText = `This is the third box`

const allBoxes = document.querySelectorAll('.box')

allBoxes.forEach(box => {
    box.addEventListener('click', showName)
}) 

function showName() {
    console.log(this.innerText);
    if (this.innerText === 'first') {
        this.innerHTML = firstBoxText
        this.style.backgroundColor = "black"
        this.style.color = "white"
    }

    if (this.innerText === 'second') {
        this.innerHTML = secondBoxText
        this.style.backgroundColor = "white"
        this.style.color = "red"
    }

    if (this.innerText === 'third') {
        this.innerHTML = thirdBoxText
        this.style.backgroundColor = "blue"
        this.style.color = "orange"
    }
}