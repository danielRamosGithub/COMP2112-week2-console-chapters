// Exercise 3:

let title = document.getElementsByClassName('item-page__main-title');
title[0].innerText = 'testetes';

// Exercise 4:

let image = document.getElementsByClassName('product-image__image--single');
image[0].src = 'http://via.placeholder.com/350x150';

// Exercise 5:

let menutabs = Array.from(document.querySelectorAll('li.top-nav__list-item'));
let menuItens = ['a','b','c','d','e','f','g','h','i','j'];
menutabs.map( (item, index) => item.textContent = menuItens[index]);

// Exercise 6:

let parent = document.querySelector('.indigo-logo');
let oldImg = parent.firstElementChild;
let newImg = document.createElement('img');
newImg.src = "http://via.placeholder.com/140X100";
parent.replaceChild(newImg, oldImg);

// Exercise 7:

const books = {'name':'harry potter','author':'JK Rowling', 'year':'2000'};
function render(obj) {
    let snippet = `
        <ul>
            <li>${obj.name}</li>
            <li>${obj.author}</li>
            <li>${obj['year']}</li>
        </ul>
    `;
    return snippet;
}
let element = document.querySelector('.item-price__container');
element.innerHTML = render(books);

// Exercise 8:

const listBooks = [
	{'name':'harry potter','author':'JK Rowling', 'year':'2000'},
	{'name':'hunger Games','author':'A guy', 'year':'2010'},
    {'name':'Jungle Book','author':'Another guy', 'year':'1950'}];
    
function render2(obj) {
    let snippet = `
        ${listBooks.map ( book => `
            <div>
                <h3>${book.name}</h3>
                <p>By: ${book.author}</p>
	     <p>Year: ${book.year}</p>        
            </div>
        `).join('')}
    `;
    
    let element = document.querySelector('.product-details__item-description');
    element.innerHTML = snippet;
};
render2(listBooks);

// Exercise 9:

let link = document.querySelector('.item-contributor__link');
link.href = "http://www.georgiancollege.ca";

// extra: make the cart button to erase the web page

let addToCart = document.querySelector('#add-to-cart-button');
function deletePage () {
    document.documentElement.innerHTML = '';
};
addToCart.addEventListener('click', deletePage);