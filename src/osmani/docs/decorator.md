```js
(function example1() {
  function Vehicle( vehicleType ) {
    this.vehicleType = vehicleType || 'car';
    this.model = 'default';
    this.license = '00000-000';
  }

  const testInstance = new Vehicle('car');
  const truck = new Vehicle('truck');
  truck.setModel = function(modelName) {
    this.model = modelName;
  }
  truck.setColor = function (color) {
    this.color = color;
  }

  truck.setModel('CAT');
  truck.setColor('blue');
  console.log(truck);

  var secondInstance = new Vehicle('car');
  console.log(secondInstance);
})();

(function example2() {
  function MacBook() {
    this.cost = () => 997;
    this.screenSize = () => 13.3;
  }

  // Decorator 1
  function Memory(macbook) {
    const v = macbook.cost();
    macbook.cost = () => v + 75;
  }

  // Decorator 2
  function Engraving(macbook) {
    const v = macbook.cost();
    macbook.cost = () => v + 200;
  }

  // Deocrator 3
  function Insurance(macbook) {
    const v = macbook.cost();
    macbook.cost = () => v + 250;
  }

  const mb = new MacBook();
  Memory(mb);
  Engraving(mb);
  Insurance(mb);
  console.log(mb.cost(), mb.screenSize());
})();
```
