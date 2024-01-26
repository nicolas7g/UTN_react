const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const botonAcord = document.querySelector(".accordion-button")
const botonValidar = document.getElementById("liveAlertBtn")

const alert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder.innerHTML = "";
    alertPlaceholder.append(wrapper)
  }
  



botonAcord.addEventListener("click", function() {
    

    alertPlaceholder.innerHTML = "";

    if (botonAcord.classList.contains('collapsed'))
        botonValidar.style.display = "none";
    else
        botonValidar.style.display = "block";

})



botonValidar.addEventListener("click", function() {
    const inputEmail = document.getElementById("exampleFormControlInput1")
    const inputTextArea = document.getElementById("exampleFormControlTextarea1")

    if (inputEmail.value === "" || inputTextArea.value ==="") {
          alert('Por favor complete el formulario', 'danger')
      } 
      else{
        alert('Completado!', 'success')
      }

})










