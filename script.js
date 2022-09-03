// catagory url 
fetch('https://openapi.programming-hero.com/api/news/categories')
.then(res => res.json())
.then(data => displayCatagories(data))

const displayCatagories = (data) =>{
    const catagory = document.getElementById('catagories');
    const getArray = data.data.news_category;
    getArray.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('m-4');
        div.classList.add('text-decoration-none');
        div.innerHTML = `
        <a class="text-decoration-none" href="">${item.category_name}</a> 
        `
        catagory.appendChild(div); 
    })
}

// news url 
fetch('https://openapi.programming-hero.com/api/news/category/01')
.then(res => res.json())
.then(data => displayNews(data))

const displayNews = (data, catagory_id) => {
    const container = document.getElementById('container');
    const getNews = data.data;
    getNews.forEach(news => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <img src=${news.image_url} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${news.title}</h5>
            <p class="card-text">${news.details}</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        `
        container.appendChild(div);
        console.log(news)
    })
}