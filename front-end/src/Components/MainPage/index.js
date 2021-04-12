import React from 'react';
import PageLayout from '../PageLayout/PageLayout';
import MainPage from './MainPage';

const index = (props) => {
    return (
        <PageLayout {...props}>
            <MainPage />
        </PageLayout>
    );
}

export default index;
