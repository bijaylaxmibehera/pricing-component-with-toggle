let checkBox=document.querySelector('#toggle-btn');
let monthlyPrice=document.querySelectorAll('.monthly-price');
let yearlyPrice=document.querySelectorAll('.anually-price');



function clickHandler(){
    if (checkBox.checked) {
        yearlyPrice.forEach(price => price.style.display = 'none');
        monthlyPrice.forEach(price => price.style.display = 'flex');
    } else{
        yearlyPrice.forEach(price => price.style.display = 'flex');
        monthlyPrice.forEach(price => price.style.display = 'none');
    }
}
checkBox.addEventListener('click',clickHandler);