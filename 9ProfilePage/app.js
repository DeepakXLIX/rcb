let select_btn = document.querySelectorAll('.myDropdown>select');
let select_btn_array = Array.of(select_btn);

console.log(select_btn_array[0].forEach(value => value.addEventListener('click', (event) => {

    if (!event.target.parentElement.classList.contains('addOnHover')) {
        select_btn_array[0].forEach(value => {
            if (value.parentElement.classList.contains('addOnHover'))
                value.parentElement.classList.remove('addOnHover')

        });
    }
    event.target.parentElement.classList.toggle('addOnHover');
}
)));


document.addEventListener('click', (event) => {

    select_btn_array[0].forEach(value => {
        if (!event.target.parentElement.classList.contains('myDropdown'))
        value.parentElement.classList.remove('addOnHover');
    })
});







