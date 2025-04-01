$(document).ready(function () {
    var csvFilePath = './assets/data/voting.csv';

    Papa.parse(csvFilePath, {
        download: true,
        header: false,
        complete: function (results) {
            var data = results.data.slice(2);

            data.sort(function (a, b) {
                return parseFloat(b[9]) - parseFloat(a[9]);
            });

            var tbody = $("#results-table tbody");
            $.each(data, function (i, row) {
                var candidateName = row[1],
                    totalScore = row[9];

                var tr = $("<tr></tr>");
                tr.append($("<td></td>").text(candidateName));
                tr.append($("<td></td>").text(totalScore));
                tbody.append(tr);
            });
        },
        error: function (err) {
            console.error("Error loading CSV file:", err);
        }
    });
});
