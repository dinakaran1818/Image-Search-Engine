const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showmoreBtn= document.getElementById("show-more-btn");
const apiKey = "C3mM79pkzR6Zh01p76rnCSuUN4rMXJcrNIrXaEad6rw";


let keyword = "";
let page = 1;
async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${apiKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();


    if(page==1){
        searchResult.innerHTML="";
    }
    console.log(data)
    const results = data.results;
    results.map((result)=>{
        console.log(result.urls.small);
        const image = document.createElement("img");
        image.src= result.urls.small;
        console.log(result.urls.small);
        let imageLink = document.createElement("a");
        imageLink.href= result.links.html;
        imageLink.target="_blank";
        imageLink.appendChild(image);

        searchResult.appendChild(imageLink);
       
    })
    showmoreBtn.style.display="block"
    

}

searchForm.addEventListener("submit",(e)=>{
        e.preventDefault();
        page= 1;
        searchImages();
})

showmoreBtn.addEventListener("click",()=>{
    page++;
    searchImages();

})