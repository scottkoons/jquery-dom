// Part Two - Movies App!
// Build an application that uses jQuery to do the following:

// Contains a form with two inputs for a title and rating along with a button to submit the form.
// When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.
// When the button to remove is clicked, remove each title and rating from the DOM.

// Further Study
// Ensure that the rating of a movie can only be between 0 and 10.
// Ensure that a title has at least 2 characters in it.
// Allow users to sort alphabetically by the title of the movie or by the rating of the movie from lowest to highest and vice versa.
$(document).ready(function () {
  $(".add-row").click(function () {
    let name = $("#name").val();
    let rating = $("#rating").val();
    let markup =
      "<tr><td><input type='checkbox' name='record'></td><td>" +
      name +
      "</td><td>" +
      rating +
      "</td></tr>";
    $("table tbody").append(markup);
  });

  // Find and remove selected table rows
  $(".delete-row").click(function () {
    $("table tbody")
      .find('input[name="record"]')
      .each(function () {
        if ($(this).is(":checked")) {
          $(this).parents("tr").remove();
        }
      });
  });
});
