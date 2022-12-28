const ul = document.querySelector("ul");
const input = ul.querySelector("input");
const countNum = document.querySelector(".details span");

let tags = [];
let maxTags = 10;

countTag();

function countTag() {
  input.focus();
  countNum.innerText = maxTags - tags.length;
}

function createTag() {
  ul.querySelectorAll("li").forEach((li) => li.remove());
  tags
    .slice()
    .reverse()
    .forEach((tag) => {
      console.log(tag);
      let liTag = `<li>${tag}</li>`;
    });
}
