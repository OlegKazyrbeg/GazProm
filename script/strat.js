const tl = gsap.timeline()

tl.set('.loader-2', {yPercent: 100,})
  .set('.loader-1__image img', {opacity: 0, y: -70})

    .to('.loader-1__image img',
    {
        opacity: 1,
        duration: 0.8,
        y: -100,
        delay: 1
    }
)
    .to('.loader-2',
    {
        yPercent: 0,
        duration: 0.5,
    }
)
    .to('.loader-2',
    {
        yPercent: -100,
        duration: 0.5,
        delay: 0.25
    }, '=0.5'
)
    .to('.loader',
    {
        yPercent: -100,
        duration: 0.5,
        delay: -0.25
    }, '=-1'

)

gsap.fromTo('.strategy__info__paragraph',
    {
        opacity: 0,
        y: 50,
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2
    }, '=-1.1'
)
    