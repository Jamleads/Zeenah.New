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

if (document.querySelector('.swap-convert')) {
  document.querySelector('.swap-prev').addEventListener('click', () => {
    document.querySelector('.blur-section').classList.add('blur');
    document.querySelector('.swap-modal').classList.remove('hidden');
  });

  document.querySelector('.swap-cancel').addEventListener('click', () => {
    document.querySelector('.blur-section').classList.remove('blur');
    document.querySelector('.swap-modal').classList.add('hidden');
  });

  document.querySelector('.swap-submit').addEventListener('click', () => {
    window.location.href = './tracasction-success.html?source=convert';
  });
}

if (document.querySelector('.transaction-sucessfull')) {
  const urlParams = new URLSearchParams(window.location.search);
  const source = urlParams.get('source');

  if (source === 'send') {
    document.querySelector('.note-head').textContent = 'Transaction successful';
    let paragraphs = document.getElementsByTagName('p');
    paragraphs[0].textContent = 'Transfered NGN 100,000';
    paragraphs[1].textContent = 'To Reece James';

    document.querySelector('.trac-done').addEventListener('click', () => {
      window.location.href = './home.html';
    });
    document.querySelector('.view-receipt').addEventListener('click', () => {
      window.location.href = './transaction-receipt.html';
    });
  }

  if (source === 'convert') {
    document.querySelector('.note-head').textContent = 'Swap successful';

    let paragraphs = document.getElementsByTagName('p');
    paragraphs[0].textContent = '';
    paragraphs[1].textContent =
      'You have successfully swapped 100 USD to 74,000 NGN ';

    document.querySelector('.trac-done').addEventListener('click', () => {
      console.log('go back to home');
      window.location.href = './home.html';
    });
    document.querySelector('.view-receipt').addEventListener('click', () => {
      console.log('show receipt');
    });
  }
}

if (document.querySelector('.send-amount')) {
  document.querySelector('.send-prev').addEventListener('click', () => {
    document.querySelector('.send-amount-body').classList.add('blur');
    document.querySelector('.send-modal').classList.remove('hidden');
  });

  document.querySelector('.cancel-prev').addEventListener('click', () => {
    document.querySelector('.send-amount-body').classList.remove('blur');
    document.querySelector('.send-modal').classList.add('hidden');
  });

  document.querySelector('.send-confirm').addEventListener('click', () => {
    window.location.href = './tracasction-success.html?source=send';
  });
}

if (document.querySelector('.home')) {
  const topUp = document.querySelector('.top-up');
  const topUpModal = document.querySelector('.top-up-modal');
  const closeModal = document.querySelector('.close-modal');
  const overlay = document.querySelector('.overlay');

  topUp.addEventListener('click', () => {
    topUpModal.classList.remove('hide');
    overlay.classList.remove('hide');
  });
  closeModal.addEventListener('click', () => {
    topUpModal.classList.add('hide');
    overlay.classList.add('hide');
  });

  const send = document.querySelector('.send');
  const sendModal = document.querySelector('.send-modal');
  const closeSendModal = document.querySelector('.close-send-modal');

  send.addEventListener('click', () => {
    sendModal.classList.remove('hide');
    overlay.classList.remove('hide');
  });

  closeSendModal.addEventListener('click', () => {
    sendModal.classList.add('hide');
    overlay.classList.add('hide');
  });

  const utility = document.querySelector('.utility');
  const utilityModal = document.querySelector('.utility-modal');
  const closeUtilityModal = document.querySelector('.close-utility-modal');

  utility.addEventListener('click', () => {
    utilityModal.classList.remove('hide');
    overlay.classList.remove('hide');
  });
  closeUtilityModal.addEventListener('click', () => {
    utilityModal.classList.add('hide');
    overlay.classList.add('hide');
  });
}

if (document.querySelector('.create-card')) {
  const createCardBtn = document.querySelector('.create-card-btn');
  const createCardModal = document.querySelector('.creat-card-modal');
  const closeModal = document.querySelector('.close-modal');
  const overlay = document.querySelector('.overlay');

  createCardBtn.addEventListener('click', () => {
    createCardModal.classList.remove('hide');
    overlay.classList.remove('hide');
  });
  closeModal.addEventListener('click', () => {
    createCardModal.classList.add('hide');
    overlay.classList.add('hide');
  });
}

if (document.querySelector('.set-pin')) {
  const key = document.querySelector('.cal-keys');
  const display1 = document.querySelector('.display1');
  const display2 = document.querySelector('.display2');
  const display3 = document.querySelector('.display3');
  const display4 = document.querySelector('.display4');
  const clearBtn = document.querySelector('.clear');

  key.addEventListener('click', function (e) {
    if (e.target.matches('button')) {
      const key = e.target;
      const action = key.dataset.action;
      const keyContent = key.textContent;
      const currentValue1 = display1.value;
      const currentValue2 = display2.value;
      const currentValue3 = display3.value;
      const currentValue4 = display4.value;

      if (!action) {
        if (currentValue1 === '') {
          display1.value = currentValue1 + keyContent;
        } else if (currentValue2 === '') {
          display2.value = currentValue2 + keyContent;
        } else if (currentValue3 === '') {
          display3.value = currentValue3 + keyContent;
        } else if (currentValue4 === '') {
          display4.value = currentValue4 + keyContent;
        }
      }

      if (display4.value) {
        if (action === 'clear') {
          display4.value = '';
        }
      } else if (display3.value) {
        if (action === 'clear') {
          display3.value = '';
        }
      } else if (display2.value) {
        if (action === 'clear') {
          display2.value = '';
        }
      } else if (display1.value) {
        if (action === 'clear') {
          display1.value = '';
        }
      }
    }
  });
}
