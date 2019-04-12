let employeeList = require('../app/data/employees.js');


module.exports = function(app) {

    app.get('/api/employees', function (req, res) {
      res.json(employeeList);
    });

    app.post('/api/employees', function (req, res) {

          employeeList.push(req.body);
        res.end();
      });

}
