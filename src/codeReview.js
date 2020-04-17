// Business logic interface

export class GlacticAge {
  constructor(birthday, lifeExpectancy) {
    this.birthday = birthday;
    this.lifeExpectancy = lifeExpectancy;
    this.earthDay = this.getEarthDay();
  }
  getEarthDay() {
    const today = new Date();
    const oneEarthDay = 24 * 60 * 60 * 1000;
    let earthDay = ((today.getTime() - (this.birthday).getTime()) / (oneEarthDay)).toFixed(1);
    return earthDay;
  }
}