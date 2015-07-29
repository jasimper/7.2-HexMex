;(function() {
  var getJSON = function(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = callback;
    request.send();
  };
  var handleResponse = function(event) {
    var paletteGroups = JSON.parse(event.target.responseText);
    paletteGroups.forEach(function(palatteGroup) {
      var dominant,
          contrastingDominant,
          subDominant,
          contrastingSubDominant,
          pop,
          hex
      palette = document.createElement('div');
      palette.className = 'palette'
      palette.setAttribute('data-js', palatteGroup.keyword)

      title = document.createElement('h3');
      title.innerHTML = palatteGroup.title;
      palette.appendChild(title);

      keyword = document.createElement('p');
      keyword.innerHTML = palatteGroup.keyword;
      palette.appendChild(keyword);

      var color = palatteGroup.colors;

      //dominant color
      dominant = document.createElement('div');
      dominant.className = "dominant";
      dominant.style.backgroundColor = color.dominant;
      dominant.style.color = color.dominant;
      hex = document.createElement('div');
      hex.className = "hex";
      hex.innerHTML = color.dominant;
      dominant.appendChild(hex);
      palette.appendChild(dominant);

      //contrastingDominant
      contrastingDominant = document.createElement('div');
      contrastingDominant.className = "contrastingDominant";
      contrastingDominant.style.backgroundColor = color.contrastingDominant;
      contrastingDominant.style.color = color.contrastingDominant;
      hex = document.createElement('div');
      hex.className = "hex";
      hex.innerHTML = color.contrastingDominant;
      contrastingDominant.appendChild(hex);
      palette.appendChild(contrastingDominant);

      //subDominant
      subDominant = document.createElement('div');
      subDominant.className = "subDominant";
      subDominant.style.backgroundColor = color.subDominant;
      subDominant.style.color = color.subDominant;
      hex = document.createElement('div');
      hex.className = "hex";
      hex.innerHTML = color.subDominant;
      subDominant.appendChild(hex);
      palette.appendChild(subDominant);

      //contrastingDominant
      contrastingSubDominant = document.createElement('div');
      contrastingSubDominant.className = "contrastingSubDominant";
      contrastingSubDominant.style.backgroundColor = color.contrastingSubDominant;
      contrastingSubDominant.style.color = color.contrastingSubDominant;
      hex = document.createElement('div');
      hex.className = "hex";
      hex.innerHTML = color.contrastingSubDominant;
      contrastingSubDominant.appendChild(hex);
      palette.appendChild(contrastingSubDominant);

      //pop
      pop = document.createElement('div');
      pop.className = "pop";
      pop.style.backgroundColor = color.pop;
      pop.style.color = color.pop;
      hex = document.createElement('div');
      hex.className = "hex";
      hex.innerHTML = color.pop;
      pop.appendChild(hex);
      palette.appendChild(pop);

      document.body.appendChild(palette, document.body);
    });

  };

  getJSON('/palettes.json', handleResponse);

}());
