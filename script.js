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
        <button class="btn btn-light" onclick="url('${item.category_id}')">${item.category_name}</button> 
        `
        catagory.appendChild(div); 
    //     fetch(`https://openapi.programming-hero.com/api/news/category/${item.category_id}`)
    //     .then(res => res.json())
    //     .then(data =>console.log(data))
    // })
})
}

const url = (id) =>{
    const hablu = `https://openapi.programming-hero.com/api/news/category/${id}`
    fetch(hablu)
        .then(res => res.json())
        .then(data => displayNews(data))
        console.log(hablu);
}

const displayNews = (data) => {
    const container = document.getElementById('container');
    const getNews = data.data;
    getNews.forEach(news => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <img src=${news.image_url} class="card-img-top img-fluid" alt="...">
          <div class="card-body">
            <h5 class="card-title">${news.title}</h5>
            <p class="card-text">${news.details.slice(0, 500)}.....</p>
            <div class="d-flex">
            <img src="${news.author.img}" class="w-25 h-25 rounded-5" alt="">
            <p>${news.author.name}</p>
            <i class="fa-thin fa-eye"></i>
            
          </div>
        `
        container.appendChild(div);
        const newsLength = document.getElementById('length');
        newsLength.innerText = `${getNews.length} items found for this category`
        // console.log();
    })
}

const catagoryNews = () =>{

}
