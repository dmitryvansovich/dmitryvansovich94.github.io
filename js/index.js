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
        "link": "https://vk.com/app6601898_297747356",
        "cover": "websites/arbour.jpg",
        "header": "Arbour - сражения персонажами на арене",
        "tags": [0, 1, 2, 3, 4],
        "time": "14.01.2019 - 10.02.2018"
    },{
        "link": "http://postmylife.herokuapp.com/",
        "cover": "websites/postmylife.jpg",
        "header": "Социальная сеть postmylife",
        "tags": [0, 1, 2, 3, 5],
        "time": "Лето 2016 года"
    },{
        "link": "",
        "cover": "websites/rohspecials.jpg",
        "header": "Баг-трекер игрового проекта",
        "tags": [0, 1, 2, 3, 5],
        "time": "01.04.2020 - 07.05.2020"
    }
];

let PROJECTS_html = ``;
for(let i in PROJECTS){
    let tags = ``;
    for(let t in PROJECTS[i].tags)
        tags += TAGS[PROJECTS[i].tags[t]];
    
    let link = ``;
    if(PROJECTS[i].link === "")
        link = `
        <div class="items-item-cover-link items-item-cover-nolink">
            Ссылка недоступна
        </div>`;
    else
        link = `
        <div class="items-item-cover-link" data-tippy-content="Перейти" onclick="window.open('${PROJECTS[i].link}')">
            <i class="far fa-link"></i>
        </div>`;

    PROJECTS_html += `
        <div class="items-item">
            <div class="items-item-cover">
                ${link}
                <img src="${PROJECTS[i].cover}" alt="">
            </div>
            <div class="items-item-header">${PROJECTS[i].header}</div>
            <div class="items-item-tags">
                ${tags}
            </div>
            <div class="items-item-date"><i class="far fa-clock"></i> ${PROJECTS[i].time}</div>
        </div>
    `;
}
document.getElementById("items").innerHTML = PROJECTS_html;
tippy('[data-tippy-content]', {
    placement: 'right'
});

function onlyThisTag(tagid){
    let projects = PROJECTS.filter(project => project.tags.includes(tagid));

    let projects_html = ``;
    for(let i in projects){
        let tags = ``;
        for(let t in projects[i].tags)
            tags += TAGS[projects[i].tags[t]];
        
        projects_html += `
            <div class="items-item">
                <div class="items-item-cover">
                    <div class="items-item-cover-link" data-tippy-content="Перейти" onclick="window.open('${projects[i].link}')">
                        <i class="far fa-link"></i>
                    </div>
                    <img src="${projects[i].cover}" alt="">
                </div>
                <div class="items-item-header">${projects[i].header}</div>
                <div class="items-item-tags">
                    ${tags}
                </div>
                <div class="items-item-date"><i class="far fa-clock"></i> ${projects[i].time}</div>
            </div>
        `;
    }
    document.getElementById("items").innerHTML = projects_html;
    tippy('[data-tippy-content]', {
        placement: 'right'
    });
};