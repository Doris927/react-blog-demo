import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from "./actionTypes";

export const fetchTagsStarted = () =>({
    type: FETCH_STARTED
});

export const fetchTagsSuccess  = (result) => ({
    type: FETCH_SUCCESS,
    result
});

export const fetchTagsFailure = (error) => ({
    type: FETCH_FAILURE,
    error
});

export const fetchTags = () => {
    return (dispatch) => {
        //const apiUrl = `/data/page${page}.json`;
        const apiUrl = `https://api.github.com/repos/tammytangg/react-blog-demo/labels`;

        dispatch(fetchTagsStarted())

        return fetch(apiUrl).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }

            response.json().then((responseJson) => {
                //console.log("responseJson:"+responseJson);
                dispatch(fetchTagsSuccess(responseJson));
            }).catch((error) => {
                dispatch(fetchTagsFailure(error));
            });
        }).catch((error) => {
            dispatch(fetchTagsFailure(error));
        })
    };
}
