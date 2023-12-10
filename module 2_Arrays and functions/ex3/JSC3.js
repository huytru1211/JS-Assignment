let names= []
for (let i=1; i<=6; i++) {
    const name = prompt(`Name ${i}: `)
    names.push(name);
}
names.sort((a,b) => b.localeCompare(a));
const UlistName = document.createElement("ul");
names.forEach(name => {
    const listName = document.createElement("li");
    listName.textContent = name;
    UlistName.appendChild(listName);
})
document.body.appendChild(UlistName);
