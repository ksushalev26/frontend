//https://ru.stackoverflow.com/questions/671886/%D0%92%D1%8B%D0%B2%D0%BE%D0%B4-json-%D0%B2-html

$(function () {

//DATA

    var obj = {
        data: [],
    };

//DATA

// Controller

    $('button#add').click(function () {
        $('.add').css('display', 'block');
    });

    $('button#submit').click(function () {

        $('.add').css('display', 'none');

        var newPerson = {
            'firstName': $('input[name=firstName]').val(),
            'lastName': $('input[name=lastName]').val(),
            'password': $('input[name=password]').val(),
            'phone': $('input[name=phone]').val()
        }

        add(newPerson);
        clearInputs();
    });

    $('button#get').click(function () {
        get();
    });

    $('button#update').click(function () {
        $('.update').css('display', 'block');

    })

    function clearInputs() {
        $('input[name=firstName]').val('');
        $('input[name=lastName]').val('');
        $('input[name=password]').val('');
        $('input[name=phone]').val('');
    }

    $('button#updateUser').click(function () {
        $('.update').css('display', 'none');
        update();
        clearUpdateInputs();
    });

    function clearUpdateInputs() {
        $('input[name=updateserverId]').val('');
        $('input[name=updatefirstName]').val('');
        $('input[name=updatelastName]').val('');
        $('input[name=updatepassword]').val('');
        $('input[name=updatephone]').val('');
    };

    function clearDelete() {
        $('input[name=deleteserverId]').val('');
    }


    $('button#del').click(function () {
        $('.delete').css('display', 'block');

    });

    $('button#deleteUser').click(function () {
        $('.delete').css('display', 'none');
        deleteUser();
        clearDelete()
    });

// Controller

// API
    function get() {
        $.ajax({
            url: 'http://localhost:4000/data',
            method: 'GET',
            dataType: 'json',
            success: function (res) {
                console.log(res)
                obj.data = res;
                renderTable();
            },
            error: function () {
                $('.container').html('error')
            }
        });
    }


    function updatePersonInObjData(updatePerson) {
        $(obj.data).each(function (index, item) {
            if (item.id === updatePerson.id) {
                obj.data[index] = updatePerson;
            }
        });
    }

    function deletePersonInObjData(dellId) {
        $(obj.data).each(function (index, item) {
            if (item.id === dellId) {
                obj.data.splice(index, 1);
            }
        });
    }


    function update() {
        var updatePerson = {
            'id': $('input[name=updateserverId]').val(),
            'firstName': $('input[name=updatefirstName]').val(),
            'lastName': $('input[name=updatelastName]').val(),
            'password': $('input[name=updatepassword]').val(),
            'phone': $('input[name=updatephone]').val()
        }

        $.ajax({
            url: 'http://localhost:4000/data/' + updatePerson.id,
            method: 'PUT',
            dataType: 'json',
            data: updatePerson,
            success: function (res) {
                console.log(res)
                updatePersonInObjData(updatePerson);
                renderTable();
            },
            error: function () {
                $('.container').html('error')
            }
        });

    }


    function deleteUser(delId) {
        var delId = $('input[name=deleteserverId]').val();
        $.ajax({
            url: 'http://localhost:4000/data/' + delId,
            method: 'DELETE',
            success: function (res) {
                console.log(res)
                deletePersonInObjData(delId);
                renderTable();
            },
            error: function () {
                $('.container').html('error')
            }
        });
    }

    function add(newPerson) {
        $.ajax({
            url: 'http://localhost:4000/data',
            method: 'POST',
            dataType: 'json',
            data: newPerson,
            success: function (res) {
                console.log(res)
                obj.data.push(res)
                renderTable();
            },
            error: function () {
                $('.container').html('error')
            }
        });
    }

// API


// veiw

    function renderTable() {
        $('#persons tbody').html('');
        console.log(obj.data);
        $(obj.data).each(function (index, item) {
            $('#persons tbody').append('<tr><td>' + index + '</td><td>' + item.firstName + '</td><td>' + item.lastName + '</td><td>' + item.password + '</td><td>' + item.phone + '</td><td>' + item.id + '</td</tr>');
        });

    };

// veiw

});