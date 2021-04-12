import React from 'react';
import PageLayout from '../PageLayout/PageLayout';
import AddProduct from './AddProduct';

const index = (props) => {
    return (
        <PageLayout {...props}>
            <AddProduct />
        </PageLayout>
    );
}

export default index;
