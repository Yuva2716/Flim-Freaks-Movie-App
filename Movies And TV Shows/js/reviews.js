/*Reviews and Comments*/

document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const comment = document.getElementById('comment').value;

    if (username && comment) {
        const reviewList = document.getElementById('review-list');

        const review = document.createElement('div');
        review.classList.add('review');

        const userNameElement = document.createElement('div');
        userNameElement.classList.add('username');
        userNameElement.textContent = username;

        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.textContent = comment;

        review.appendChild(userNameElement);
        review.appendChild(commentElement);

        reviewList.appendChild(review);

        document.getElementById('review-form').reset();
    }
});
