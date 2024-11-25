let lastHomePageCallTime = 0;  // Track the time when the Home Page was last called

load.initialize(async function () {
    await callHomePage();  // Call Home Page initially
});

load.action("Action", async function () {

    // Start the iteration
    load.log("Step 2 - Search page called", load.LogLevel.info);
    await callHomePage();  // Check if it's time for Home Page
    load.sleep(3);  // Simulate action delay

    load.log("Step 3 - View Product page called", load.LogLevel.info);
    await callHomePage();  // Check if it's time for Home Page
    load.sleep(3);  // Simulate action delay

    load.log("Step 4 - Add to cart page called", load.LogLevel.info);
    await callHomePage();  // Check if it's time for Home Page
    load.sleep(3);  // Simulate action delay

    load.log("Step 5 - Check out page called", load.LogLevel.info);
    await callHomePage();  // Check if it's time for Home Page
    load.sleep(3);  // Simulate action delay

    load.log("Step 6 - Some other page called", load.LogLevel.info);
    await callHomePage();  // Check if it's time for Home Page
    load.sleep(3);  // Simulate action delay

    // Final check at the end
    await callHomePage();  // Final check for Home Page if 2 seconds have passed

    load.log("Action phase completed", load.LogLevel.info);
});

async function callHomePage() {
    let currentTime = Date.now();
    if (currentTime - lastHomePageCallTime >= 5000) {  // 5 seconds have passed
        load.log("Step 1 - Home page called", load.LogLevel.info);
        lastHomePageCallTime = currentTime;  // Update last call time
    }
}
