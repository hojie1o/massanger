var addBtn = document.getElementById("add-comment-btn");
var commentInput = document.getElementById("new-comment-text");
var container = document.querySelector(".container");


function setupCommentEvents(comment) {
  var plus = comment.querySelector(".plus");
  var minus = comment.querySelector(".minus");
  var score = comment.querySelector(".score");
  var deleteBtn = comment.querySelector(".delete-btn");

  let count = 0;
  score.textContent = count;

  plus.addEventListener("click", () => {
    count++;
    score.textContent = count;
  });

  minus.addEventListener("click", () => {
    if (count > 0) {
      count--;
      score.textContent = count;
    }
  });

  deleteBtn.addEventListener("click", () => {
    if (confirm("Bu comment o‘chirilsinmi?")) {
      comment.remove();
    }
  });
}

addBtn.addEventListener("click", () => {
  var text = commentInput.value.trim();
  if (text === ""){return} ;

  var newComment = document.createElement("div");
  newComment.classList.add("comment");

  newComment.innerHTML = `
    <div class="score-box">
      <button class="plus">+</button>
      <div class="score">0</div>
      <button class="minus">-</button>
    </div>
    <div class="comment-body">
      <div class="top">
        <img src="./mal.png" class="avatar" />
        <span class="name">Hojiev Amirbek</span>
        <span class="date">Now</span>
        <button class="delete-btn">Delete</button>
      </div>
      <p class="text">${text}</p>
    </div>
  `;
  container.insertBefore(newComment, document.querySelector(".add-comment"));
  setupCommentEvents(newComment);

  commentInput.value = "";
});
