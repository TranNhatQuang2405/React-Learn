// console.log(window.Redux);
const { createStore } = window.Redux;

//State
const initialState = [];
//Reducer
const jobReducer = (state = initialState, action) => {
    return state;
};
//Store
const store = createStore(jobReducer);

//Render
const renderJobList = (jobList) => {
    if (!Array.isArray(jobList) || jobList.length === 0) return;
    const ulElement = document.querySelector("#jobList");
    const inner = jobList.map((value, index) => `<li>${value}</li>`).join("");
    ulElement.innerHTML = inner;
};

renderJobList([1, "helo", 2]);
