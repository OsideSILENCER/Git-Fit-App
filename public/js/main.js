document.querySelector(".btn-logout").addEventListener("click", async() => {
    try {
        await fetch("/api/user/logout", { method: "POST" });
        document.location.replace("/login");
    } catch (error) {
        console.error(error);
        console.error("Failed to logout.");
    }
});