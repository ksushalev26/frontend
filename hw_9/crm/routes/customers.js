module.exports.all = function(req, res) {
    req.getConnection(function(err, connection) {
        connection.query('SELECT * FROM customers', function(err, rows) {
            if (err) throw new Error;
            res.render('customers', {page_title: 'IMT-CRM Users', data: rows});
        });
    });
};

module.exports.add = function(req, res) {
    res.render('add_customer', {page_title: 'Add users in CRM system'});
};

module.exports.edit = function(req, res) {
    var id = req.params.id;
    req.getConnection(function(err, connection) {
        connection.query('SELECT * FROM customers WHERE id = ?', [id], function(err, rows) {
            if (err) throw new Error;
            res.render('edit_customer', {page_title: 'Change user in CRM system', data: rows});
        });
    });
};

module.exports.save = function(req, res) {
    var input = req.body;
    console.log(req.body);
    req.getConnection(function(err, connection) {
        var data = {
            name: input.name,
            address: input.address,
            email: input.email,
            phone: input.phone
        };
        // let sql = `INSERT INTO customers (name, adress, email, phone) VALUES ('${data.name}', '${data.address}', '${data.email}', '${data.phone}')`;
        let sql = `INSERT INTO customers SET ?`;
        connection.query(sql, [data],  function(err, rows) {
            if (err) throw new Error;
            console.log("Number of records inserted: " + rows.affectedRows);
            res.redirect('/cusromers');
        });
    });
};

module.exports.edit_save = function(req, res) {
    var input = req.body;
    var id = req.params.id;
    req.getConnection(function(err, connection) {
        var data = {
            name: input.name,
            address: input.address,
            email: input.email,
            phone: input.phone
        };
        connection.query('UPDATE customers SET ? WHERE id = ?', [data, id], function(err, rows) {
            if (err) throw new Error;
            res.redirect('/customers');
        });
    });
};

module.exports.delete = function(req, res) {
    var id = req.params.id;
    req.getConnection(function(err, connection) {
        connection.query('DELETE FROM customers WHERE id = ?', [id], function(err, rows) {
            if (err) throw new Error;
            res.redirect('/customers');
        });
    });
};