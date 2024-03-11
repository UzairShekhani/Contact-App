import React from 'react'
import Modal from './modal'
import { Field, Form, Formik } from 'formik';

const AddAndUpdateContact = ({isOpen,onClose}) => {
  return (
    <div>
    <Modal isOpen={isOpen} onClose={onClose}>       
        <Formik>
            <Form>
                <div className='flex flex-col gap-1'>
                    <label className='' htmlFor="name">nae </label>
                    <Field name="name" className="border" />
                </div>
                
            </Form>
        </Formik>
  </Modal>
  </div>
  );
};

export default AddAndUpdateContact; 