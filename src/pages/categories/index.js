import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Container, Table, Spinner } from 'react-bootstrap';
import SButton from '../../components/Button';
import SBreadCrumb from '../../components/Breadcrumb';
import SNavbar from '../../components/Navbar';
import { getData } from '../../utils/fetch';

export default function PageCategories() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCategoriesAPI = async () => {
      setIsLoading(true);
      try {
        const res = await getData(`/cms/categories`);

        setIsLoading(false);
        setData(res.data.data);
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    };
    getCategoriesAPI();
  }, []);

  return (
    <>
      <SNavbar />
      <Container className='mt-3'>
        <SBreadCrumb textSecound='Categories' />

        <SButton action={() => navigate('/categories/create')}>Tambah</SButton>

        <Table className='mt-3' striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={data.length + 1} style={{ textAlign: 'center' }}>
                  <div className='flex items-center justify-center'>
                    <Spinner animation='grow' variant='light' />
                  </div>
                </td>
              </tr>
            ) : (
              data.map((data, index) => (
                <tr key={index}>
                  <td>{(index += 1)}</td>
                  <td>{data.name}</td>
                  <td>Otto</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
