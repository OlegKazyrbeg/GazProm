//section scroll
$(document).ready(function() {
	$('#pagepiling').pagepiling({
        verticalCentered: true,
        loopBottom: true,
        loopTop: true,
        navigation: {
            'position': 'left',
        },
        scrollingSpeed: 400,
        touchSensitivity: 5,
    });
});

//animation

gsap.fromTo('.main__create__title',
    {
        opacity: 0,
        x: -50,
    },
    {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 1
    }
)

gsap.fromTo('.create__info__paragraph.first',
    {
        opacity: 0,
        y: 50,
    },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        delay: 1.4
    }
)
