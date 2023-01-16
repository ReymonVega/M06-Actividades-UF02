//Ejercicio 1

function checkHumidityLevel(humidityPercentage) {
    if (humidityPercentage > 70) {
      throw new Error("Humidity level too high!");
    }

  }

  checkHumidityLevel(60);
  checkHumidityLevel(100);

  //Ejercicio 2

  class ArgumentError extends Error {}
class OverheatingError extends Error {
  constructor(temp) {
    super();
    this.temperature = temp;
  }
}

function reportOverheating(temp) {
  if (temp === null) {
    throw new ArgumentError("Sensor is broken");
  }
  if (temp > 500) {
    throw new OverheatingError(temp);
  }
}

reportOverheating(null);


reportOverheating(800);



//Ejercicio 3

function monitorTheMachine(actions) {
    actions.check();
    actions.alertDeadSensor();
    actions.alertOverheating();
    actions.shutdown();
}

