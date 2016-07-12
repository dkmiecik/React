import React, { Component } from 'react'

export default class Info extends Component {

    render () {
        return (
            <div className="infoContent">
                <h1>Założenia projektu</h1>
                <ul>
                    <li className="passed">Aplikacja wyświetla stan ostatniego buildu Twoich pięciu ulubionych
                        publicznych projektów na Githubie
                    </li>
                    <li className="failed">Aplikacja korzysta z API Travis CI (<a
                        href="https://github.com/travis-ci/travis-ci/issues/5649">Wyjaśnienie</a>)
                    </li>
                    <li className="passed">UI dowolne – wymagane jedynie wizualne rozróżnienie buildów udanych i
                        nieudanych (np. kolorami zielony/czerwony)
                    </li>
                    <li className="passed">Aplikacja uwzględnia, że w przyszłości możemy chcieć wyświetlać więcej niż 5
                        projektów
                    </li>
                </ul>
            </div>
        )
    }
}

