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
})
}

const url = (id) =>{
    fetch( `https://openapi.programming-hero.com/api/news/category/${id}`)
        .then(res => res.json())
        .then(data => displayNews(data))
       
}

const displayNews = (data) => {
    const container = document.getElementById('container');
    container.innerHTML= "";
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
            <img src="${news.author.img}" class="w-25 h-25 rounded-circle" alt="">
            <p class="p">${news.author.name}</p>
            <i class="fa-regular fa-eye ms-5 mx-3 my-1"></i>
            <p class="p">${news.total_view}</p>
          </div>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          detail 
        </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <img src="${news.thumbnail_url}" alt="">
                <p>${news.details}</p>
                
                
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        `
        if(news.author.name === "null" || news.total_view === 'null'){
            document.getElementsByClassName("p").innerHTML = 'no data available';
        }
        container.appendChild(div);
        const newsLength = document.getElementById('length');
        newsLength.innerText = `${getNews.length} items found for this category`
        console.log(news);
    })

    
}
   
url('05');
