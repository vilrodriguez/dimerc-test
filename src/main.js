document.addEventListener('DOMContentLoaded', function(event) {
  // Button Builder
  var ButtonCreator = function(container) {
    this.container = container;
    this.buttons = [];
  };

  ButtonCreator.prototype.appendButton = function(number) {
    // Do not change this method, is not part of the test
    var element = document.createElement('button');
    element.innerText = 'Button # ' + (number + 1);
    element.className = 'btn';
    this.container.appendChild(element);
    this.buttons.push(element);
  };

  ButtonCreator.prototype.addEventListeners = function() {
    this.buttons.forEach((btn) => {
      btn.addEventListener('click', () =>{
        alert(`Button # ${this.buttons.indexOf(btn) + 1} pressed`);
      })
    })
    /* Previous code with error 
    for (var i = 0; i < this.buttons.length; ++i) {
      console.log(this.buttons.length);
      this.buttons[i].addEventListener('click', function() {
        alert('Button #' + this.buttons.indexOf(btn) + 1 + ' pressed!');
      });
    } */
  };

  // Initialization: Use button builder to generate 10 buttons
  var builder = new ButtonCreator(document.getElementById('container'));
  for (var i = 0; i < 10; ++i)
  {
    builder.appendButton(i);
  }
  builder.addEventListeners();
});
