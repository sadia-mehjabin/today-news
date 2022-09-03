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
        div.innerHTML = `
        <button class="btn btn-light" onclick="console.log(${item.category_id})">${item.category_name}</button> 
        `
        catagory.appendChild(div); 
        fetch(`https://openapi.programming-hero.com/api/news/category/${item.category_id}`)
        .then(res => res.json())
        .then(data => console.log(data))

        
    })
}

// news url 
fetch(`https://openapi.programming-hero.com/api/news/category/08`)
.then(res => res.json())
.then(data => displayNews(data))

const displayNews = (data) => {
    const container = document.getElementById('container');
    const getNews = data.data;
    getNews.forEach(news => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <img src=${news.image_url} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${news.title}</h5>
            <p class="card-text">${news.details.slice(0, 500)}.....</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            <div class="d-flex">
            <img src="${news.author.img}" class="w-25 h-25 rounded-5" alt="">
            <p>${news.author.name}</p>
          </div>
        `
        container.appendChild(div);
        
    })
}
// const category = (id) => {
//     fetch(`https://openapi.programming-hero.com/api/news/category/${data}`)
//     .then(res => res.json())
//     .then(data => console.log(data))
    
    
// }
