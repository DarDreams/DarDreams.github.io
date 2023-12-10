document.querySelector('h2').insertAdjacentHTML('beforeend',`<input type="submit" value="Check authors" style="margin-left:10px" class="check button-small">`)
document.querySelector('h2').insertAdjacentHTML('beforeend',`<input type="submit" value="Сount number" style="display:none;margin-left:10px" class="how button-small">`)

if (!document.querySelector('#myDate')) {
    let m1 = document.querySelector('p.subtitle').textContent;
    document.querySelector('p.subtitle').textContent = m1.split('по')[0]+" по ";
    document.querySelector('p.subtitle').insertAdjacentHTML('beforeend', `
        <input type="date" id="myDate">
        <input type="submit" value="OK" class="okCalendar button-small">
        <span style="margin-left:2em">Фильтр: </span>
        <select class= "weeks button-small" name="weeks" style="height:28px">
          <option value="1">1 неделя</option>
          <option value="2">2 недели</option>
          <option value="3">3 недели</option>
        </select>
        <input type="submit" value="OK" class="okFilter button-small">
    `);
    
    document.querySelector('.okCalendar').onclick = function () {
    location.href = location.href.replace(/\d\d\d\d-\d+-\d+/, document.querySelector('#myDate').value);
}
}

//dar

document.querySelector('#myDate').value = location.href.match(/\d\d\d\d-\d+-\d+/);


const checker = {
    checkAuthor: function () {
    create     = document.querySelectorAll('.issue');
    note       = document.querySelectorAll('.issue-note');
     
    document.querySelectorAll('.issue-closed').forEach(el => {
        el.remove();
    }); 
     
    note.forEach(element => {
        let link = element.querySelector('a').getAttribute('href');
        let user = element.nextElementSibling.querySelector('span>a').textContent;

        getCreator('https://redmine.playcaliber.com' + link, function (name) {
            element.insertAdjacentHTML('beforeend', `<hr><span class="realAuthor">${name}</span><hr>`);
        });
          
    });

    function getCreator(link, callback) {
        fetch(link)
            .then(response => response.text())
            .then(data => {
                let parser = new DOMParser();
                let doc = parser.parseFromString(data, 'text/html');
                let nameElement = doc.querySelector('.author');
                if (nameElement) {
                    let name = nameElement.textContent;
                    callback(name);
                } else {
                    console.log('Имя не найдено');
                }
            })
            .catch(error => {
                console.error('Ошибка при выполнении запроса:', error);
            });
    }
},
    count: function () {
        let issue = {};     
        document.querySelectorAll('.issue-note').forEach(element => {
            let link = element.querySelector('a').getAttribute('href');
            let user = element.nextElementSibling.querySelector('span>a').textContent;
    
            const regex = new RegExp(user, 'i');
            if (regex.test(element.querySelector('.realAuthor').textContent)) {
                element.nextElementSibling.remove();
                element.remove();
            }
            issue.create = document.querySelectorAll('.issue').length;
            issue.note   = document.querySelectorAll('.issue-note').length;
        }); 

    return issue;
},
    check: function () {
        this.checkAuthor();
    },
    how: function () {
        return this.count();
    }
};

function getLastWeek(n = 1) {
    const today = new Date();
    const lastSunday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() - 6 * n);

    const allDates = [];
    for (let j = 0; j < 7 * n; j++) {
        const date = new Date(lastSunday);
        date.setDate(lastSunday.getDate() + j);
        const formattedDate = `${date.getDate() < 10 ? '0' : ''}${date.getDate()}.${(date.getMonth() + 1) < 10 ? '0' : ''}${date.getMonth() + 1}.${date.getFullYear()}`;
        allDates.push(formattedDate);
    }
    
    return allDates;
}

function setFilter() {

    let lastWeekDates = getLastWeek(document.querySelector('.weeks').value);
    // console.log("Последняя неделя:", lastWeekDates);
    
    const h3Elements = document.querySelectorAll('#activity > h3');
    
    
    h3Elements.forEach((element) => {
        let match = false;
        
        for (let i = 0; i < lastWeekDates.length; i++) {
            // console.log(`${element.textContent.trim()} === ${lastWeekDates[i]}`)
            if (element.textContent.trim() === lastWeekDates[i]) {
                match = true;
                break;
            }
        }
        
        if (!match) {
            // element.remove();
            const dlElement = element.nextElementSibling;
            if (dlElement && dlElement.tagName.toLowerCase() === 'dl') {
                dlElement.remove();
                element.remove();
            }
        }
    });

}

document.querySelector('.okFilter').onclick = function () {
    setFilter();
    document.querySelector('.okFilter').disabled = true;
}

document.querySelector('#content>h2>.active').onclick = function (e) {
    e.preventDefault();
    location.href = "https://redmine.playcaliber.com/projects/caliber-st";
}

document.querySelector('.check').onclick = function () {
    document.querySelector('.check').disabled = true;
    document.querySelector('.how').style.display="";
    document.querySelector('.check').remove();
    checker.check();
}
document.querySelector('.how').onclick = function () {
    document.querySelector('.how').disabled = true;
    document.querySelector('.how').insertAdjacentHTML('afterend',`
    <image src ="/images/ticket.png"><span style="font-size:16px">${checker.how().create}<span/>
    <image src ="/images/ticket_note.png"><span style="font-size:16px"> ${checker.how().note}<span/>`);
}

