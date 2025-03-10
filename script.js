const teamMembers = [
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
console.log(containerElement)

createHtmlText (teamMembers)

// funzione per rendere html ready un oggetto
function createHtmlText (elements) {

  let texts;
  for(let i = 0; i < elements.length; i++){
    console.log(elements[i])

  }


}


// funzione per creare HTML
function createHtmlElement (element) {
  return `<div class="card">
                <img src="${element.img}" alt="immagine di ${element.name}">
                <div class="card-content">
                    <h2>${element.name}</h2>
                    <h3>${element.role}</h3>
                    <h4>${element.email}</h4>
                </div>
          \</div>`
}