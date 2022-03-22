'use strict';

//Ejercicio 3
const form = document.querySelector('.js-new-form');

if (form.classList.contains('collapsed')) {
  form.classList.remove('collapsed');
} else {
  form.classList.add('collapsed');
}

//Ejercicio 4

const list = document.querySelector('.js-list');

// list.innerHTML += card1;
// list.innerHTML += card2;
// list.innerHTML += card2;

// 1. Trabajar con variables e interpolarlas.

const kittenImg_A = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const kittenName_A = 'Anastacio';
const kittenRace_A = 'British Shorthair';
const kittenDesc_A =
  'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';

const kitten_A = `<li class="card">
<article>
  <img class="card_img" src= ${kittenImg_A} alt="gatito"/>
  <h3 class="card_title">${kittenName_A}</h3>
  <h4 class="card_race">${kittenRace_A}</h4>
  <p class="card_description">${kittenDesc_A}</p>
</article>
</li>`;

const kittenImg_F =
  'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
const kittenName_F = 'Fiona';
const kittenRace_F = 'British Shorthair';
const kittenDesc_F =
  'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';

const kitten_F = `<li class="card">
<article>
  <img class="card_img" src="${kittenImg_F} " alt="gatito"/>
  <h3 class="card_title">${kittenName_F} </h3>
  <h4 class="card_race">${kittenRace_F}</h4>
  <p class="card_description">${kittenDesc_F}</p>
  </article>
  </li>`;

const kittenImg_C =
  'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
const kittenName_C = 'Cielo';
const kittenRace_C = 'British Shorthair';
const kittenDesc_C =
  'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';

const kitten_C = `<li class="card">
<article>
<img class="card_img" src="${kittenImg_C}" alt="gatito"/><h3 class="card_title">${kittenName_C}</h3>
<h4 class="card_race">${kittenRace_C}</h4>
<p class="card_description">${kittenDesc_C}</p>
</article>
</li>`;

list.innerHTML = kitten_A + kitten_F + kitten_C;
