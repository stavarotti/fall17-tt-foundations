/**
 * Adds a todo item.
 *
 * @param {string} container
 * @param {string} todo_desc
 * @param {string} todo_due_date
 * @param {string} priority
 */
function add_todo(container, todo_desc, todo_due_date, priority) {
  var priority_group = "list-group-item-success";

  if (priority == "low") {
    priority_group = "list-group-item-success";
  } else if (priority == "medium") {
    priority_group = "list-group-item-warning";
  } else if (priority == "high") {
    priority_group = "list-group-item-danger";
  }

  var todo_item = '<li class="' + priority_group + ' list-group-item d-flex justify-content-between align-items-center"><span class="todo-due-date">' + todo_due_date + '</span><span class="todo-item-desc">' + todo_desc + '</span><span class="badge badge-primary badge-pill remove">x</span></li>';

  $(container + " ul").append(todo_item);
}

/**
 * Resets the todo field.
 */
function reset_todo_desc() {
  $("#todo-desc").val("");
}

// Adds an event handler for removing todo.
$("body").on("click", ".remove", function (event) {
  // Remove the todo item container.
  $(this).parent().remove();
});

// Adds an event handler for completing a todo.
$("body").on("click", ".todo-item-desc", function (event) {
  $(this).parent().toggleClass('completed');
});

$(document).ready(function () {
  // Get the user input.
  $("#todo-form").submit(function (event) {
    // Get the todo description.
    var todo_desc = $("#todo-desc").val();

    // Get the selected todo list group.
    var todo_list_group = $("#todo-list-groups").val();

    // Get the todo due date.
    var todo_due_date = $("#todo-due-date").val();

    // Get priority group.
    var priority = $("input[name='todo-priority']:checked").val();

    // Only process a non-empty todo.
    if (todo_desc !== "") {
      // Choose the task container and set add the todo
      if (todo_list_group == "todo-current-list") {
        add_todo("#todo-current-list", todo_desc, todo_due_date, priority);
        reset_todo_desc();
      } else if (todo_list_group == "todo-grocery-list") {
        add_todo("#todo-grocery-list", todo_desc, todo_due_date, priority);
        reset_todo_desc();
      } else if (todo_list_group == "todo-long-term-list") {
        add_todo("#todo-long-term-list", todo_desc, todo_due_date, priority);
        reset_todo_desc();
      }
    }

    event.preventDefault();
  });
});
