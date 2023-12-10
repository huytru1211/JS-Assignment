'use strict'
const numberParticipants = parseInt(prompt("Enter the number here: "));
let Participants = []

for (let i=1; i<=numberParticipants; i++){
    const nameParticipant = prompt(`Enter name for participant ${i}:  `);
    Participants.push(nameParticipant);
}

Participants.sort();

const orderedList = document.createElement("ol");

Participants.forEach(nameParticipant => {
    const participantsList = document.createElement("li");
    participantsList.textContent = nameParticipant;
    orderedList.appendChild(participantsList);
})
document.body.appendChild(orderedList);