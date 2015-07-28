;(function() {
  var getJSON = function(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = callback;
    request.send();
  };
  var handleResponse = function(e) {
    var items = JSON.parse(e.target.responseText);
    items.forEach(function(item) {
      var dominant, contrastingDominant, subDominant, contrastingSubDominant, pop, hex
      palette = document.createElement('div');
      palette.className = 'palette'
      title = document.createElement('h3');
      title.innerHTML = item.title

      var color = item.colors;
      //dominant color
      dominant = document.createElement('div');
      dominant.className = "dominant";
      dominant.style.backgroundColor = color.dominant;
      hex = document.createElement('div');
      hex.className = "hex";
      hex.innerHTML = color.dominant;
      dominant.appendChild(hex);

      //contrastingDominant
      contrastingDominant = document.createElement('div');
      contrastingDominant.className = "contrastingDominant";
      contrastingDominant.style.backgroundColor = color.contrastingDominant;
      hex = document.createElement('div');
      hex.className = "hex";
      hex.innerHTML = color.contrastingDominant;
      contrastingDominant.appendChild(hex);

      //subDominant
      subDominant = document.createElement('div');
      subDominant.className = "subDominant";
      subDominant.style.backgroundColor = color.subDominant;
      hex = document.createElement('div');
      hex.className = "hex";
      hex.innerHTML = color.subDominant;
      subDominant.appendChild(hex);

      //contrastingDominant
      contrastingSubDominant = document.createElement('div');
      contrastingSubDominant.className = "contrastingSubDominant";
      contrastingSubDominant.style.backgroundColor = color.contrastingSubDominant;
      hex = document.createElement('div');
      hex.className = "hex";
      hex.innerHTML = color.contrastingSubDominant;
      contrastingSubDominant.appendChild(hex);

      //pop
      pop = document.createElement('div');
      pop.className = "pop";
      pop.style.backgroundColor = color.pop;
      hex = document.createElement('div');
      hex.className = "hex";
      hex.innerHTML = color.pop;
      pop.appendChild(hex);


      palette.appendChild(title);
      palette.appendChild(dominant);
      palette.appendChild(contrastingDominant);
      palette.appendChild(subDominant);
      palette.appendChild(contrastingSubDominant);
      palette.appendChild(pop);

      document.body.appendChild(palette, document.body);
    });

  };

  getJSON('/palettes.json', handleResponse);

}());
