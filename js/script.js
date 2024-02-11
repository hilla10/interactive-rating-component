// Get the rating options and submit button
const ratings = document.querySelectorAll('.main__rating p');
const submitBtn = document.getElementById('submitBtn');

let selectedRating = null;

// Add event listeners to the rating options
ratings.forEach((rating) => {
    rating.addEventListener('click', () => {
        const currentRating = rating.innerText;

        if (selectedRating === currentRating) {
            // Deselect the rating if it is clicked again
            rating.style.backgroundColor = "";
            selectedRating = null;
        } else {
            // Remove the background color from all rating options
            ratings.forEach((rating) => {
                rating.style.backgroundColor = "";
                rating.style.color = "";
            });
            // Set the background color and update the selected rating
            rating.style.backgroundColor = "hsl(217, 12%, 63%)";
            rating.style.color = "#fff";
            selectedRating = currentRating;
        }
        document.getElementById("selectedRating").textContent = `You selected ${selectedRating} out of 5`;
    });
});

// Add event listener to the submit button
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (selectedRating) {

        // Hide the main section
        document.querySelector(".main").style.display = "none";
        // Show the thank you section
        document.querySelector(".thankyou").style.display = "block";
    } else {
        const errorMsg = document.getElementById('errorMsg');
        errorMsg.textContent = "please select a rating befor submitting.";
        errorMsg.style.color = "rgb(255, 62, 62)";
        errorMsg.style.padding = "6px 0";
        errorMsg.style.textAlign = "center";
    }
});