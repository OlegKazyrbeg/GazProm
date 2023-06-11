const tl = gsap.timeline()

tl.fromTo('.header__nakubani__logo',
        {
            opacity: 0,
            y: -30,
        },
        {
            duration: 1,
            opacity: 1,
            y: 0,
        }, '=1.5'
)
    .fromTo('.header__nakubani__list li',
        {
            opacity: 0,
            y: -30,
        },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            delay: -0.5,
        }, 1
)
    .fromTo('.banner__nakubani__block',
    {
        opacity: 0,
        y: 50,
    },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3
    }, '=-1.5'
)
    .fromTo('.banner__nakubani__title',
    {
        opacity: 0,
        y: 25,
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 1,
        delay: -0.5
    },
)
    .fromTo('.banner__nakubani__list li',
    {
        opacity: 0,
        y: 10,
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.15,
    }, '=-1'
)