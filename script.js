document.getElementById('toggleButton').addEventListener('click', function() {
    var moreText = document.getElementById('moreText');
    if (moreText.style.display === 'none') {
      moreText.style.display = 'block';
      this.textContent = 'Mostrar menos';
    } else {
      moreText.style.display = 'none';
      this.textContent = 'Mostrar más';
    }
  });
  document.getElementById('jumpButton').addEventListener('click', function() {
    var muñequito = document.getElementById('muñequito');
    muñequito.style.transition = 'bottom 0.5s';
    muñequito.style.position = 'absolute';
    muñequito.style.bottom = '100px';
  
    setTimeout(function() {
      muñequito.style.bottom = '0';
    }, 500);
  });
  