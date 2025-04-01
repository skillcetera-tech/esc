$(document).ready(function () {
    Papa.parse("./assets/data/contestants.csv", {
        download: true,
        header: true,
        complete: function (results) {
            var names = results.data;
            var $namesSlide = $(".names-slide");
            $.each(names, function (index, item) {
                var html = '<div class="name-block">' +
                    '<span class="name" style="color: #fff; text-align: center; font-family: Roboto, sans-serif;">' + item.name + '</span><br/>' +
                    '<span class="school" style="color: #fff; text-align: center; font-family: Roboto, sans-serif;">' + item.school + '</span>' +
                    '</div>';
                $namesSlide.append(html);
            });
        }
    });
});