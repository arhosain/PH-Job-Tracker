const interviewHistory = document.getElementById('interview-history');
const rejectedHistory = document.getElementById('rejected-history');

interviewHistory.style.display = 'none';
rejectedHistory.style.display = 'none';

document.addEventListener('click', function (event) {
  // delete button

  if (event.target.closest('.fa-trash-can')) {
    const card = event.target.closest('.box');

    deleteCard(card); // call function

    return;
  }

  // INTERVIEW
  if (event.target.classList.contains('interviewBtn')) {
    const mainCard = event.target.closest('.box');

    const currentStatus = mainCard.querySelector('.status').innerText;
    if (currentStatus === 'INTERVIEW') {
      return; // STOP duplicate
    }

    const copyCard = mainCard.cloneNode(true);

    removeFromSection(mainCard, rejectedHistory);

    const status = copyCard.querySelector('.status');
    status.innerText = 'INTERVIEW';
    const statusAll = mainCard.querySelector('.status');
    statusAll.innerText = 'INTERVIEW';

    interviewHistory.append(copyCard);
    // interview.innerText = interviewHistory.children.length - 1;

    interview.innerText = interviewHistory.querySelectorAll('.box').length;

    rejected.innerText = rejectedHistory.querySelectorAll('.box').length;

    const noJob1 = document.querySelector('.no-job-1');
    noJob1.style.display = 'none';
  }

  // REJECTED
  if (event.target.classList.contains('rejectedBtn')) {
    const mainCard = event.target.closest('.box');

    const currentStatus = mainCard.querySelector('.status').innerText;
    if (currentStatus === 'REJECTED') {
      return; // STOP duplicate
    }

    const copyCard = mainCard.cloneNode(true);

    removeFromSection(mainCard, interviewHistory);

    const status = copyCard.querySelector('.status');
    status.innerText = 'REJECTED';
    const statusAll = mainCard.querySelector('.status');
    statusAll.innerText = 'REJECTED';
    rejectedHistory.append(copyCard);
    // rejected.innerText = rejectedHistory.children.length -1;

    rejected.innerText = rejectedHistory.querySelectorAll('.box').length;

    interview.innerText = interviewHistory.querySelectorAll('.box').length;

    const noJob1 = document.querySelector('.no-job-2');
    noJob1.style.display = 'none';
  }
});

function removeFromSection(mainCard, section) {
  const company = mainCard.querySelector('.companyName').innerText;
  const position = mainCard.querySelector('.position').innerText;
  const cards = section.querySelectorAll('.box');
  cards.forEach(card => {
    const cName = card.querySelector('.companyName').innerText;
    const cPos = card.querySelector('.position').innerText;
    if (cName === company && cPos === position) {
      card.remove();
    }
  });
}

// delete btn
function deleteCard(card) {
  const company = card.querySelector('.companyName').innerText;
  const position = card.querySelector('.position').innerText;

  const mainCards = cardContainer.querySelectorAll('.box');
  const interviewCards = interviewHistory.querySelectorAll('.box');
  const rejectedCards = rejectedHistory.querySelectorAll('.box');

  mainCards.forEach(item => {
    if (
      item.querySelector('.companyName').innerText === company &&
      item.querySelector('.position').innerText === position
    ) {
      item.remove();
    }
  });

  interviewCards.forEach(item => {
    if (
      item.querySelector('.companyName').innerText === company &&
      item.querySelector('.position').innerText === position
    ) {
      item.remove();
    }
  });

  rejectedCards.forEach(item => {
    if (
      item.querySelector('.companyName').innerText === company &&
      item.querySelector('.position').innerText === position
    ) {
      item.remove();
    }
  });

  interview.innerText = interviewHistory.querySelectorAll('.box').length;
  rejected.innerText = rejectedHistory.querySelectorAll('.box').length;
  total.innerText = cardContainer.querySelectorAll('.box').length;
  
  totalJobCount.innerText = cardContainer.querySelectorAll('.box').length;

}