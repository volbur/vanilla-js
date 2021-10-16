'use strict';

const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');

tweetForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;

  addTweet(usernameInput.value, tweetInput.value);

  usernameInput.value = '';
  tweetInput.value = '';
});

const addTweet = (username, tweet) => {
  const newTweet = document.createElement('li');
  newTweet.append(`${username}- ${tweet}`);
  tweetsContainer.append(newTweet);
};

tweetsContainer.addEventListener('click', (event) => {
  event.target.nodeName === 'LI' && event.target.remove();
});
