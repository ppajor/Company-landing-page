let card1 = document.querySelector("#card1");
let card2 = document.querySelector("#card2");
let card3 = document.querySelector("#card3");

let comment = document.querySelector("#comment");
let comment_header = document.querySelector("#comment-header");
let comment_date = document.querySelector("#comment-date");

//let avatar = document.querySelector("#avatar");
let stars = document.querySelector("#stars");
let comment_author = document.querySelector("#comment-author");

let comments = [
  [
    "That was super exciting!",
    " I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
    "09/03/2020",
  ],
  [
    "Amazing cooperation",
    " If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
    "18/06/2020",
  ],
  [
    "These days were amazing",
    "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt eros est, id laoreet dui euismod et. Vivamus ornare,nulla vitae dictum pulvinar, ipsum ligula feugiat ex, quiscondimentum metus nulla finibus leo. Duis sed bibendum diam. Nun",
    "22/08/2020",
  ],
];

let elements = [comment, comment_header, comment_date, stars];

const removeClass = (elem) => {
  elem.forEach((el) => {
    el.classList.remove("anim");
  });
};

const addClass = (elem) => {
  elem.forEach((el) => {
    el.offsetHeight;
    el.classList.add("anim");
  });
};

card1.addEventListener("click", () => {
  removeClass(elements);

  card3.classList.remove("card-active");
  card2.classList.remove("card-active");

  card1.classList.add("card-active");

  comment_header.innerHTML = comments[0][0];
  comment.innerHTML = comments[0][1];
  comment_date.innerHTML = comments[0][2];

  addClass(elements);
});

card2.addEventListener("click", () => {
  removeClass(elements);

  card1.classList.remove("card-active");
  card3.classList.remove("card-active");

  card2.classList.add("card-active");

  comment_header.innerHTML = comments[1][0];
  comment.innerHTML = comments[1][1];
  comment_date.innerHTML = comments[1][2];

  addClass(elements);
});

card3.addEventListener("click", () => {
  removeClass(elements);

  card1.classList.remove("card-active");
  card2.classList.remove("card-active");

  card3.classList.add("card-active");

  comment_header.innerHTML = comments[2][0];
  comment.innerHTML = comments[2][1];
  comment_date.innerHTML = comments[2][2];

  addClass(elements);
});

/*
let elements = [comment, avatar, branch, comment_author];

var actual_slide = 0;

const removeClass = (elem) => {
  elem.forEach((el) => {
    el.classList.remove("anim");
  });
};

const addClass = (elem) => {
  elem.forEach((el) => {
    el.offsetHeight;
    el.classList.add("anim");
  });
};

next.addEventListener("click", () => {
  removeClass(elements);

  if (++actual_slide >= comments.length) actual_slide = 0;
  comment.innerHTML = comments[actual_slide][0];
  avatar.src = comments[actual_slide][1];

  addClass(elements);
  //comment.offsetHeight; //force repaint to recognize 'animation-name:none'
});

prev.addEventListener("click", () => {
  removeClass(elements);

  if (--actual_slide < 0) actual_slide = comments.length - 1;
  comment.innerHTML = comments[actual_slide][0];
  avatar.src = comments[actual_slide][1];

  addClass(elements);
});
*/
