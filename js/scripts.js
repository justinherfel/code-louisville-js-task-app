
var app = new function() {
    this.el = document.getElementById('tasks');

    this.tasks = []


    // This displays all of the to-do list items (read)
    this.FetchAll = function() {
        var data = '';

        // After user inputs task, this is the function that calls the table row and table cell, edit and delete buttons
        // This is one row of information that follows the html format
        // This if statement is what happens when text is added and button is clicked to submit
        if (this.tasks.length > 0) {
          for (i = 0; i < this.tasks.length; i++) {
            data += '<tr>';
            data += '<td>' + (i + 1) + ". " + this.tasks[i] + '</td>';
            data += '<td><button onclick="app.Edit(' + i + ')" class="btn btn-warning">Edit</button></td>';
            data += '<td><button onclick="app.Delete(' + i + ')" class="btn btn-danger">Delete</button></td>';
            data += '</tr>';
          }
        }

        this.Count(this.tasks.length);
        return this.el.innerHTML = data;
    };

    // This is the create function (create)
    this.Add = function() {
        el = document.getElementById('add-todo');
        // This gets the value
        var task = el.value;

        if (task) {
            // This adds the new value
            this.tasks.push(task.trim());
            // This resets the input value
            el.value = '';
            // This displays the new list
            this.FetchAll();
        }
    };
    
    // This will edit the existing items (update)
    this.Edit = function (item) {
        var el = document.getElementById('edit-todo');
        // This displays the value in the field
        el.value = this.tasks[item];
        // Display the fields
        document.getElementById('edit-box').style.display = 'block';
        self = this;

        document.getElementById('save-edit').onsubmit = function() {
            // Gets the value
            var task = el.value;

            if (task) {
                // Edits the value. What does the '1' refer to?
                self.tasks.splice(item, 1, task.trim());
                // Displays the new list
                self.FetchAll();
                // Hide the fields
                CloseInput();
            }
        }
    };


    // This is the delete function (delete)

    this.Delete = function (item) {
        // Deletes the current row. What does the '1' refer to? Is it the same as above?
        // Splice function adds something or deletes a new item into the array?
        this.tasks.splice(item, 1);
        // Displays the new list
        this.FetchAll();
    };

    // This displays the amount of items on the list and keeps track of the count
    this.Count = function (data) {
        var el = document.getElementById('counter');
        var name = 'Tasks';

        // This if else statement works out the correct grammar of the word 'task'
        if (data) {
            // When there is only 1 task
            if (data == 1) {
                name = 'Task'
            }
            // When task number is > 1
          el.innerHTML = data + ' ' + name;
        }
        // When there are 0 tasks
        else {
          el.innerHTML = 'No ' + name;
        }
    };

}

// Continually updating the to-do list
app.FetchAll();


// Is this a function constructor, with the capital letter?
function CloseInput() {
    document.getElementById('edit-box').style.display = 'none';
}

function CloseInput() {
    document.getElementById('edit-box').style.display = 'none';
}