import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../features/header/Header.component';
import { Layout } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';
import { SessionModal } from '../features/modal/SessionModal.component';
import SessionTableContainer from '../features/table/SessionTableContainer';

function App() {
    return (
        <Layout>
            <Content>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Header />
                                <SessionTableContainer />
                                <SessionModal />
                            </>
                        }
                    />
                    <Route path="/login" element={<h1>login page</h1>} />
                    <Route path="*" element={<h1>page not found 404</h1>} />
                </Routes>
            </Content>
            <Footer>cinema-app 2022 created by mkhorosh</Footer>
        </Layout>
    );
}

export default App;
