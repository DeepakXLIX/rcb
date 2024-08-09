const state = {};
const carouselList = document.querySelector('.carousel__list');


const temp1 = document.querySelectorAll('.line_item');
const downLine = Array.from(temp1);

const carouselItems = document.querySelectorAll('.carousel__item');
const elems = Array.from(carouselItems);

carouselList.addEventListener('click', function (event) {
    var newActive = event.target;
    var isItem = newActive.closest('.carousel__item');


    let lineNewActive;
    if (newActive.innerHTML == 3)
        lineNewActive = downLine.find((elem) => elem.dataset.pos == 'c');
    else if (newActive.innerHTML == 2)
        lineNewActive = downLine.find((elem) => elem.dataset.pos == 'b');
    else
        lineNewActive = downLine.find((elem) => elem.dataset.pos == 'a');

    downLine.forEach(element => {
        if (element.classList.contains('line__item_active'))
            element.classList.remove('line__item_active');
    });

    lineNewActive.classList.add('line__item_active');

    if (!isItem || newActive.classList.contains('carousel__item_active')) {
        return;
    };

    update(newActive);
});

setInterval(() => {
    let auto_play = elems.find((elem) => elem.dataset.pos == 2);
    update(auto_play);
    let lineNewActive;
    if (auto_play.innerHTML == 3)
        lineNewActive = downLine.find((elem) => elem.dataset.pos == 'c');
    else if (auto_play.innerHTML == 2)
        lineNewActive = downLine.find((elem) => elem.dataset.pos == 'b');
    else
        lineNewActive = downLine.find((elem) => elem.dataset.pos == 'a');

    downLine.forEach(element => {
        if (element.classList.contains('line__item_active'))
            element.classList.remove('line__item_active');
    });

    lineNewActive.classList.add('line__item_active');


}, 2000);;


const update = function (newActive) {
    const newActivePos = newActive.dataset.pos;

    const third = elems.find((elem) => elem.dataset.pos == 3);
    const second = elems.find((elem) => elem.dataset.pos == 2);
    const first = elems.find((elem) => elem.dataset.pos == 1);


    third.classList.remove('carousel__item_active');
    newActive.classList.add('carousel__item_active');


    [third, second, first].forEach(item => {
        var itemPos = item.dataset.pos;
        item.dataset.pos = getPos(itemPos, newActivePos)
    });
};

const getPos = function (itemPos, newActivePos) {


    let diff = newActivePos - itemPos;
    if (diff > 0)
        return (parseInt(itemPos) + 1);
    else if (diff < 0)
        return -diff;
    else
        return 3;


}




//Gsap
let tl = gsap.timeline();
tl.from('#section-b .row .common-cls:first-child h4', {
    y: 40,
    delay: 1,
    scrollTrigger: {
        trigger: "#section-b .row .common-cls:first-child h4",
        scroller: "body",
        start: "top 50%",
        end: "top 40%",
        scrub: 2,
    }
})

tl.from('#section-b .row .common-cls:nth-child(2) .inside-col h2', {
    x: 25,
    opacity: 0,
    scrollTrigger: {
        trigger: "#section-b .row .common-cls:nth-child(2) .inside-col h2",
        scroller: "body",
        start: "top 50%",
        end: "top 40%",
        scrub: 2,
    }
})
tl.from("#drop .container-fluid .row .common-col:first-child .inside-div h2", {
    opacity: 0,
    scale: 0,
    scrollTrigger: {
        trigger: "#drop .container-fluid .row .common-col:first-child .inside-div h2 ",
        scroller: "body",
        start: "top 80%",
        end: "top 60%",
        scrub: 2,
    }
})

tl.from('#drop .container-fluid .row .common-col:nth-child(2) .inside-div h2', {

    opacity: 0,
    x: -50,
    scrollTrigger: {
        trigger: "#drop .container-fluid .row .common-col:nth-child(2) .inside-div h2",
        scroller: "body",
        start: "top 50%",
        end: "top 30%",
        scrub: 1,
    }
})


tl.from('#live-packs .container-fluid .common-cls:first-child h2', {

    opacity: 0,
    scale: 0,
    scrollTrigger: {
        trigger: "#live-packs .container-fluid .common-cls:first-child h2",
        scroller: "body",
        start: "top 80%",
        end: "top 60%",
        scrub: 2,

    }
})
tl.from('#live-packs .container-fluid .common-cls:first-child ul li img', {

    opacity: 0,
    x: -50,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#live-packs .container-fluid .common-cls:first-child ul li img",
        scroller: "body",
        start: "top 80%",
        end: "top 60%",
        scrub: 2,

    }
})