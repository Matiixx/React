const API_URL = 'http://localhost:5000/app';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const nick = formData.get('nick');
    const content = formData.get('content');
    const twit = {
        nick,
        content
    };
    fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(twit),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => {
        if(response.status == 200)
        {
            form.reset();
            listTwits();
        }
    })
})

const twitsDiv = document.querySelector('.list-twits');

listTwits();

function listTwits()
{
    if(twitsDiv.indexHTML)
        twitsDiv.indexHTML = null;
    fetch(API_URL)
        .then(res => res.json())
        .then(twits => {
            twits.forEach(twit => {
                const div = document.createElement('div');
                div.classList.add('twit')
                const header = document.createElement('h3');
                const contentP = document.createElement('p');
                header.textContent = twit.nick;
                contentP.textContent = twit.content;
                div.appendChild(header);
                div.appendChild(contentP);
                twitsDiv.appendChild(div);
            })
        })
}