const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#highscore-name').value.trim();
    const score = document.querySelector('#score-value').value.trim();
    const createdAt = document.querySelector('#created-value').value.trim();

    if (name && score && createdAt) {
      const response = await fetch(`/api/highscoreRoutes`,  {
        method: 'POST',
        body: JSON.stringify({ name, score, createdAt }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create highscore');
      }
    }
    const response = await fetch(`/phaserGame/index.html`,  {
      method: 'GET',
      body: JSON.stringify({ name, score, createdAt }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  
  if (name && score && createdAt) {}



  
  document
    .querySelector('.highscore-list')
    .addEventListener('click', newFormHandler);