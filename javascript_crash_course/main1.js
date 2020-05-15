//single element
/* console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container')); //will only select the first query it comes across

//multiple element
console.log(document.querySelectorAll('.item')); //gives node list
*/
//console.log(document.getElementsByClassName('item'));

//Manipulating things => Changing things in the DOM

//const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'Hello';
//ul.children[1].innerText = 'Brad';
//ul.lastElementChild.innerHTML = '<h4>Hello</h4>'; //to add html dynamically

//const btn = document.querySelector('.btn');
//btn.style.background = 'red';


//EVENTS 

/*btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';


});
*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    if(nameInput.value==='' || emailInput.value==='')
    {
        msg.classList.add('error');
        msg.innerHTML = 'Please Enter all Fields';

        setTimeout(() => msg.remove(), 3000);
    }
    else
    {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        //clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}




























