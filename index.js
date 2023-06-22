const avatar = document.querySelectorAll('.user_avatar');
const nickname = document.querySelectorAll('.user_nickname');
const node = document.querySelectorAll('.user_location--text');
const url = document.querySelectorAll('.user_login');
const refreshUsers = document.querySelector('.footer');
//const main = document.querySelector('.main');
const trash = document.querySelectorAll('.user_trash--wrapper');

trash.forEach((elem) => {
    elem.addEventListener('click', () => {
        let context = elem.parentElement;
        let nickname = context.querySelector('.user_nickname');
        let avatar = context.querySelector('.user_avatar');
        let node = context.querySelector('.user_location--text');
        let url = context.querySelector('.user_login');
        console.log(context, nickname, avatar, node, url);

        fetch('https://api.github.com/users')
            .then( data => data.json())
            .then( data => {
                let index = generateRandomNumber();
                return data[index];
            })
            .then(result => {
                let loginAPI = result.login;
                nickname.textContent = loginAPI;
                let avatarAPI = result.avatar_url;
                avatar.src = avatarAPI;
                let nodeAPI = result.node_id;
                node.textContent = nodeAPI;
                let urlAPI = result.url;
                url.href = urlAPI;
            })
        
        // .then( data => {
        //     console.log(data.login, data.avatar_url, data.node_id, data.url);
        // })
    })
})

// function firstFunc() {
    
//     fetch('https://api.github.com/users')
//         .then( data => data.json())
//         .then( data => {
//             let index = generateRandomNumber();
//             return data[index];
//         })
//         .then(result => {
//             let loginAPI = result.login;
//             nickname[0].textContent = loginAPI;
//             let avatarAPI = result.avatar_url;
//             avatar[0].src = avatarAPI;
//             let nodeAPI = result.node_id;
//             node[0].textContent = nodeAPI;
//             let urlAPI = result.url;
//             url[0].href = urlAPI;
//         })
// }

refreshUsers.addEventListener('click', getUsers);

function getUsers() {
    const array = fetch('https://api.github.com/users')
        .then( data => data.json())
        .then( data => {
            let result = [];
            for ( let i = 0; i <= 2; i++) {
                let index = generateRandomNumber();
                console.log(data[index].url);
                result.push(data[index]);
            }

            return result;
        })
        .then(result => {
            for (let i = 0; i <= 2; i++) {
                let loginAPI = result[i].login;
                nickname[i].textContent = loginAPI;
                let avatarAPI = result[i].avatar_url;
                avatar[i].src = avatarAPI;
                let nodeAPI = result[i].node_id;
                node[i].textContent = nodeAPI;
                let urlAPI = result[i].url;
                url[i].href = urlAPI;
            }
        })
}; 

getUsers()

// function getRandomUser() {
//     fetch('https://api.github.com/users')
//     .then( data => data.json())
// }

function generateRandomNumber () {
    let number = Math.floor(Math.random() * 30);
    return number;
}