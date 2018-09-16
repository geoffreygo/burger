// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-eaten").on("click", function(event) {
      var id = $(this).data("id");
      var newEaten = $(this).data("neweat");
  
      var newEatenState = {
        devoured: newEaten
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
          type: "PUT",
            data: newEatenState
        }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $(function() {
      $(".delete").on("click", function(event) {
        var id = $(this).data("id");
        console.log("in delete " + id);
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "DELETE",
        }).then(
          function() {
            location.reload();
          }
        );
      });
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#addBurger").val().trim(),
        devoured: $("[name=eaten]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          location.reload();
        }
      );
    });
  });
  