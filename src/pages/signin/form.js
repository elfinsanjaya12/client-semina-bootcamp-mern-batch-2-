import React from 'react';
import SButton from '../../components/Button';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import { Form } from 'react-bootstrap';

export default function SForm({ form, handleChange, handleSubmit, isLoading }) {
  return (
    <Form>
      <TextInputWithLabel
        placeholder={'Masukan email'}
        label={'Email'}
        name='email'
        value={form?.email}
        type='email'
        onChange={handleChange}
      />
      <TextInputWithLabel
        placeholder={'Masukan password'}
        label={'Password'}
        name='password'
        value={form?.password}
        type='password'
        onChange={handleChange}
      />
      <SButton
        loading={isLoading}
        disabled={isLoading}
        variant='primary'
        action={handleSubmit}
      >
        Submit
      </SButton>
    </Form>
  );
}
