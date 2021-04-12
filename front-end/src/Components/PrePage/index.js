import React from 'react';
import PageLayout from '../PageLayout/PageLayout';
import PrePage from './PrePage';

const index = (props) => {
    return (
        <PageLayout {...props}>
            <PrePage />
        </PageLayout>
    );
}

export default index;