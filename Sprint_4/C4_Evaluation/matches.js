// write js code here corresponding to matches.html

var data = JSON.parse(localStorage.getItem('schedule'));

var favouriteList =JSON.parse(localStorage.getItem('favouriteList')) || [];

function display(data){
    data.forEach(function(ele){
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
///////////////////////////////////////////////////////add data to favourite
        var favourite = document.createElement('td');
        favourite.innerText = 'Favourite';
        favourite.style.color ='green';
        favourite.id = 'fav';


        favourite.addEventListener('click',function(event){
            favouriteList.push(ele);
            localStorage.setItem('favouriteList',JSON.stringify(favouriteList));
        })






        row.append(Match_number,teamA,teamB,date,venue,favourite);

        document.querySelector('tbody').append(row);
    })
}

display(data);



var vfilter = document.querySelector('#filterVenue');
vfilter.addEventListener('change',function(event){
    document.querySelector('tbody').innerHTML = '';
    var value = document.querySelector('#filterVenue').value;
    // var data = JSON.parse(localStorage.getItem('schedule'));
    console.log(value);
    if(value == 'none'){
        display(data)
    }
    else{
        var fdata = data.filter(function(ele){
            return ele.venue == value;
        })
        
        display(fdata);
    }
    
})
