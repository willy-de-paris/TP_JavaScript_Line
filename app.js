const articleForm = document.getElementById('articleForm');
const articleList = document.getElementById('articleList');
let articleCounter = 0;

articleForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const title = this.elements['title'].value;
    const description = this.elements['description'].value;
    const articleItem = document.createElement('div');
    articleItem.innerHTML = `
    <div class="cards-grid">
        <div class="card">
            <div class="card-actions">
                <div class="action delete" onclick="deleteArticle(this)"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#fff" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg></div>
                <div class="action update" onclick="updateArticle(this)"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#fff" viewBox="0 0 256 256"><path d="M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.69,147.32,64l24-24L216,84.69Z"></path></svg></div>
            </div>
            <div class="card-wrapper">
                <span>#${articleCounter}</span>
                <h1 class="title">${title}</h1>
                <p>${description}</p>
            </div>
        </div>
    </div>
    `;
    articleList.appendChild(articleItem);
    articleCounter++;
    this.reset();
});

function deleteArticle(element) {
    const card = element.closest('.card');
    card.remove();
}

function updateArticle(element) {
    const card = element.closest('.card');
    const title = card.querySelector('.title').innerText;
    const description = card.querySelector('p').innerText;
    document.getElementById('title').value = title;
    document.getElementById('description').value = description;
    card.remove();
}
