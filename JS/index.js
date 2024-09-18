var data = new Date();
var dia = data.getDate();
var mes = "0"+(data.getMonth() + 1);
var ano = data.getFullYear();
fullDate = dia+"/"+mes+'/'+ano;      

function countCheckTasks(){
    var countCheck = document.getElementsByClassName('taskCheck');
var contador = document.getElementById('countCheck');
contador.innerHTML = countCheck.length + " tarefa(s) concluída(s)";
}

function insert() {
    var nome = document.getElementById('nome');
    var label = document.getElementById('label');
    if (nome.value == "" || label.value == "") {
        window.alert("Preencher todos os campos!");
    } else
        var tasks = document.getElementById('tasks');
    var id = tasks.childElementCount + 1;
    var divTask = document.createElement('div');
    divTask.classList.add('task');
    divTask.setAttribute('id', 'task' + id);
    var divTextTask = document.createElement('div');
    divTextTask.classList.add('textTask');
    divTask.append(divTextTask);
    var taskName = document.createElement('h2');
    taskName.innerHTML = nome.value;
    divTextTask.append(taskName);
    var divSubInfo = document.createElement('div');
    divSubInfo.classList.add('subInfo');
    divTextTask.append(divSubInfo);
    var labelP = document.createElement('p');
    labelP.classList.add('label');
    labelP.innerHTML = label.value;
    divSubInfo.append(labelP);
    var date = document.createElement('p');
    date.classList.add('dateCreate');
    date.innerHTML = 'Criado em: '+ fullDate;
    divSubInfo.append(date);
    var button = document.createElement('button');
    button.innerHTML = 'Concluir';
    button.onclick = function (e) {
        e = id;
        check(e);
    };
    divTask.append(button);
    var img = document.createElement('img');
    img.src = "img/check.svg";
    divTask.append(img);
    tasks.append(divTask);
    document.getElementById('nome').value = "";
    document.getElementById('label').value = "";


}

function check(number) {
    var info = document.getElementById('task' + number);
    info.classList.add('taskCheck');
    countCheckTasks();
}
countCheckTasks();




