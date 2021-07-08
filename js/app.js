// Config Typed.js
var typed = new Typed("#typed", {
  strings: ["Mahasiswa FTI 2019", "Web Developer soon."],
  typeSpeed: 45,
  startDelay: 90,
  loop: true,
});

// Loader Animation
$(window).on("load", function () {
  setTimeout(function () {
    $(".loader-wrapper").fadeOut("slow");
  }, 3000);
});

// Config HTML Form to Spreadsheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbxWSlW7J__ZAg-PIhFYfMTDs4fECFKqh5SXGovCrUpeKS6dz75BZaLRSv091qt2MHEw/exec'
const form = document.forms['submit-to-google-sheet']

const myAlert = document.querySelector('.my-alert')
const buttonLoading = document.querySelector('.btn-loading')
const buttonSubmit = document.querySelector('.btn-submit')

form.addEventListener('submit', e => {
  e.preventDefault()
  // Ketika tombol submit di klik
  // Tombol submit hilang,muncul tombol loading
  buttonSubmit.classList.toggle('d-none')
  buttonLoading.classList.toggle('d-none')
  fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form)
    })
    .then(response => {
      // Tombol loading hilang,muncul tombol submit kembali
      buttonSubmit.classList.toggle('d-none')
      buttonLoading.classList.toggle('d-none')
      // Tampilkan Alert
      myAlert.classList.toggle('d-none')
      // Reset Form
      form.reset()
      console.log('Success!', response)
    })
    .catch(error => console.error('Error!', error.message))
})