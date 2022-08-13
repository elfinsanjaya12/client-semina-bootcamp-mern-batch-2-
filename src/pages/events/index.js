import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BreadCrumb from '../../components/Breadcrumb';
import Button from '../../components/Button';
import Table from '../../components/TableWithAction';
import SearchInput from '../../components/SearchInput';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchEvents,
  setKeyword,
  setCategory,
  setTalent,
} from '../../redux/events/actions';
import SAlert from '../../components/Alert';
import Swal from 'sweetalert2';
import { deleteData } from '../../utils/fetch';
import { setNotif } from '../../redux/notif/actions';
import SelectBox from '../../components/SelectBox';
import {
  fetchListCategories,
  fetchListTalents,
} from '../../redux/lists/actions';

function EventPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const notif = useSelector((state) => state.notif);
  const events = useSelector((state) => state.events);
  const lists = useSelector((state) => state.lists);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch, events.keyword, events.category, events.talent]);

  useEffect(() => {
    dispatch(fetchListTalents());
    dispatch(fetchListCategories());
  }, [dispatch]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Apa kamu yakin?',
      text: 'Anda tidak akan dapat mengembalikan ini!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Iya, Hapus',
      cancelButtonText: 'Batal',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteData(`/cms/events/${id}`);

        dispatch(
          setNotif(
            true,
            'success',
            `berhasil hapus speaker ${res.data.data.name}`
          )
        );

        dispatch(fetchEvents());
      }
    });
  };

  return (
    <Container className='mt-3'>
      <Button action={() => navigate('/events/create')}>Tambah</Button>
      <BreadCrumb textSecound={'Events'} />
      <Row>
        <Col>
          <SearchInput
            name='keyword'
            query={events.keyword}
            handleChange={(e) => dispatch(setKeyword(e.target.value))}
          />
        </Col>
        <Col>
          <SelectBox
            placeholder={'Masukan pencarian kategori'}
            name='category'
            value={events.category}
            options={lists.categories}
            isClearable={true}
            handleChange={(e) => dispatch(setCategory(e))}
          />
        </Col>
        <Col>
          <SelectBox
            placeholder={'Masukan pencarian pembicara'}
            name='talents'
            value={events.talent}
            options={lists.talents}
            isClearable={true}
            handleChange={(e) => dispatch(setTalent(e))}
          />
        </Col>
      </Row>

      {notif.status && (
        <SAlert type={notif.typeNotif} message={notif.message} />
      )}
      <Table
        status={events.status}
        thead={['Judul', 'Tanggal', 'Tempat', 'Kategori', 'Pembicara', 'Aksi']}
        data={events.data}
        tbody={['title', 'date', 'venueName', 'categoryName', 'talentName']}
        editUrl={`/events/edit`}
        deleteAction={(id) => handleDelete(id)}
        withoutPagination
      />
    </Container>
  );
}

export default EventPage;
