document.addEventListener("DOMContentLoaded", function() {
    fetchUserData();
});

function fetchUserData() {
    const userDataContainer = document.getElementById("userData");

    fetch("https://reqres.in/api/users?page=2")
        .then(response => response.json())
        .then(data => {
           
            const users = data.data;

          
            users.forEach(user => {
                const userDiv = document.createElement("div");
                userDiv.classList.add("user-card");

                const userImage = document.createElement("img");
                userImage.src = user.avatar;
                userImage.alt = "User Avatar";

                const userEmail = document.createElement("p");
                userEmail.textContent = user.email;

                userDiv.appendChild(userImage);
                userDiv.appendChild(userEmail);

                userDataContainer.appendChild(userDiv);
            });
        })
        .catch(error => {
            console.error("Error fetching user data:", error);
        });
}