// returns the columns and values for the insert query
exports.GetInsertionColumnsAndValues = async (data) => {
  var columns = "",
    Values = "",
    count = 0;
  for (key in data) {
    if (key === "Password") {
      columns =
        count !== Object.keys(data).length - 1
          ? columns + key + ","
          : columns + key;
      Values =
        count !== Object.keys(data).length - 1
          ? Values + "'" + EncryptPassword(data[key]) + "'" + ","
          : Values + "'" + EncryptPassword(data[key]) + "'";
    } else {
      columns =
        count !== Object.keys(data).length - 1
          ? columns + key + ","
          : columns + key;
      Values =
        count !== Object.keys(data).length - 1
          ? typeof data[key] === "string"
            ? Values + "'" + data[key] + "'" + ","
            : Values + data[key] + ","
          : typeof data[key] === "string"
            ? Values + "'" + data[key] + "'"
            : Values + data[key];
    }
    count++;
  }
  return {
    columns: columns,
    Values: Values
  };
};

// returns the set conditions for the update query
exports.GetUpdateSetColumns = async (data) => {
  var condition = "", count = 0;
  for (key in data) {
    condition =
      count !== Object.keys(data).length - 1
        ? typeof data[key] === "string"
          ? condition + key + "='" + data[key] + "',"
          : condition + key + "=" + data[key] + ","
        : typeof data[key] === "string"
          ? condition + key + "='" + data[key] + '\''
          : condition + key + "=" + data[key];
    count++;
  }
  return condition;
};