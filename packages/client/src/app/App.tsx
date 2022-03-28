import React from 'react';
import './App.css';
import { Header } from '../features/header/Header.component';
import { SessionTable } from '../features/table/SessionTable.component';
import { SessionModal } from '../features/modal/SessionModal.component';

function App() {
    return (
        <div>
            <Header />
            <SessionTable />
            <SessionModal />
        </div>
    );
}

export default App;
