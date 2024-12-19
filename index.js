const commentForm = document.querySelector('.comment-form')
const commentlist = document.querySelector('.comment-list')
let btn = document.querySelector(".sumbit-button")
commentForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    // const commentField = evt.target.commentField;
    // const commentText = commentField.value.trim()
        const newComment = document.createElement('li')
        newComment.classList.add('user-comment')
        newComment.textContent = evt.target.elements.commentField.value
        // newComment.textContent = commentText
        commentlist.append(newComment)
        evt.target.commentField.value = ''
        newComment.style.height= "50px"
        
})
const themeToggleButton = document.getElementById("themeToggleButton");

// Перевірка наявної теми при завантаженні сторінки
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
  themeToggleButton.textContent = "Свiтла тема";
} else {
  themeToggleButton.textContent = "Тeмна тема";
}

// Обробник натискання кнопки
themeToggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
    themeToggleButton.textContent = "Світла тема";
  } else {
    localStorage.setItem("theme", "light");
    themeToggleButton.textContent = "Темна тема";
  }
});