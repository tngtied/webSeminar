import { readFileSync, writeFileSync } from 'fs';
const todo_json = JSON.parse(readFileSync("todo.json"));

console.log("js working, json parsed" + todo_json.stringify());
var i = 0;
for (var e in todo_json['list']){
    const li = document.createElement('li');

    li.innerHTML = "[" + e.hours + ":" + e.minutes + "] ";
    li.innerHTML += e.text + " ";
    li.id = e.id;
    if (e.class == "active"){
        li.classList.add("active");
    }else{
        li.classList.add("inactive");
    }
    
    
    const toggle_button = document.createElement('button');
    toggle_button.innerHTML = '완료'
    toggle_button.onclick = function(){ toggle_status(this) };

    li.appendChild(toggle_button);
    document.getElementById('todo-list').appendChild(li);
    i += 1;
}


function insert_todo(){
    const text = document.getElementById('insert').value;
    const li = document.createElement('li');

    const json_obj = {};

    document.getElementById('debug').innerHTML = 'insert_todo running ...' + text;

    const date_obj = new Date();

    li.id = 'ul-' + i;

    json_obj["hours"] = date_obj.getHours();
    json_obj["minutes"] = date_obj.getMinutes();
    json_obj["text"] = text;
    json_obj["class"] = 'active';

    li.innerHTML = "[" + json_obj["hours"] + ":" + json_obj["minutes"] + "] ";
    li.innerHTML += text + " ";

    li.classList.add("active")
    
    const toggle_button = document.createElement('button');
    toggle_button.innerHTML = '완료'
    toggle_button.onclick = function(){ toggle_status(this) };

    li.appendChild(toggle_button);
    document.getElementById('todo-list').appendChild(li);

    todo_json['list']['ul-' + i].push(json_obj);
    writeFileSync("todo.json", JSON.stringify(todo_json));
    i += 1;
}

function toggle_status(e){
    document.getElementById('debug').innerHTML = 'toggling status... ' + e.parentElement.classList;
    if (e.parentElement.classList.contains("active")){
        document.getElementById('debug').innerHTML += 'entered if(active)';
        e.parentElement.classList.remove('active');
        e.parentElement.classList.add('inactive');
        e.innerHTML = "미완료";
        todo_json["list"][e.parentElement.id]["class"] = 'inactive';
    }else{
        e.parentElement.classList.remove('inactive');
        e.parentElement.classList.add("active");
        e.innerHTML = "완료";
        todo_json["list"][e.parentElement.id]["class"] = 'active';
    }
    writeFileSync("todo.json", JSON.stringify(todo_json));
}