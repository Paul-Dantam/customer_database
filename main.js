const newMarkUp = `
<h2 class="title">Internal Company Directory</h2>
    <section class="wrapper">
        <div class="container">
        </div >
    </section > `

document.querySelector("body").innerHTML = newMarkUp;



for (var i = 0; i < customers.results.length; i++) {
    var directory = `
    <div class="content">
        <img src=${customers.results[i].picture.large}>
        <p class="name">${customers.results[i].name.first} ${customers.results[i].name.last}</p>
        <p class="email">${customers.results[i].email}</p>
        <p class="address"> ${customers.results[i].location.street}
        <p class="address"> ${customers.results[i].location.city}, ${customers.results[i].location.state}, ${customers.results[i].location.postcode}</p>
        <p class="address"> ${customers.results[i].phone}</p>
        </p >
        <p class="ssn">${customers.results[i].id.value}
        </p>
    </div >
    `

    document.querySelector(".container").innerHTML += directory;
}
