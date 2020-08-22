const TAGS = [
    `<div class="items-item-tags-tag html">HTML</div>`,
    `<div class="items-item-tags-tag css">CSS</div>`,
    `<div class="items-item-tags-tag js">JS</div>`,
    `<div class="items-item-tags-tag nodejs">NodeJS</div>`,
    `<div class="items-item-tags-tag">Игра</div>`,
    `<div class="items-item-tags-tag">Сайт</div>`,
    `<div class="items-item-tags-tag">Мобильное</div>`
];
const PROJECTS = [
    {
        "link": "http://onslices.herokuapp.com",
        "cover": "websites/onslices.jpg",
        "header": "onslices - школьный материал \"по кусочкам\"",
        "tags": [0, 1, 2, 3, 5],
        "time": "06.12.2019 - 10.01.2020"
    },{
        "link": "https://vk.cc/a0b6Db",
        "cover": "websites/stop.jpg",
        "header": "STOP! - побивай рекорды",
        "tags": [0, 1, 2, 3, 4, 6],
        "time": "01.11.2019 - 15.11.2019"
    },{
        "link": "https://dmitryvansovich.github.io/",
        "cover": "websites/bagration.jpg",
        "header": "Операция «Багратион» - многопользовательская стратегия",
        "tags": [0, 1, 2, 3, 4],
        "time": "07.11.2018 - 20.11.2018"
    },{
        "link": "http://postmylife.herokuapp.com/",
        "cover": "websites/postmylife.jpg",
        "header": "Социальная сеть postmylife",
        "tags": [0, 1, 2, 3, 5],
        "time": "Лето 2016 года"
    },{
        "link": "https://vk.com/app6601898_297747356",
        "cover": "websites/arbour.jpg",
        "header": "Arbour - сражения персонажами на арене",
        "tags": [0, 1, 2, 3, 4],
        "time": "14.01.2019 - 10.02.2018"
    },{
        "link": "",
        "cover": "websites/rohspecials.jpg",
        "header": "Баг-трекер игрового проекта",
        "tags": [0, 1, 2, 3, 5],
        "time": "01.04.2020 - 07.05.2020"
    },{
        "link": "https://dmitryvansovich.github.io/Komorka.github.io/",
        "cover": "websites/komorka.jpg",
        "header": "Сайт для майнкрафт сервера",
        "tags": [0, 1, 2, 5],
        "time": "30.01.2020 - 01.02.2020"
    },{
        "link": "",
        "cover": "websites/videofortwo.jpg",
        "header": "Синхронный просмотр видео с друзьями",
        "tags": [0, 1, 2, 3, 5],
        "time": "03.08.2020 - 14.08.2020"
    }
];

function renderProjects(tagid){
    window.scrollTo({
        top: 0
    });

    let projects;
    if(tagid)
        projects = PROJECTS.filter(project => project.tags.includes(tagid));
    else
        projects = PROJECTS;

    let block1 = ``;
    let block2 = ``;
    let block3 = ``;

    let blockNum = 1;
    for(let i in projects){
        let tags = ``;
        for(let t in projects[i].tags)
            tags += TAGS[projects[i].tags[t]];
        
        let link = ``;
        if(projects[i].link != "")
            link = `<div class="item" data-tippy-content="Перейти" onclick="window.open('${projects[i].link}')"><i class="far fa-link"></i></div>`;

        let html = `
        <div class="items-item">
            <div class="items-item-cover">
                <div class="items-item-cover-link">
                    <div class="item" data-tippy-content="Изображение" onclick="window.open('${projects[i].cover}')"><i class="far fa-image"></i></div>
                    ${link}
                </div>
                <img src="${projects[i].cover}" alt="">
            </div>
            <div class="items-item-header">${projects[i].header}</div>
            <div class="items-item-tags">
                ${tags}
            </div>
            <div class="items-item-date"><i class="far fa-clock"></i> ${projects[i].time}</div>
        </div>`;

        if(blockNum === 1)
            block1 += html;
        else if(blockNum === 2)
            block2 += html;
        else if(blockNum === 3)
            block3 += html;

        blockNum++;
        if(window.innerWidth <= 1300 && window.innerWidth >= 800)
            if(blockNum > 2){ blockNum = 1; continue; }
        if(blockNum > 3) blockNum = 1;
    }
    document.getElementById("items").innerHTML = `
        <div class="block1">${block1}</div>
        <div class="block2">${block2}</div>
        <div class="block3">${block3}</div>
    `;
    tippy('[data-tippy-content]', {
        placement: 'top'
    });
};
renderProjects();

window.onresize = function(){
    renderProjects();
}