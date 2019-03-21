import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE, SET_ARCHIVE} from "./actionTypes";

export const fetchArchivesStarted = () =>({
    type: FETCH_STARTED
});

export const fetchArchivesSuccess  = (result) => ({
    type: FETCH_SUCCESS,
    result
});

export const fetchArchivesFailure = (error) => ({
    type: FETCH_FAILURE,
    error
});

export const setArchive = (archive) => ({
    type: SET_ARCHIVE,
    archive
});

export const fetchArchives = () => {
    return (dispatch) => {
        //const apiUrl = `/data/page${page}.json`;
        const apiUrl = `https://api.github.com/repos/tammytangg/react-blog-demo/milestones`;

        dispatch(fetchArchivesStarted())

        return fetch(apiUrl).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }

            response.json().then((responseJson) => {
                //console.log("responseJson:"+responseJson);
                dispatch(fetchArchivesSuccess(responseJson));
            }).catch((error) => {
                dispatch(fetchArchivesFailure(error));
            });
        }).catch((error) => {
            dispatch(fetchArchivesFailure(error));
        })
    };
}
