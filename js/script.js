// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm')
let table = document.getElementById('employees')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.querySelector('#id').value 
    let name = document.querySelector('#name').value 
    let extension = document.querySelector('#extension').value 
    let email = document.querySelector('#email').value 
    let department = document.querySelector('#department').value
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = document.createElement('tr')
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cell0 = row.appendChild(document.createElement('td'))
    let cell1 = row.appendChild(document.createElement('td'))
    let cell2 = row.appendChild(document.createElement('td'))
    let cell3 = row.appendChild(document.createElement('td'))
    let cell4 = row.appendChild(document.createElement('td'))
    let item0 = document.createTextNode(id)
    let item1 = document.createTextNode(name)
    let item2 = document.createTextNode(extension)
    let item3 = document.createTextNode(email)
    let item4 = document.createTextNode(department)
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cell0.appendChild(item0)
    cell1.appendChild(item1)
    cell2.appendChild(item2)
    cell3.appendChild(item3)
    cell4.appendChild(item4)
     // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    let textDelete = document.createTextNode('X')
    deleteBtn.appendChild(textDelete)
    // RESET THE FORM
    document.querySelector('#id').value = ''
    document.querySelector('#name').value = ''
    document.querySelector('#extension').value = ''
    document.querySelector('#email').value = ''
    document.querySelector('#department').value = ''
    // SET FOCUS BACK TO THE ID TEXT BOX
    table.appendChild(row)
});

row.addEventListener('click', (e) => {
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    if (e.target.classList.contains('delete')) {
        if (confirm(`are you sure you want to delete? ${e.target.parentElement.innerText}`)) {
            // select 
            row.removeChild(e.target.parentElement)
        }
    }
})
// DELETE EMPLOYEE
