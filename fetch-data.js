
document.addEventListener('DOMContentLoaded', function () {
async function fetchUserData(){
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const users = await response.json();
        dataContainer.innerHTML ='';

        const userList = document.createElement('ul');
        users.forEach(user => {
            const li =document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });
        dataContainer.appendChild(userList) ;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }

}

fetchUserData();
});
