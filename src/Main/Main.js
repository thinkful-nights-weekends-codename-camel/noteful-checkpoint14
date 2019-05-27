import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import NoteList from '../NoteList/NoteList';

export default class Main extends Component {
    render () {
        return (
            <section aria-label="main-page" className="main-page">
                <SideBar />
            {/* Route - dynamic path "/folder/:folder.id"
            // displays folder w/ filtered notes */}
                <NoteList />
            {/* Route - dynamic path "/note/:note.id"
            // displays only note with sidebar name w/ back button */}
            </section>
        );
    }
}