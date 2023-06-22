const avatar = document.querySelectorAll('.user_avatar');
const login = document.querySelectorAll('.user_nickname');
const node = document.querySelectorAll('.user_location--text');
const url = document.querySelectorAll('.user_login');
const footer = document.querySelector('.footer');

footer.addEventListener('click', getUsers);

function getUsers() {
    const array = fetch('https://api.github.com/users')
    .then( data => data.json())
    .then( data => {
        let result = [];
        for ( let i = 0; i <= 2; i++) {
            let index = generateRandomNumber();
            result.push(data[index]);
        }

        return result;
    })
    .then(result => {
        for (let i = 0; i <= 2; i++) {
            let loginAPI = result[i].login;
            login[i].textContent = loginAPI;
            let avatarAPI = result[i].avatar_url;
            avatar[i].src = avatarAPI;
            let nodeAPI = result[i].node_id;
            node[i].textContent = nodeAPI;
            let urlAPI = result[i].url;
            url.href = urlAPI;
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