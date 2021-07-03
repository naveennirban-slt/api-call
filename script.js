fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
        // console.log(data);
    });

function appendData(data) {
    let mainContainer = document.getElementById("list");
    for (let i = 0; i < data.length; i++) {

        let div = document.createElement("li");
        li.setAttribute("data-id", i + 1);
        li.setAttribute("id", i + 1);
        div.innerHTML = data[i].name + ',' + 'id:' + data[i].id + ', username:' + data[i].username + ', email:' + data[i].email + ', phone' + data[i].phone + ', website:' + data[i].website;

        mainContainer.appendChild(div);
        let datasetvalue = li.getAttribute("data-id");
        

    }
};

let li = document.getElementById("list");
//let datasetvalue= li.getAttribute("data-id");
//console.log( datasetvalue)
li.onclick = function () {
    location.href = "index2.html?Id=" + datasetvalue;
}