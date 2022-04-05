// Write your code here!

// PART 1
const element = document.getElementById('main')
element.remove()

// PART 2/3/4
const newHeader = document.createElement('h1')

newHeader.id = 'victory'
newHeader.className = 'victory'
newHeader.innerHTML = 'YOUR-NAME is the champion'
