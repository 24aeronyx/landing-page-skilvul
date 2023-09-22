
function handleGetFormData(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let city = document.getElementById("city").value
    let zipCode = document.getElementById("zip-code").value
    let status = document.getElementById("status").checked

    return{
        name, email, city, zipCode, status
    }
}

function isNumber(string){
    for (let i = 0; i < string.length; i++) {
    if (isNaN(string[i])) {
      return false;
    }
  }
  return true;
}

function checkboxIsChecked(){
    let status = document.getElementById("status").checked
    return status
}

function validateFormData(FormData) {
  for (const key in FormData) {
    if (FormData.hasOwnProperty(key) && FormData[key] === "") {
      return false;
    }
  }
  const string = FormData.zipCode;
  return isNumber(string) && checkboxIsChecked();
}

function submit() {
  const FormData = handleGetFormData();
  const response = document.getElementById("warning");

  if (!validateFormData(FormData)) {
    response.textContent = "Periksa form anda sekali lagi";
  } else {
    response.textContent = "";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submit-form").addEventListener(
    "click",
    function (event) {
      event.preventDefault();
      submit();
    },
    false
  );
});