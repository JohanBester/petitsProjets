document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  // to see what the click even brings back...
  console.log(Object.fromEntries(new FormData(event.target)));

  // method to convert from entries into an array
  Array.from(event.target.elements)
    .filter(({ id }) => id)
    .reduce((accumulator, { id, value }) => ({
      ...accumulator,
      ...{ [id]: value },
    }));

  // The FormData() constructor creates a new FormData object with all the form entries
  const myFormData = new FormData(form);

  // convert your 'form data' into an _object.
  // for forms that use checkboxes & radio-buttons
  Object.fromEntries(myFormData);
});
