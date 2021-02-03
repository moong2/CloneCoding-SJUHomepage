function loadItems(){
    return fetch('data/data.json')
    .then(response=>response.json())
    .then(json=>json.items);
}

function displayItems(value, items){
    const container = document.querySelector('.news .category');
    container.innerHTML = items.map(item=>createHTMLString(value, item)).join('');
}

function createHTMLString(value, item){
    if(value === "세종뉴스"){
        return `
        <li>
            <a href = http://www.sejongpr.ac.kr/sejongnewspaperview.do?boardType=1&pkid=26173">
                <div class = "img_box"><img src = ${item.image}></div>
                <div class = "text0">[${item.category}]</div>
                <div class = "text1">${item.title}</div>
                <div class = "text2">${item.content}</div>
            </a>
        </li>
        `
    }
    else{
        return `
        <li>
            <div class = "text1">${item.title}</div>
            <div class = "textDate">${item.date}</div>
            <div class = "text2">${item.content}</div>
        </li>
        `
    }
}

function onButtonClick(event, items){
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;
    const el = doccument.getElementbyId("")

    if(key == null || value == null){return;}
    displayItems(value, items.filter(item=>item[key] === value))
}

function setEventListeners(items){
    const buttons = document.querySelector('body .sejongIntroduce .pictureInformation .menu');
    buttons.addEventListener('click', event=> onButtonClick(event, items))
}

loadItems()
.then(items=>{
    setEventListeners(items);
})
.catch(console.log);