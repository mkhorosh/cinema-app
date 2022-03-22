import React from 'react';
import './App.css';
import { Header } from '../features/header/Header.component';
import { SessionTable } from '../features/table/SessionTable.component';

function App() {
    return (
        <div>
            <Header />
            <SessionTable />
        </div>
    );
}

export default App;
