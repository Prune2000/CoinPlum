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

    console.log(inputSearch);
    renderTweet(inputSearch[0]);
    renderTweet(inputSearch[1]);
    renderTweet(inputSearch[2]);
    renderTweet(inputSearch[3]);
    renderTweet(inputSearch[4]);
    renderTweet(inputSearch[5]);
    renderTweet(inputSearch[6]);
    renderTweet(inputSearch[7]);
    renderTweet(inputSearch[8]);
    renderTweet(inputSearch[9]); 
};

export const renderEventResults = inputSearch => {

    renderEvent(inputSearch[0]);
    renderEvent(inputSearch[1]);
    renderEvent(inputSearch[2]);
    renderEvent(inputSearch[3]);
    renderEvent(inputSearch[4]);
    renderEvent(inputSearch[5]);
    renderEvent(inputSearch[6]);
    renderEvent(inputSearch[7]);
    renderEvent(inputSearch[8]);
    renderEvent(inputSearch[9]);  
};
