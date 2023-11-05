const checker = {
    checkAuthor: function () {
    create     = document.querySelectorAll('.issue');
    note       = document.querySelectorAll('.issue-note');
     
    note.forEach(element => {
        let link = element.querySelector('a').getAttribute('href');
        let user = element.nextElementSibling.querySelector('span>a').textContent;
         // console.log("name = ",element.querySelector('span:last-child').textContent);
        
        getCreator('https://redmine.playcaliber.com' + link, function (name) {
            element.insertAdjacentHTML('beforeend', `<span>${name}</span>`);
        });
          
    });

    function getCreator(link, callback) {
        fetch(link)
            .then(response => response.text())
            .then(data => {
                let parser = new DOMParser();
                let doc = parser.parseFromString(data, 'text/html');
                let nameElement = doc.querySelector('.author .active');
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
        
        if (element.querySelector('span:last-child').textContent == user) {
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
