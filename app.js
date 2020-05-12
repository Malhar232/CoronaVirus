function fetch(){
    $.get("https://api.covid19api.com/summary",
    function(data){
        var tval=document.getElementById("tval");

        for(i=1;i<=data['Countries'].length;i++){

            let insert_Row=tval.insertRow();

            insert_Row.insertCell(0);
            tval.rows[i].cells[0].innerHTML=data['Countries'][i-1]['Country'];
            tval.rows[i].cells[0].setAttribute('class','searchme');


            insert_Row.insertCell(1);
            tval.rows[i].cells[1].innerHTML=data['Countries'][i-1]['NewConfirmed'];
            
            insert_Row.insertCell(2);
            tval.rows[i].cells[2].innerHTML=data['Countries'][i-1]['TotalConfirmed'];

            insert_Row.insertCell(3);
            tval.rows[i].cells[3].innerHTML=data['Countries'][i-1]['NewDeaths'];

            insert_Row.insertCell(4);
            tval.rows[i].cells[4].innerHTML=data['Countries'][i-1]['TotalDeaths'];

            insert_Row.insertCell(5);
            tval.rows[i].cells[5].innerHTML=data['Countries'][i-1]['NewRecovered'];

            insert_Row.insertCell(6);
            tval.rows[i].cells[6].innerHTML=data['Countries'][i-1]['TotalRecovered'];
            

        }
    }
)

}


function goup(){
    window.scrollTo(0,0);
}



// search
