document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const adultsList = document.getElementById('adultsList');
    const clearDataButton = document.getElementById('clearData');

    // Load stored data from local storage
    const storedData = JSON.parse(localStorage.getItem('adultsData')) || [];
    storedData.forEach(data => addAdultToTable(data));

    userForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const age = parseInt(document.getElementById('age').value);

        if (age >= 18) {
            const userData = { firstName, lastName, age };
            addAdultToTable(userData);
            storeData(userData);
        }

        userForm.reset();
    });

    clearDataButton.addEventListener('click', () => {
        localStorage.removeItem('adultsData');
        adultsList.innerHTML = '';
    });

    function addAdultToTable(userData) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${userData.firstName}</td>
            <td>${userData.lastName}</td>
            <td>${userData.age}</td>
        `;
        adultsList.appendChild(row);
    }

    function storeData(userData) {
        const existingData = JSON.parse(localStorage.getItem('adultsData')) || [];
        existingData.push(userData);
        localStorage.setItem('adultsData', JSON.stringify(existingData));
    }
});
