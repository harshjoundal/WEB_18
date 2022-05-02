// write js code here corresponding to index.html
// You should add submit event on the form

var schedule = JSON.parse(localStorage.getItem('schedule')) || [];

var form = document.querySelector('#masaiForm');

form.addEventListener('submit',function(event){
    event.preventDefault();
    var data ={
       Match_number : form.matchNum.value,
       teamA : form.teamA.value,
       teamB :form.teamB.value,
       date : form.date.value,
       venue : form.venue.value,

    }
    schedule.push(data);

    localStorage.setItem('schedule',JSON.stringify(schedule));
    
})