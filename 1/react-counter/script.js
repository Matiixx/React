'use strict';

const e = React.createElement;
const API_URL = 'http://localhost:5000/app';

var ID = getCookie('ID_') || getNewID();

class ClickCount extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = { 
            count: 0,
            clicked: false
        };
        if(ID)
        {
            const API_URL_ID = API_URL + "?" + $.param({checkID: ID});
            fetch(API_URL_ID)
                .then(res => res.json())
                .then(res => {
                    this.setState({count: res.count})
                });
        }
        this.buttonClicked = this.buttonClicked.bind(this);
        this.intervalSendToAPI = setInterval(this.intFun.bind(this), 3000);
    }

    buttonClicked()
    {
        this.setState({count: this.state.count + 1, clicked: true});
    }   

    intFun()
    {
        if(this.state.clicked)
        {
            const count = this.state.count;
            const toSend = {
                _id: ID,
                count
            }
            fetch(API_URL, {
                method: "POST",
                body: JSON.stringify(toSend),
                headers: 
                {
                    'content-type': 'application/json'
                }
            })
                /*.then(res => res.json())
                .then(res => {
                    console.log(res);
                })*/
            this.setState({clicked: false});
        }
    }

    render()
    {
        return (
            <div>
                <p className="counter p">Ilość kliknięć: {this.state.count}</p>
                <button onClick={this.buttonClicked} className="btn">Kliknij!</button>
            </div>
        );
    }
}


function getNewID()
{
    fetch(API_URL + '/getID')
    .then(res => res.json())
    .then(res => {
        console.log(res);
        ID = res.newID;
        setCookie("ID_", ID);
        return res.newID;
    });
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function setCookie(name, value) {
    document.cookie = name + "=" + (value || "");
}

ReactDOM.render(
    e(ClickCount),
    document.querySelector('.main-div')
);