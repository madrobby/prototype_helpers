Element.addMethods({
  redraw: function(element){
    element = $(element);
    var n = document.createTextNode(' ');
    element.appendChild(n);
    (function(){n.parentNode.removeChild(n)}).defer();
    return element;
  }
});