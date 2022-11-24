document.querySelector("#downloadJson").onclick = () => {
    let status = document.getElementById("resultStatus")
    status.innerHTML = "Success!"
    status.style.display = "block"
    for (let i = 0; i < 5; i++){
        fetch('https://randomuser.me/api')
            .then((res) => res.json())
            .then((data) => createUser(data))
    }
}

function createUser({results}) {
    const element = document.getElementById('jsonData')
    element.innerHTML += `
        <div class="elements">
            ${getUser(results)}
        </div>
    `
}

function getUser(results) {
    return results.map(user => `
        <img src="${user.picture.large}" width="200px" height="200px" alt="Missing image">
        <p>Name: ${user.name.first} ${user.name.last}</p>
        <p>Cell: ${user.cell}</p>
        <p>City: ${user.location.city}</p>
        <p>Country: ${user.location.country}</p>
        `)
}