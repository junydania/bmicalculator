function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
}

Person.prototype.calculate_bmi = function() {
  debugger;
  calculator = new BMICalculator();
  calculator.metric_bmi(this);
};
