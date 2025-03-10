let teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// seleziono il container
const containerElement = document.querySelector('.container')
createHtmlText(teamMembers)

// funzione per rendere html ready un oggetto
function createHtmlText(elements) {
  let texts = '';

  // seleziono ogni oggetto nell array
  for (let i = 0; i < elements.length; i++) {

    // inserisco, tramite la prima funzione, gli elementi dell oggetto nel html precompilato e aggiungo per ogni iterazione il testo ad una variabile
    texts += createHtmlElement(elements[i])
  }
  // inserisco tutto il testo html generato nel container
  containerElement.innerHTML = texts
}


// funzione per creare HTML
function createHtmlElement(element) {
  return `<div class="card">
                <img src="${element.img}" alt="immagine di ${element.name}">
                <div class="card-content">
                    <h2>${element.name}</h2>
                    <h3>${element.role}</h3>
                    <h4>${element.email}</h4>
                </div>
          \</div>`
}


// bonus

// richiamo il form in js
const formElement = document.querySelector('form')

// richiamo i campi di input del form
let name = document.getElementById('name')
let role = document.getElementById('role')
let email = document.getElementById('email')
let img = document.getElementById('img')

// richiamo il submit del form in js
const buttonElement = document.getElementById('submit')

// previene che la pagina si ricarichi premento submit e che i dati vengano persi
formElement.addEventListener('submit', (event) => {
  event.preventDefault()
})

// // azione all'invio dei dati inseriti dall'utente
buttonElement.addEventListener('click', () => {
  console.log('l utente ha inviato il form')

  let userObj = {
    name: name.value,
    role: role.value,
    email: email.value,
    img: img.value
  }

  teamMembers.push(userObj) 
  console.log(teamMembers)
  createHtmlText(teamMembers)
  formElement.reset()
})


