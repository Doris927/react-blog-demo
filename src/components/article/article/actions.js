import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from "./actionTypes";

export const fetchArticleStarted = () =>({
    type: FETCH_STARTED
});

export const fetchArticleSuccess  = (result) => ({
    type: FETCH_SUCCESS,
    result
});

export const fetchArticleFailure = (error) => ({
    type: FETCH_FAILURE,
    error
});

export const fetchArticle = (id) => {
    return (dispatch) => {
        //const apiUrl = `/data/page${page}.json`;
        const apiUrl = `https://api.github.com/repos/tammytangg/react-blog-demo/issues/${id}`;

        dispatch(fetchArticleStarted());

        return fetch(apiUrl).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }

            response.json().then((responseJson) => {
                //console.log("responseJson:"+responseJson);
                dispatch(fetchArticleSuccess(responseJson));
            }).catch((error) => {
                dispatch(fetchArticleFailure(error));
            });
        }).catch((error) => {
            dispatch(fetchArticleFailure(error));
        })
    };
}