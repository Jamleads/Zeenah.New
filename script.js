'use strict';

if (document.querySelector('.splash')) {
  document.addEventListener('click', function () {
    window.location.href = './spalsh2.html';
  });
}
if (document.querySelector('.splash2')) {
  document.querySelector('.english').addEventListener('click', () => {
    window.location.href = './onboard.html';
  });
}
if (document.querySelector('.phoneOTP')) {
  document.querySelector('.submit').addEventListener('click', () => {
    document.querySelector('.blur-section').classList.add('blur');
    document.querySelector('.checked').classList.remove('hide');
  });

  document.querySelector('.check-con').addEventListener('click', () => {
    window.location.href = './home.html';
  });
}

if (document.querySelector('.login')) {
  document.querySelector('.submit').addEventListener('click', () => {
    document.querySelector('.blur-section').classList.add('blur');
    document.querySelector('.checked').classList.remove('hide');
  });

  document.querySelector('.cancel-bio').addEventListener('click', () => {
    document.querySelector('.blur-section').classList.remove('blur');
    document.querySelector('.checked').classList.add('hide');
  });
}

if (document.querySelector('.airtime')) {
  console.log('I got here');
  const see = document.querySelector('.next');
  console.log(see);
  see.addEventListener('click', function () {
    console.log('I am clicked');
  });

  const hedd = document.querySelector('.hedd');
  console.log(hedd);
  if (hedd) {
    hedd.addEventListener('click', function () {
      console.log('I am clicked');
    });
  }
}
