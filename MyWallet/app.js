const carouselList = document.querySelector('.carousel__list');
const carouselItems = document.querySelectorAll('.carousel__item');
const elems = Array.from(carouselItems);

carouselList.addEventListener('click', function (event) {
  // console.log("hello")
  var newActive = event.target;
  var isItem = newActive.closest('.carousel__item');

  if (!isItem || newActive.classList.contains('carousel__item_active')) {
    return;
  };
  update(newActive);
});

setInterval(() => {
  let auto_play = elems.find((elem) => elem.dataset.pos == 4);
  update(auto_play)
}, 2000);;


const update = function (newActive) {
  const newActivePos = newActive.dataset.pos;

  const fifth = elems.find((elem) => elem.dataset.pos == 5);
  const fourth = elems.find((elem) => elem.dataset.pos == 4);
  const third = elems.find((elem) => elem.dataset.pos == 3);
  const second = elems.find((elem) => elem.dataset.pos == 2);
  const first = elems.find((elem) => elem.dataset.pos == 1);

  fifth.classList.remove('carousel__item_active');
  newActive.classList.add('carousel__item_active');

  let to_add = fifth.dataset.pos - newActivePos;
  [fifth, fourth, third, second, first].forEach(item => {
    var itemPos = item.dataset.pos;
    item.dataset.pos = getPos(newActivePos, itemPos, to_add);
  });
};



const getPos = function (newActivePos, item, to_add) {

  const diff = newActivePos - item;

  item = parseInt(item);
  if (diff > 0)
    return item + to_add;
  else if (diff < 0)
    return -diff;
  else
    return 5;
}