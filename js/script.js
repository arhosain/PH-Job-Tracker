
let total = document.getElementById('total-count');
let interview = document.getElementById('interview-count');
let rejected = document.getElementById("rejected-count") 

let cardContainer = document.getElementById("card-container")

// let interviewList = [];
// let rejectedList = []; 

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');


// const mainBox = document.querySelector('main')

function calculateCount() {
  const totalCount= total.innerText = cardContainer.children.length; 
  // interview.innerText = interviewList.children.length; 
  // rejected.innerText = rejected.children.length; 
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
 

  // job-count 

 



  cardContainer.style.display = 'none';
  interviewHistory.style.display = 'none';
  rejectedHistory.style.display = 'none';

  if (id === 'all-filter-btn') {
    cardContainer.style.display = 'block';
    

     const totalJobCount = document.getElementById('total-job-count');
     totalJobCount.innerText = calculateCount(); 
  }

  if (id === 'interview-filter-btn') {
    interviewHistory.style.display = 'block';
    const totalJobCount = document.getElementById('total-job-count');
    totalJobCount.innerText = interviewHistory.querySelectorAll('.box').length;
     
    
  }

  if (id === 'rejected-filter-btn') {
    rejectedHistory.style.display = 'block';

     const totalJobCount = document.getElementById('total-job-count');
     totalJobCount.innerText = interviewHistory.querySelectorAll('.box').length;
  }
}






















