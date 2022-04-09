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
    let row = table.insertRow()

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID1 = row.insertCell()
    let cellID2 = row.insertCell()
    let cellID3 = row.insertCell()
    let cellID4 = row.insertCell()
    let cellID5 = row.insertCell()
    let cell_delete = row.insertCell()

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID1.appendChild(document.createTextNode(id))
    cellID2.appendChild(document.createTextNode(name))
    cellID3.appendChild(document.createTextNode(extension))
    cellID4.appendChild(document.createTextNode(email))
    cellID5.appendChild(document.createTextNode(department))

     // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    deleteBtn.appendChild(document.createTextNode('X'))
    cell_delete.appendChild(deleteBtn)

    // RESET THE FORM
    document.querySelector('#id').value = ''
    document.querySelector('#name').value = ''
    document.querySelector('#extension').value = ''
    document.querySelector('#email').value = ''
    document.querySelector('#department').value = ''
    // SET FOCUS BACK TO THE ID TEXT BOX
    table.appendChild(row)
    document.getElementById('id').focus();
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count+= 1
    console.log(count)
})

table.addEventListener('click', (e) => {
    var i = e.target.parentNode.parentNode.rowIndex
    if (confirm(`are you sure you want to delete?`)) {
        // DELETE EMPLOYEE
        table.deleteRow(i)
        count-=1
    }
    console.log(count)
})