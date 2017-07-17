let wrapper = document.querySelector(".card");

let request = new XMLHttpRequest();
request.addEventListener("load", displayInfo);
request.open("GET", "https://api.github.com/users/atcalkins");
request.send();

function displayInfo() {
  let formData = JSON.parse(this.responseText);
  let template = `
    <div class=headbox>
    <h1>${formData.name}</h1>
    </div>
      <article class = undertitle>
      <div class=info>
        <h2>The Basics</h2>
        <ul>
          <li><span class=text>Name:</span> ${formData.name}</li>
          <li class=link><span class=text>GitHub URL:</span><a href= "${formData.html_url}"> atcalkins</a></li>
          <li><span class=text>Company: </span> ${formData.company}</li>
          <li class =link><span class=text>Website: </span><a href= "${formData.blog}"> Coolwebsite.com</a></li>
        </ul>
      </div>
      <hr>
      <div class=bio>
        <h2>The Story</h2>
          <p>${formData.bio}</p>
      </div>
      <div class=picture>
          <img src="${formData.avatar_url}">
      </div>
      </article>
    `;

  wrapper.innerHTML = template;
}
