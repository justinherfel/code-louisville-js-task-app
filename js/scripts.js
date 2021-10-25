var app = new function() {
    this.el = document.getElementById('tasks');
    globalThis.tasks = []

    // Create
    this.FetchAll = function() {

    };

    // Read
    this.Add = function() {

    };

    // Update
    this.Edit = function(item) {
        var data = '';

        if (globalThis.tasks.length > 0) {
            for (i=0; i < this.tasks.length; i++) {
                data += '<tr>';
                data += '<td>' + (i + 1) + '. ' + this.task[i] + '</td>';
                data += '<td><button onclick="app.Edit('+i+')" class = "btn btn-warning">Edit</td>';
                data += '<td><button onclick="app.Delete('+i+')" class = "btn btn-danger">Delete</td>';
                data += '</tr>'
            }
        }
        this.Count(this.tasks.length);
        return this.el.innerHTML = data
    };

    // Delete

    this.Delete = function(item) {

    };

    this.Count = function(data) {

    };
}

// Continually updating the to-do list
app.FetchAll();

function closeInput() {
    document.getElementById('edit-box').style.display = 'none';
}