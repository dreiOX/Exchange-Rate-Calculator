//fetch(`https://api.exchangeratesapi.io/latest?base=${currency_one}`)

const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swapEl = document.getElementById('swap');

// fetch exchange rates and update the DOM
function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    fetch(`https://v6.exchangerate-api.com/v6/9ea733e522f25f93138fe58b/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
       // console.log(data);
        const rate = data.conversion_rates[currency_two];
        
        rateEl.innerText = `1 ${currency_one} = ${rate.toFixed(2)} ${currency_two}`;

        amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    }); 
}


//event listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swapEl.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();


});

calculate();


