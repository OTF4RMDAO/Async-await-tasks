// Task 05: Awaiting Parallel Calls
async function parallelCalls(urls) {
    try {
        const responses = await Promise.all(urls.map(url => fakeFetch(url)));
        console.log("All data fetched:", responses);
    } catch (error) {
        console.error("Error with one or more requests:", error.message);
    }
}

// Simulated fetch function
function fakeFetch(url) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Data from ${url}`), Math.random() * 2000);
    });
}

// Example usage
parallelCalls(["https://api.site1.com", "https://api.site2.com", "https://api.site3.com"]);
