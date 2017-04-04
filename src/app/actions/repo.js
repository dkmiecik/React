import * as constants from '../constants/constants'

export function setRepoState (st, repoId) {
    return {
        type: constants.SET_REPO_STATE,
        payload: {
            state: st,
            id: repoId
        }
    }
}

export function clearStore () {
    return {
        type: constants.CLEAR_STORE,
        payload: {}
    }
}
export function getRepoSHA (url) {
    return () => {
        return fetch(url + 'branches/master', {
            method: 'get',
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            }
        }).catch(response => {
            alert(response.message)
        })
    }
}

export function fetchRepoDetails (owner, repoId) {
    let url = 'https://api.github.com/repos/' + owner + '/' + repoId + '/'
    return (dispatch) => {
        dispatch(getRepoSHA(url))
            .then(res => res.json())
            .then(data => data.commit.sha)
            .then(sha => fetch(url + 'statuses/' + sha, {
                method: 'get',
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json()))
                .then(data => dispatch(setRepoState(data[0].state, repoId)))
            .catch(response => {
                alert(response.message)
                dispatch(clearStore())
            })

    }

}
