function BMICalculator() {

}
BMICalculator.prototype.metric_bmi = function(obj) {
  var weight = obj.weight;
  var height = obj.height;

  if (weight > 0 && height > 0) {
    var finalBMI = weight / (height /100 * height / 100);
    obj.bmiValue = parseFloat(finalBMI.toFixed(2));
    setBMIMessage(obj);
  }
};

BMICalculator.prototype.imperial_bmi = function(obj) {
  var weight = obj.weight;
  var height = obj.height;

  if (weight > 0 && height > 0) {
    var finalBMI = (weight * 703) / (height  * height );
    obj.bmiValue = parseFloat(finalBMI.toFixed(2));
    setBMIMessage(obj);
  }

};

function setBMIMessage (obj) {
  if (obj.bmiValue < 18.5) {
    obj.bmiMessage = "underweight";
  }

  else if (obj.bmiValue > 18.5 && obj.bmiValue < 25){
    obj.bmiMessage = "Normal";
  }

  else if(obj.bmiValue > 25 && obj.bmiValue < 30) {
    obj.bmiMessage = "overweight";
  }
  else if (obj.bmiValue > 30 && obj.bmiValue < 60) {
    obj.bmiMessage = "Obese";
  }
  else
  {obj.bmiMessahe = "above the weight of a normal human";}
}
