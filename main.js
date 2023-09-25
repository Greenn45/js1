const btn = document.querySelector(".btn");
const name = document.querySelector(".name");
const age = document.querySelector(".age");
const card = document.querySelector(".cards")

btn.addEventListener("click", () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.json");
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send();

    xhr.addEventListener("load", () => {
        const data = JSON.parse(xhr.response);
        data.forEach(person => {
            const nameElement = document.createElement("div");
            nameElement.textContent = `Name: ${person.name}`;

            const ageElement = document.createElement("div");
            ageElement.textContent = `Age: ${person.age}`;

            card.appendChild(nameElement);
            card.appendChild(ageElement)

        // name.innerHTML = person.name;
        // age.innerHTML  = person.age;

        })

        // const card = data;
        //
        // const name = document.createElement("div");
        // name.innerHTML = `Name1: ${data.name}`;
        //
        // const age = document.createElement('div');
        // age.innerHTML = `Age1: ${data.age}`;
        // card.appendChild(name);
        // card.appendChild(age)

    })
})