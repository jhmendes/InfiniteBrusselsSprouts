// YOUR CODE GOES HERE
// when you click on the link, it should append x amount
// more tweets to the existing page instead of going to a new page

$('.more-sprouts').on('click', (event) => {
  event.preventDefault();

  let page = 1;
  page++;

  let request = $.ajax({
    method: 'GET',
    url: '/tweets.json?page=' + page
  })

  request.done((tweets) => {
    tweets.forEach((tweet) => {

      $('.tweets').append(
        `<li class="tweet">
            <div class="body">${tweet.text}</div>
            <div class="user">${tweet.username}</div>
          </li>`);
    })
  })
});
