var i = 0;

function insert_todo(){
    const text = document.getElementById('insert').value;

    document.getElementById('debug').innerHTML = 'insert_todo running ...' + text;

    const e = document.createElement('li');
    e.innerHTML = text;
    e.id = 'ul-' + i;
    
    const toggle_button = document.createElement('button');
    toggle_button.innerHTML = '완료'

    toggle_button.onclick = function(){ toggle_status(this) };

    e.appendChild(toggle_button);

    document.getElementById('todo-list').appendChild(e);
}

function toggle_status(e){
    if (e.parentElement.className = "active"){
        e.parentElement.className = "inactive";
        e.innerHTML = "미완료";
    }else{
        e.parentElement.className = "active";
        e.innerHTML = "완료";
    }
    
}