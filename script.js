function convert(category) {
  var inputValue;
  var fromUnit;
  var toUnit;
  var resultPlaceholder;

  switch (category) {
    case "length":
      inputValue = parseFloat(document.getElementById("lengthInputValue").value);
      fromUnit = document.getElementById("lengthFromUnit").value;
      toUnit = document.getElementById("lengthToUnit").value;
      resultPlaceholder = document.getElementById("lengthResult");
      break;

    case "weight":
      inputValue = parseFloat(document.getElementById("weightInputValue").value);
      fromUnit = document.getElementById("weightFromUnit").value;
      toUnit = document.getElementById("weightToUnit").value;
      resultPlaceholder = document.getElementById("weightResult");
      break;

    case "time":
      inputValue = parseFloat(document.getElementById("timeInputValue").value);
      fromUnit = document.getElementById("timeFromUnit").value;
      toUnit = document.getElementById("timeToUnit").value;
      resultPlaceholder = document.getElementById("timeResult");
      break;

    case "area":
      inputValue = parseFloat(document.getElementById("areaInputValue").value);
      fromUnit = document.getElementById("areaFromUnit").value;
      toUnit = document.getElementById("areaToUnit").value;
      resultPlaceholder = document.getElementById("areaResult");
      break;

    case "volume":
      inputValue = parseFloat(document.getElementById("volumeInputValue").value);
      fromUnit = document.getElementById("volumeFromUnit").value;
      toUnit = document.getElementById("volumeToUnit").value;
      resultPlaceholder = document.getElementById("volumeResult");
      break;

    case "temperature":
      inputValue = parseFloat(document.getElementById("tempInputValue").value);
      fromUnit = document.getElementById("tempFromUnit").value;
      toUnit = document.getElementById("tempToUnit").value;
      resultPlaceholder = document.getElementById("tempResult");
      break;

    default:
      return;
  }

  // Call the appropriate conversion function based on the category
  var result = convertUnits(inputValue, fromUnit, toUnit, category);

  // Update the result placeholder
  resultPlaceholder.innerHTML = result;
}

function convertUnits(value, fromUnit, toUnit, category) {
  if (fromUnit === toUnit) {
    return "Please select different units for conversion.";
  }

  switch (category) {
    case "length":
      return convertLength(value, fromUnit, toUnit);
    case "weight":
      return convertWeight(value, fromUnit, toUnit);
    case "time":
      return convertTime(value, fromUnit, toUnit);
    case "area":
      return convertArea(value, fromUnit, toUnit);
    case "volume":
      return convertVolume(value, fromUnit, toUnit);
    case "temperature":
      return convertTemperature(value, fromUnit, toUnit);
    default:
      return "Invalid category";
  }
}

function convertLength(value, fromUnit, toUnit) {
  switch (fromUnit) {
    case "meter":
      switch (toUnit) {
        case "kilometer":
          return value * 0.001 + " km";
        case "centimeter":
          return value * 100 + " cm";
        default:
          return "Invalid conversion";
      }
    case "kilometer":
      switch (toUnit) {
        case "meter":
          return value * 1000 + " m";
        case "centimeter":
          return value * 100000 + " cm";
        default:
          return "Invalid conversion";
      }
    case "centimeter":
      switch (toUnit) {
        case "meter":
          return value * 0.01 + " m";
        case "kilometer":
          return value * 0.00001 + " km";
        default:
          return "Invalid conversion";
      }
    default:
      return "Invalid conversion";
  }
}

function convertWeight(value, fromUnit, toUnit) {
  switch (fromUnit) {
    case "gram":
      switch (toUnit) {
        case "kilogram":
          return value * 0.001 + " kg";
        case "pound":
          return value * 0.00220462 + " lb";
        default:
          return "Invalid conversion";
      }
    case "kilogram":
      switch (toUnit) {
        case "gram":
          return value * 1000 + " g";
        case "pound":
          return value * 2.20462 + " lb";
        default:
          return "Invalid conversion";
      }
    case "pound":
      switch (toUnit) {
        case "gram":
          return value * 453.592 + " g";
        case "kilogram":
          return value * 0.453592 + " kg";
        default:
          return "Invalid conversion";
      }
    default:
      return "Invalid conversion";
  }
}

function convertTime(value, fromUnit, toUnit) {
  switch (fromUnit) {
    case "second":
      switch (toUnit) {
        case "minute":
          return value / 60 + " min";
        case "hour":
          return value / 3600 + " hr";
        default:
          return "Invalid conversion";
      }
    case "minute":
      switch (toUnit) {
        case "second":
          return value * 60 + " s";
        case "hour":
          return value / 60 + " hr";
        default:
          return "Invalid conversion";
      }
    case "hour":
      switch (toUnit) {
        case "second":
          return value * 3600 + " s";
        case "minute":
          return value * 60 + " min";
        default:
          return "Invalid conversion";
      }
    default:
      return "Invalid conversion";
  }
}

function convertArea(value, fromUnit, toUnit) {
  switch (fromUnit) {
    case "squaremeter":
      switch (toUnit) {
        case "hectare":
          return value * 0.0001 + " ha";
        case "squarefoot":
          return value * 10.7639 + " ft²";
        default:
          return "Invalid conversion";
      }
    case "hectare":
      switch (toUnit) {
        case "squaremeter":
          return value * 10000 + " m²";
        case "squarefoot":
          return value * 107639 + " ft²";
        default:
          return "Invalid conversion";
      }
    case "squarefoot":
      switch (toUnit) {
        case "squaremeter":
          return value * 0.092903 + " m²";
        case "hectare":
          return value * 9.2903e-6 + " ha";
        default:
          return "Invalid conversion";
      }
    default:
      return "Invalid conversion";
  }
}

function convertVolume(value, fromUnit, toUnit) {
  switch (fromUnit) {
    case "cubicmeter":
      switch (toUnit) {
        case "liter":
          return value * 1000 + " L";
        case "gallon":
          return value * 264.172 + " gal";
        default:
          return "Invalid conversion";
      }
    case "liter":
      switch (toUnit) {
        case "cubicmeter":
          return value * 0.001 + " m³";
        case "gallon":
          return value * 0.264172 + " gal";
        default:
          return "Invalid conversion";
      }
    case "gallon":
      switch (toUnit) {
        case "cubicmeter":
          return value * 0.00378541 + " m³";
        case "liter":
          return value * 3.78541 + " L";
        default:
          return "Invalid conversion";
      }
    default:
      return "Invalid conversion";
  }
}

function convertTemperature(value, fromUnit, toUnit) {
  switch (fromUnit) {
    case "celsius":
      switch (toUnit) {
        case "fahrenheit":
          return (value * 9/5) + 32 + " °F";
        case "kelvin":
          return value + 273.15 + " K";
        default:
          return "Invalid conversion";
      }
    case "fahrenheit":
      switch (toUnit) {
        case "celsius":
          return (value - 32) * 5/9 + " °C";
        case "kelvin":
          return (value + 459.67) * 5/9 + " K";
        default:
          return "Invalid conversion";
      }
    case "kelvin":
      switch (toUnit) {
        case "celsius":
          return value - 273.15 + " °C";
        case "fahrenheit":
          return (value * 9/5) - 459.67 + " °F";
        default:
          return "Invalid conversion";
      }
    default:
      return "Invalid conversion";
  }
}
