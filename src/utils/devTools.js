import React from 'react'
import { createStore as initialCreateStore, compose } from 'redux'
import LogMonitor from 'redux-devtools-log-monitor'
import SliderMonitor from 'redux-slider-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

export let createStore = initialCreateStore

createStore = compose(
    require('redux-devtools').createDevTools(),
    require('redux-devtools').persistState(
        window.location.href.match(/[?&]debug_session=([^&]+)\b/)
    ),
    createStore
)

export function renderDevTools () {
    return (
        <DockMonitor toggleVisibilityKey="ctrl-h"
                     changePositionKey="ctrl-q"
                     changeMonitorKey="ctrl-m">
            <LogMonitor />
            <SliderMonitor />
        </DockMonitor>
    )
    return null
}
