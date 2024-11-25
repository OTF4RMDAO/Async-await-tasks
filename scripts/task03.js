// Task 03: Handling Errors with Async/Await
async function awaitCall() {
    try {
        const response = await fakeApiCall(true); // Change to false to simulate failure
        console.log("Data fetched:", response);
    } catch (error) {
        console.error("Error fetching data:", error.message || "Something went wrong!");
    }
}

// Simulated API function
function fakeApiCall(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            success ? resolve("Fetched data successfully!") : reject(new Error("API Call Failed!"));
        }, 2000);
    });
}

// Example usage
awaitCall();
