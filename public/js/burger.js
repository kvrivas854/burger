$(".devour-btn").on("click", function(event) {
    var id = $(this).data("id");

    var newState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax({
      url: "/burger/" + id, 
      type: "PUT",
      data: newState
    }).then(() => {
          console.log("successful");
        // Reload the page to get the updated list
        location.reload();
      })
  });