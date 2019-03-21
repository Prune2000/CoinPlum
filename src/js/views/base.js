export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    twitterTitle: document.querySelector('.twitter__title'),
    twitterSection: document.querySelector('.tweets'),
    eventTitle: document.querySelector('.events__title'),
    eventSection: document.querySelector('.events'),
    coinInfo: document.querySelector('.container__info-fullInfo'),

};

export const elementStrings = {
    loader: 'loader'
};

export const renderLoader = parent => {
    const loader = `
        <div class="${elementStrings.loader}">
            <svg>
                <use href="js/views/img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if (loader) loader.parentElement.removeChild(loader);
};