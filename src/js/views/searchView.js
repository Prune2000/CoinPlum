import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const cleanInput = () => {
    elements.searchInput.value = '';
}

export const cleanResults = () => {
    elements.twitterTitle.innerHTML = '';
    elements.eventTitle.innerHTML = '';
    elements.coinInfo.innerHTML = '';
    elements.twitterSection.innerHTML = '';
    elements.eventSection.innerHTML = '';
}

const renderCoinInfo = coin => {
    const markup = `
    <div class="title">
        <h1>${coin.name}</h1>
        <p>${coin.description}</p>
    </div>
    `;
    elements.coinInfo.insertAdjacentHTML('beforeend', markup);
}

export const renderTitles = () => {
    elements.twitterTitle.innerHTML = 'Twitter';
    elements.eventTitle.innerHTML = 'Future Events';
}

const renderTweet = tweet => {
    const markup = `
        <a href="${tweet.status_link}" target="_blank"><div class="tweet_card">
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
        </div></a>
    `;
    elements.twitterSection.insertAdjacentHTML('beforeend', markup);
};

const renderEvent = event => {
    const markup = `
        <div class="event_card">
            <div class="event-name">
                <h4>${event.name}</h4>
            </div>
            <div id="inner_event">
                <p>${event.description}</p>
                <a href="${event.link}" target="_blank"><p>Link to the event information</p></a>
                <span class="date">${event.date}</span>
            </div>
        </div>
    `;
    elements.eventSection.insertAdjacentHTML('beforeend', markup);
};

export const renderInfoResults = inputSearch => {
    renderCoinInfo(inputSearch);
};

export const renderTweetResults = inputSearch => {
    inputSearch.forEach(newDate);
    inputSearch.forEach(renderTweet);
};

export const renderEventResults = inputSearch => {
    inputSearch.forEach(newDate);
    inputSearch.forEach(renderEvent);
};

// Format the date
export const newDate = coin => {
    let newDate = coin.date.split('T');
    coin.date = newDate[0];
};



