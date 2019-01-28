var DBHelper = require("../../core/DatabaseHelper")
var sequelize = require("sequelize")

exports.getQuestion = function getDataFromDb(number, res) {
    DBHelper.query('SELECT * from questions where challenge_id = ' + number, {
            type: sequelize.QueryTypes.SELECT
        })
        .then(question => {
            console.log(question[0], question.length);
            if (question.length != 0) {
                var challenge = question[0];
                var options = {
                    challenge_id: challenge.challenge_id,
                    title: challenge.title,
                    description: challenge.question,
                    level: challenge.level,
                    input: challenge.input,
                    output: challenge.output,
                    pageName:"dashboardPage"
                }
                return res.render("challenge/index", options);
            } else
                return res.render("404")
        })
}

exports.getQuestionTitles = function getQuestions(req, res) {
    DBHelper.query('SELECT title,level from questions ', {
            type: sequelize.QueryTypes.SELECT
        })
        .then(question => {
            if (question.length != 0) {
                return res.render("dashboard/index", {
                    question,
                    pageName:"dashboardPage"
                });
            } else
                return res.render("404")
        })
}