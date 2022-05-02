// write js code here corresponding to favourites.html

var data = JSON.parse(localStorage.getItem('favouriteList'));

function display(data){
    data.forEach(function(ele,i){
        var row = document.createElement('tr');

        var Match_number = document.createElement('td');
        Match_number.innerText = ele.Match_number;

        var teamA = document.createElement('td');
        teamA.innerText = ele.teamA;

        var teamB = document.createElement('td');
        teamB.innerText = ele.teamB;

        var date = document.createElement('td');
        date.innerText = ele.date;

        var venue = document.createElement('td');
        venue.innerText = ele.venue;
///////////////////////////////////////////////////////delete the data
        var Delete = document.createElement('td');
        Delete.innerText = 'Delete'
        Delete.style.color = 'red'
        Delete.id = 'Delete';

        Delete.addEventListener('click',function(event){
            data.splice(ele,1);
            localStorage.setItem('favouriteList',JSON.stringify(data));
            window.location.reload()
        })
        


        row.append(Match_number,teamA,teamB,date,venue,Delete);

        document.querySelector('tbody').append(row);
    })
}
display(data)