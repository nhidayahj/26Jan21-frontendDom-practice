function getFormValues() {
  // Q1. Extract out the email address from the form and store it in a variable named email
  let email = document.querySelector("#email-address").value;

  // Q2. Extract out the selected phone model from the form and store it in a variable named model
  //Doing linear search
  let selectedPhone = document.querySelectorAll(".phone-type");
  let model = null;
  for (let i of selectedPhone) {
    if (i.checked) {
      model = i.value;
      break;
    }
  }

  // Q3. Extract out the required services, and store it in a variable named services
  //since checkboxes, needs to be an array
  let selectedServices = document.querySelectorAll(".services");
  let services = [];
  for (let s of selectedServices) {
    if (s.checked) {
      services.push(s.value);
    }
  }

  // Q4. Extact out the selected pickup point and store it in a variable named pickup
  let chosenLoc = document.querySelector("#pick-up");
  let pickup = chosenLoc.value;

  // leave this line alone!
  return [email, model, services, pickup];
}

// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
  module.exports = getFormValues;
} catch (e) {}
