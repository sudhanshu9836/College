let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector('button');
btn.addEventListener("click", async()=>{
    let country = document.querySelector('input').value ;
    let colArr = await getColleges(country);
    show(colArr);
})
function show(colArr){
    let list = document.querySelector('#list');
    list.innerText = "";
    for ( college of colArr){
        let li = document.createElement('li');
        li.classList.add('items');
        li.innerText = college.name;
        list.appendChild(li);
    }
}

async function getColleges(country){
    try{
        let res = await axios.get(url+country);
        return res.data;
    } catch(e){
        console.log("error :",e);
        return [];
    }
}