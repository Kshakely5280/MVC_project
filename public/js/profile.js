const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#highscore-name').value.trim();
  const score = document.querySelector('#score-value').value.trim();
  const createdAt = document.querySelector('#created-value').value.trim();

};
