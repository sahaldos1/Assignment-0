function titleCaseEdit(title) {
  title = title.split(" ");

    for (var i = 0; i < title.length ; i++) {
        title[i] = title[i][0].toUpperCase() + title[i].substr(1);
    }

    return title.join(" ");
}

// Do not edit this line;
module.exports = titleCaseEdit;