
// // const inpText = document.querySelector('.inp-text');
// const searchBtn = document.querySelector('.search');
// const imgSearch = document.querySelector('.search-img');

// searchBtn.addEventListener('submit', function(){
//     var inpText = document.querySelector('inp-text').value;
//     console.log(inpText)
// })


const form = document.querySelector('form')
const imgCont = document.querySelector('.img-container');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let query = form.querySelector('input').value;
    console.log(query)

    tvMazeApi(query);
})

async function tvMazeApi(query){
    const req = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    const movies = await req.json();
    
    makeImages(movies);
}

function makeImages(movies) {
    for(let movie of movies){
        let src = movie.show.image.medium;

        const img = document.createElement('img');
        img.src = src;

        imgCont.appendChild(img);
    }
}