async function fetchJobs() {
    const response = await fetch('http://localhost:4000/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `query { hello }`
        }),
    });
    const { data } = await response.json();
    console.log(data);
}

fetchJobs();