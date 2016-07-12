// import request from 'travis-ci-get'
// import retrieve from 'travis-ci-access-token'

// let opts = { 'pathname': '/repos/kgryte/utils-copy',
//             'token': '07b2acd0a40fe0d66abf7e268903776b75b6ab02',
//             'accept': 'application/vnd.travis-ci.2+json' }
//
//
// function onResponse (error, data) {
//     if ( error )
//         throw new Error( error.message )
//
//     return data
//     // returns <response_data>
// }

// Przez problem z uzyskaniem autentykacji githuba za posrednictwem
// Travis CI Api zostalo uzyte Github Api do pobierania statusu repozytorium
import 'whatwg-fetch'
import * as constants from '../constants/constants'

export function setRepoState (st) {
    return {
        type: constants.SET_REPO_STATE,
        state: st
    }
}

export function clearStore () {
    return {
        type: constants.CLEAR_STORE
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
                .then(data => dispatch(setRepoState(data[0].state)))
            .catch(response => {
                alert(response.message)
                dispatch(clearStore())
            })

    }

}
