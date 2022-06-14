fetch('https://catfact.ninja/fact', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'  
    },
    body: JSON.stringify({
      fact: "The female cat reaches sexual maturity within 6 to 10 months; most veterinarians suggest spaying the female at 5 months, before her first heat period. The male cat usually reaches sexual maturity between 9 and 12 months." 
    })
})
    .then(res => {
        // if(res.ok){
        //     console.log('Success!');
        // }else{
        //     console.log('Not is Success!');
        // }
        // res.json()
        return res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log('Error' + error))

