import React from 'react';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Alert } from 'antd';

const initialValues = {
    name: '',
    link: '',
    website: 'amazon',
}



const API = {
    URL: 'http://localhost:8000/',
    key: 'password'
}

const formSubmitHandler = (values) => {
    //Axios post request to API Endpoint
    const data = {
        name: values.name,
        link: values.link,
        website: values.website,
    }
    axios.post(API.URL, data)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    console.log(values);
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    link: Yup.string().required('Required'),
    website: Yup.string().required('Required'),
});



const AddProduct = () => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={formSubmitHandler}
            validationSchema={validationSchema}>
            <Form
                labelCol={{ xs: 4 }}
                wrapperCol={{ xs: 20 }}
            >
            <div className="outer-form-box">
                <div className="inner-form-box">

                    <h2 class="minor-heading-3">Please add the product details:</h2>

                    <div>
                        <label htmlFor='website' class="label-normal">Website</label>
                        <Field as="select" name="website" id="website" class='input-area-1' >
                            <option value="amazon">Amazon</option>
                            <option value="flipkart">Flipkart</option>
                            <option value="other">Other</option>
                        </Field>
                        <ErrorMessage render={text => <Alert message={text} showIcon type='warning' />} name='website' />
                    </div>

                    <div >
                        <label htmlFor='name' class="label-normal">Product Name</label>
                        <Field type='text' id='name' name='name' class='input-area-1' />
                        <ErrorMessage render={text => <Alert message={text} showIcon type='warning' />} name='name' />
                    </div>

                    <div>
                        <label htmlFor='link' class="label-normal">Product Link</label>
                        <Field type='text' id='link' name='link' class='input-area-1' />
                        <ErrorMessage render={text => <Alert message={text} showIcon type='warning' />} name='link' />
                    </div>
                    
                    <button type='submit' class="button-basic">Add Product!</button>
                </div>
            </div>
            </Form>
        </Formik >
    );
}

export default AddProduct;