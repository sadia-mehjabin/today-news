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
        <a href="">${item.category_name}</a> 
        `
        catagory.appendChild(div); 
    })
}

// news url 
fetch('https://openapi.programming-hero.com/api/news/category/01')
.then(res => res.json())
.then(data => console.log(data))