Function.prototype.deferUntil = function(condition){
  this.interval = setInterval(function(){
    if (!condition()) return;
    clearInterval(this.interval);
    this();
  }.bind(this), 50);
};