fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'  
    },
    body: JSON.stringify({
      name: 'User 2'   
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