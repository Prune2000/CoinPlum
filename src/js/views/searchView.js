import { elements } from './base';

export const getInput = () => elements.searchInput.value;

const renderTweet = tweet => {
    const markup = `
        <div class="tweet_card">
            <img src="${tweet.user_image_link}" alt="${tweet.user_name}" class="profile-thumbnail">
        <div class="profile-name">
            <h4>@${tweet.user_name}</h4>
        </div>
        </header>
        <div id="inner">
            <p>${tweet.status}</p>
            <span class="date">${tweet.date}</span>
            <hr>
        </div>
        <div class="stats">
            <div class="retweets">
            <strong>${tweet.retweet_count}</strong> Retweets
            </div>
            <div class="likes">
            <strong>${tweet.like_count}</strong> Likes
            </div>
        </div>
    </div>
    `;
    elements.twitterSection.insertAdjacentHTML('beforeend', markup);
};

export const renderResults = tweet => {

    console.log(tweet);
    renderTweet(tweet[0]);
    renderTweet(tweet[1]);
    renderTweet(tweet[2]);
    renderTweet(tweet[3]);
    renderTweet(tweet[4]);
    renderTweet(tweet[5]);
    renderTweet(tweet[6]);
    renderTweet(tweet[7]);
    renderTweet(tweet[8]);
    renderTweet(tweet[9]);
    //const start = tweet[0];
    //const end = tweet[9];

    //tweet.slice(start, end).forEach(renderTweet);

};
