const endpoint = 'https://www.boredapi.com/api/activity';

// const button = document.querySelector('.button');

const form = document.querySelector('.form');

const activityWrapper = document.querySelector('.activity');

const getActivity = async (event) => {
    event.preventDefault();
    const isFree = event.target.children.namedItem('free').checked;
    let api = isFree ? `${endpoint}?price=0` : endpoint;

    const response = await fetch(api);
    const json = await response.json();
    const {activity} = json;

    activityWrapper.innerHTML = activity;
}

form.addEventListener('submit', getActivity);