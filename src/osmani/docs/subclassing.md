```js
(function subclassingExample(){
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = 'male';
    }
    Person.prototype.getPersonDescription = function() {
        return `${this.firstName} ${this.lastName} ${this.gender}`;
    }

    function SuperHero(firstName, lastName, powers) {
        Person.call(this, firstName, lastName);
        this.powers = powers;
    }
    SuperHero.prototype = Object.create(Person.prototype);
    SuperHero.prototype.getSuperHeroDescription = function () {
        return this.getPersonDescription() + ` ${this.powers.join(',')}`;
    }

    const superMan = new SuperHero('Clark', 'Kent', ['flight', 'heat-vision']);
    console.log(superMan.getSuperHeroDescription());

}());
```
