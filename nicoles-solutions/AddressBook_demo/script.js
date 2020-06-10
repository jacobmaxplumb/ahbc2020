class Contact {
  constructor(name, phone, relation) {
    this.name = name;
    this.phone = phone;
    this.relation = relation;
  }
}

class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(name, phone, relation) {
    let contact = new Contact(name, phone, relation);
    this.contacts.push(contact);
  }
  deleteAt(index) {
    this.contacts.splice(index, 1);
  }
  deleteByName(name) {
    for (let i = 0; i < this.contacts.length; i++) {
      if (name === this.contacts[i].name) {
        this.contacts.splice(i, 1);
      }
    }
  }
  findContactByRelation(relation) {
    for (let i = 0; i < this.contacts.length; i++) {
      if (relation === this.contacts[i].relation) {
        return this.contacts[i];
      }
    }
  }
  searchContacts(text) {
    return this.contacts.filter((contact) => {
      for (let property in contact) {
        if (contact[property].includes(text)) {
          return contact;
        }
      }
    });
  }
}

let addressBook = new AddressBook();
addressBook.add("Julia", "734.330.8852", "sister");
addressBook.add("Ron", "240.449.4596", "dad");
addressBook.add("Kathy", "240.731.9549", "mom");
console.log(addressBook);

let cards = document.querySelector(".cards-container");
let addContact = document.querySelector(".add-contact");
let formContainer = document.querySelector(".form-container");
let form = document.querySelector(".add-contact-form");
let contactCounter = document.querySelector(".contacts-count");

function display() {
  cards.innerHTML = "";
  addressBook.contacts.forEach((contact, index) => {
    let card = document.createElement("div");
    card.classList.add("card");
    let name = document.createElement("p");
    name.innerText = `Name: ${contact.name}`;
    let phone = document.createElement("p");
    phone.innerText = `Phone: ${contact.phone}`;
    let relation = document.createElement("p");
    relation.innerText = `Relation: ${contact.relation}`;
    let button = document.createElement("button");
    button.classList.add("delete-contact");
    let icon = document.createElement("i");
    icon.classList.add("fas", "fa-trash");
    icon.setAttribute("data-index", index);
    button.append(icon);
    card.append(name, phone, relation, button);
    cards.append(card);
  });
  contactCounter.innerText = `Contacts: ${addressBook.contacts.length}`;
}
addContact.addEventListener("click", (e) => {
  formContainer.style.display = "flex";
});
display();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(form);
  addressBook.add(data.get("name"), data.get("phone"), data.get("relation"));
  form.reset();
  formContainer.style.display = "none";
  display();
});

let deleteButton = document.querySelector(".delete-contact");
cards.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.className === "fas fa-trash") {
    let index = e.target.getAttribute("data-index");
    console.log(index);
    addressBook.deleteAt(index);
    display();
  }
});
