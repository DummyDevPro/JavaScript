function addUser() {
    let firstNameInput = document.getElementById('firstNameId');
    let lastNameInput = document.getElementById('lastNameId');
    let ageInput = document.getElementById('ageId');
    let hobbyInput = document.getElementById('hobbyId');

    let userListContainer = document.getElementById('userListId');
    userListContainer.innerHTML = `
    <div class="user">
                    <div class="user-name">
                        <label for="">Name</label>
                        <input type="text" value="${firstNameInput.value} ${lastNameInput.value}" disabled>
                    </div>
                    <div class="user-age">
                        <label for="">Age</label>
                        <input type="text" value="${ageInput.value}" disabled>
                    </div>
                    <div class="user-hobby">
                        <label for="">Hobby</label>
                        <input type="text" value="${hobbyInput.value}" disabled>
                    </div>
                </div>
    ` + userListContainer.innerHTML;
}