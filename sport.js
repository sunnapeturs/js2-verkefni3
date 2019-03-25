window.addEventListener("load", ()=> {
    const whatIsThis = fetch("https://apis.is/flight?language=en&type=departures")      
    .then((results)=>{
        return results.json();
    })
    .then((json)=>{
        console.log(json.results);
        for(var i = 0; i < json.results.length; i ++){  
        document.getElementById('main').innerHTML += `
        <div class="card">
            <div>To ${json.results[i].flightNumber}</div>    
            <div class="top-info">
                <div>
                    <div>${json.results[i].date}</div>
                    <div>${json.results[i].plannedArrival}</div>
                </div>
                <div>
                    <div>${json.results[i].realArrival}</div>
                    <div>${json.results[i].status}</div>
                </div>
            </div>    
        </div>   
`
        }
     })
})
