class FamilyMember {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const memberList = [];

function submitMember() {
    const name = document.getElementById('inputName').value;
    const age = parseInt(document.getElementById('inputAge').value);
    const gender = document.getElementById('genderOption').value;

    if (isNaN(age) || age === null || name.trim().length == 0)
        return alert("Ensure you applied correctly:\nNo empty input\nNo string in age");

    const newMember = new FamilyMember(name, age, gender);
    memberList.push(newMember);

    updateData();
}

function updateData() {
    const familyList = document.getElementById('data').tBodies[0];
    familyList.innerHTML = '';

    memberList.forEach((member, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${member.name}</strong></td>
            <td>${member.age}</td>
            <td>${member.gender}</td>
            <td class="button-container">
                <button onclick="addAge(${index})">Add Age</button>
                <button onclick="decreaseAge(${index})">Decrease Age</button>
                <button onclick="swapGender(${index})">Swap Gender</button>
                <button onclick="changeName(${index})">Change Name</button>
                <button onclick="removeMember(${index})">Remove Member</button>
            </td>
        `;

        familyList.appendChild(row);
    });
}

function addAge(index) {
    const currentAge = memberList[index].age;
    const newAge = currentAge + 1;
    memberList[index].age = newAge;

    updateData();
}

function decreaseAge(index) {
    const currentAge = memberList[index].age;
    const newAge = currentAge - 1;
    memberList[index].age = newAge;
    
    updateData();
}

function swapGender(index) {
    const gender = memberList[index].gender;
    const swapGender = gender === "Male" ? "Female" : "Male";
    memberList[index].gender = swapGender;

    updateData();
}

function changeName(index) {
    const newName = prompt('Enter new name: ');
    memberList[index].name = newName;
    
    updateData();
}

function removeMember(index) {
    memberList.splice(index, 1);
    updateData();
}
