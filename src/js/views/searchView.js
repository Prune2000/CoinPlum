import { elements } from './base';

export const getInput = () => elements.searchInput.value;

const renderTweet = tweet => {
    const markup = `
        <div class="tweet_card">
            <img src="${tweet.user_image_link}" alt="${tweet.user_name}" class="profile-thumbnail">
        <div class="profile-name">
            <h4>@${tweet.user_name}</h4>
        </div>
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

const renderEvent = event => {
    const markup = `
        <div class="event_card">
            <img src="${event.proof_image_link}" alt="${event.id}" class="event-thumbnail">
        <div class="event-name">
            <h4>${event.name}</h4>
        </div>
        <div id="inner_event">
            <p>${event.description}</p>
            <a href="${event.link}"><p>Link to the event information</p></a>
            <span class="date">${event.date}</span>
            <hr>
        </div>
    </div>
    `;
    elements.eventSection.insertAdjacentHTML('beforeend', markup);
};

export const renderTweetResults = inputSearch => {
    inputSearch.forEach(renderTweet);
};

export const renderEventResults = inputSearch => {
    inputSearch.forEach(renderEvent);
};
