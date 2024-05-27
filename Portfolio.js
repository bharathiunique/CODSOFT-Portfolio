setInterval(() => {
    scrollCards(1);
  }, 5000);

  function scrollCards(direction) {
    const cardContainer = document.querySelector('.card-container');
    const cardWidth = cardContainer.querySelector('.card').offsetWidth;
    const scrollWidth = cardContainer.scrollWidth;
    const scrollLeft = cardContainer.scrollLeft;

    let nextScrollLeft = scrollLeft + direction * cardWidth;

    if (nextScrollLeft >= scrollWidth) {
      nextScrollLeft = 0; 
    } else if (nextScrollLeft < 0) {
      nextScrollLeft = scrollWidth; 
    }

    cardContainer.scrollTo({
      left: nextScrollLeft,
      behavior: 'smooth'
    });
  }