const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  console.log(input.value.length);

  input.classList.add("valid");
  input.classList.add("invalid");

  if (input.getAttribute("data-length") > input.value.length) {
    return input.classList.replace("valid", "invalid");
  }
  if (input.getAttribute("data-length") == input.value.length) {
    return input.classList.replace("invalid", "valid");
  }
});
