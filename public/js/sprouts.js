// YOUR CODE GOES HERE
  let page = 2;

$('.more-sprouts').on('click', (event) => {
  event.preventDefault();

  let request = $.ajax({
    method: 'GET',
    url: '/tweets.json?page=' + page
  });

  request.done((tweets) => {
    tweets.forEach((tweet) => {

      $('.tweets').append(
        `<li class="tweet">
            <div class="body">${tweet.text}</div>
            <div class="user">${tweet.username}</div>
          </li>`);

    });
  });
  page++;
});
