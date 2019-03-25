//const dates = ["mánudagur","Þriðjudagur","Miðvikudagur","Fimmtudagur","Föstudagur","Laugardagur","Sunnudagur"];

window.addEventListener("load", ()=> {
    const whatIsThis = fetch("https://apis.is/concerts")      
    .then((results)=>{
        return results.json();
    })
    .then((json)=>{
        console.log(json.results);
        for(var i = 0; i < json.results.length; i ++){  
        document.getElementById('main').innerHTML += `
        <div class="card">
            <h2>${json.results[i].eventDateName}</h2>    
            <div class="top-info">
                <div>
                    <span>${json.results[i].userGroupName}</span>
                    <span>${json.results[i].dateOfShow}</span>
                </div>
                <div>
                    <span>${json.results[i].eventHallName}</span>
                    <span>${json.results[i].name}</span>
                </div>
            </div>
            <img src="${json.results[i].imageSource}"></img>      
        </div>   
`
        }
     })
})



