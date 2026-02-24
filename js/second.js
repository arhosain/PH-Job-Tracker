let total = document.getElementById('total-count');
let interview = document.getElementById('interview-count');
let rejected = document.getElementById('rejected-count');

let cardContainer = document.getElementById('card-container');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');


function calculateCount() {
  const totalCount = (total.innerText = cardContainer.children.length) - 1 ;

  // const totalCount = cardContainer.querySelectorAll('.box').length;
  total.innerText = totalCount;
  return totalCount;
}

calculateCount();

const totalJobCount = document.getElementById('total-job-count');
totalJobCount.innerText = calculateCount();

function toggleStyle(id) {
  allFilterBtn.classList.remove('bg-blue-400', 'text-white');
  interviewFilterBtn.classList.remove('bg-blue-400', 'text-white');
  rejectedFilterBtn.classList.remove('bg-blue-400', 'text-white');

  const selected = document.getElementById(id);
  selected.classList.add('bg-blue-400', 'text-white');

  const cardContainer = document.getElementById('card-container');
  const interviewHistory = document.getElementById('interview-history');
  const rejectedHistory = document.getElementById('rejected-history');

  cardContainer.style.display = 'none';
  interviewHistory.style.display = 'none';
  rejectedHistory.style.display = 'none';

  if (id === 'all-filter-btn') {
    cardContainer.style.display = 'block';

    const totalJobCount = document.getElementById('total-job-count');
    totalJobCount.innerText = calculateCount();

    // new
    // totalJobCount.classList.remove('hidden');

    // totalInterviewCount.classList.add('hidden');
  }

  if (id === 'interview-filter-btn') {
    interviewHistory.style.display = 'block';

    console.log('interview hi');
    console.log(interviewHistory.children.length);

    // const totalJobCount = document.getElementById('total-job-count');
    totalJobCount.innerText = interviewHistory.querySelectorAll('.box').length;

    if (interviewHistory.querySelectorAll('.box').length <= 0) {
      interviewHistory.querySelector('div').style.display = 'flex';
   }

 console.log(interviewHistory)


    // console.log(interviewHistory.querySelectorAll('.box').length);

    // new
    // totalInterviewCount.innerText =
    //   interviewHistory.querySelectorAll('.box').length;
    // totalInterviewCount.classList.remove('hidden')
    // totalJobCount.classList.add('hidden')
  }

  if (id === 'rejected-filter-btn') {
    rejectedHistory.style.display = 'block';

    //  const totalJobCount = document.getElementById('total-job-count');
    //  totalJobCount.innerText = rejectedHistory.querySelectorAll('.box').length;

    totalJobCount.innerText = rejectedHistory.querySelectorAll('.box').length;

     if (rejectedHistory.querySelectorAll('.box').length <= 0) {
       rejectedHistory.querySelector('div').style.display = 'flex';
       
     }
    
    // console.log(totalJobCount, rejectedHistory);

    // new

    // totalRejectedCount.innerText =
    //   rejectedHistory.querySelectorAll('.box').length;
    // rejectedHistory.classList.remove('hidden');
    // totalJobCount.classList.add('hidden');
    // totalInterviewCount.classList.add('hidden');
  }
}

// function newFunction(id) {

//   if (id === 'interviewUpdate') {
//     console.log(interviewHistory.children.length);
//     totalJobCount.innerText = interviewHistory.children.length - 1;

//     toggleStyle('interview-filter-btn');

//   }
//   if (id === 'rejectedUpdate') {
//     console.log(rejectedHistory.children.length);
//     totalJobCount.innerText = rejectedHistory.children.length - 1;

//     toggleStyle('rejected-filter-btn');
//   }

// }
