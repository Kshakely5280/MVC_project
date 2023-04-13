const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#highscore-name').value.trim();
    const score = document.querySelector('#score-value').value.trim();
    const createdAt = document.querySelector('#created-value').value.trim();

    // if (score) {
    //   const response = await fetch(`/api/gamepage/scores`,  {
    //     method: 'POST',
    //     body: JSON.stringify(score),
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });
  
    //   if (response.ok) {
    //     document.location.replace('/profile');
    //   } else {
    //     alert('Failed to create highscore');
    //   }
    // }
  //   if (score){
  //   const response = await fetch(`/api/gamepage/scores`,  {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
    
  //   if (response.ok) {
  //     document.location.replace('/profile');
  //   } else {
  //     alert('Failed to get highscore');
  //   }
  //   }
  };
  