var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(campos);

document.querySelector('.form').addEventListener('submit', function(event) {
    
    var tr = document.createElement('tr');

    campos.forEach(function(event){
        var td = document.createElement('td');
        td.textContent = campos.value;
        tr.appendChild(td);
    });
});