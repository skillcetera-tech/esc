var a = 0;

$(window).scroll(function () {
    var oTop = $('#counter').offset().top - window.innerHeight;

    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function () {
            var $this = $(this);
            var countTo = $this.attr('data-count');

            $this.css({ opacity: 0 });

            $({ countNum: $this.text() }).animate(
                { countNum: countTo },
                {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum) + '+');
                    },
                    complete: function () {
                        $this.text(this.countNum + '+');
                    },
                }
            );

            $this.animate({ opacity: 1 }, 2000);
        });
        a = 1;
    }
});
