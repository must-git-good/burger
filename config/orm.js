var connection = require("./connection.js");


var orm = {
  selectAll: function(tableName) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableName], function(err, result) {
      if (err) throw err;
      console.log("SelectAll: ", result);
      return result;
    });
  },

//   INSERT INTO TABLE burgers (burger_name) VALUES  (Cheeseburger);

  insertOne: function(tableName, colDesc, tableName) {
    var queryString = "INSERT INTO TABLE ? (?) VALUES (?)";
    console.log(queryString);
    connection.query(queryString, [tableName, colDesc, tableName], function(err, result) {
      if (err) throw err;
      console.log("insertOne: ", result);
      return result;
    });
  },
  updateOne: function(whatToSelect, tableName, whereAt) {
    var queryString = "UPDATE ?? FROM ?? WHERE ??";

    connection.query(queryString, [whatToSelect, tableName, whereAt], function(err, result) {
        if (err) throw err;
        console.log("updateOne: ", result);
        return result;
      }
    );
  }
};

module.exports = orm;
