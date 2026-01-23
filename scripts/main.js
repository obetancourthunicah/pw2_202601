// Add Event Listener for DOMContentLoaded
let formData = {};
document.addEventListener("DOMContentLoaded", ()=>{
    let heroActionButton = document.querySelector("#hero .action");
    heroActionButton.addEventListener("click", (e)=>{
        alert("En hora buen nos vamos conectar, llena el formulario.");
    });
    initFormValidation();
});

function initFormValidation(){
    formData.txtNombre = document.querySelector("#txtNombre");
    formData.txtEmail = document.querySelector("#txtEmail");
    formData.txtComment = document.querySelector("#txtComment");
    formData.btnEnviar = document.querySelector("#btnEnviar");
    formData.btnEnviar.addEventListener("click", validarFormulario);
}
const isEmptyRegex = /^\s*$/;
const isValidEmail = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
function validarFormulario(e) {
    e.stopPropagation();
    let isValid = true;
    let emailValue = formData.txtEmail.value;
    let nameValue = formData.txtNombre.value;
    if ( isEmptyRegex.test(nameValue)) {
        alert("El Nombre es requerido");
        isValid = false;
    }
    if ( !isValidEmail.test(emailValue)) {
        alert( "El correo no es válido!");
        isValid = false;
    }

    if (!isValid) {
        e.preventDefault();
    }
}

/*
    condiciones 
    if
    else

    switch

    let isEdad edad < 18 ?  false : true;

    for
    while
    do while 

    let arrayObject = ["a", "b", "c"];
    const newArrayObject = arrayObject.map(
        (element)=>{
            if (element == "a") {
                return 1;
            }
            if (element == "b") {
            return 2;
            }
            return 3;
        }
    );

    // newArrayObject = [1,2,3];

    filter 
    find
    forEach
    sort
*/