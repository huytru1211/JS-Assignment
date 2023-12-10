function fetchData() {
    fetch('package.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            1`23return response.json();
        })
        .then(data=> {
            document.getElementById('result').innerHTML = `
                <p>User ID: ${data.userId}</p>
                <p>Title: ${data.title}</p>
                <p>Completed: ${data.completed ? 'Yes' : 'No'}</p>
            `;
        })
        .catch(error => console.error('Error:', error));
}