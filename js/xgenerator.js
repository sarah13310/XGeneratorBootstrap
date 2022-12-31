let container = null;
let selectedParent = null;
let rootParent = null;
let c = [];
let t = [];
var myModalEl = document.querySelector('#modalDelete')
var modal = bootstrap.Modal.getOrCreateInstance(myModalEl)

function onDelete() {
    if (selectedParent)
        selectedParent.remove();
    modal.hide();
}

function Container() {
    let cont = document.getElementById('cont')
    container = document.createElement('div');
    container.classList.add("container");
    container.addEventListener("click", () => {
        AllUnSelection();
        container.classList.toggle("focus")
        selectedParent = container;
    });
    cont.append(container);
}

function Row() {
    row = document.createElement('div');
    row.classList.add("row");
    if (selectedParent == null) {
        document.body.appendChild(row);
    } else {
        selectedParent.appendChild(row)
    }
    let rows = document.getElementsByClassName('row')
    for (let i = 0; i < rows.length; i++) {
        rows[i].addEventListener("click", function () {
            event.stopPropagation()
            AllUnSelection();
            this.classList.toggle("focus");
            selectedParent = this
        }, false);
    }
}

function Col() {
    let col = document.createElement('div');
    col.classList.add("col");
    col.addEventListener("click", () => {
        let selected = col.classList.toggle("focus")
        selectedParent = (selected === true) ? col : null;
    })
    if (selectedParent == null) {
        document.body.appendChild(col);
    } else {
        selectedParent.appendChild(col)
    }
    let cols = document.getElementsByClassName('col')
    for (let i = 0; i < cols.length; i++) {
        cols[i].addEventListener("click", function () {
            event.stopPropagation()
            AllUnSelection();
            this.classList.toggle("focus");
            selectedParent = this
        }, false);
    }
}

function Input(type, value, id, placeholder) {
    let div = document.createElement('div');
    let span = document.createElement('span');
    let input = document.createElement('input');
    div.classList.add("input-group");
    div.classList.add("mb-3")
    span.classList.add("input-group-text");
    input.classList.add("form-control");
    input.setAttribute("type", type);
    input.setAttribute("id", id);
    input.setAttribute("placeholder", placeholder);
    input.setAttribute("aria-label", placeholder);
    input.setAttribute("value", value);
    input.setAttribute("aria-describedby", id);
    div.append(span);
    div.append(input);

    if (selectedParent == null) {
        document.body.appendChild(div);
    } else {
        selectedParent.appendChild(div)
    }

    let inputs = document.getElementsByClassName('input')
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("click", function () {
            event.stopPropagation()
            AllUnSelection();
            this.classList.toggle("focus");
            selectedParent = this
        }, false);
    }
}

function AllUnSelection() {
    let rows = document.querySelectorAll(".focus");
    rows.forEach(element => {
        element.classList.remove("focus");
    });
}


function DeleteComponent() {
    modal.show();
}