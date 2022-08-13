import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BreadCrumb from '../../components/Breadcrumb';
import Table from '../../components/TableWithAction';
import SearchInput from '../../components/SearchInput';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders, setPage, setDate } from '../../redux/orders/actions';
import AlertMessage from '../../components/Alert';
import { fetchListEvents } from '../../redux/lists/actions';
import DateRange from '../../components/InputDate';
import { formatDate } from '../../utils/formatDate';

function OrderPage() {
  const dispatch = useDispatch();

  const notif = useSelector((state) => state.notif);
  const orders = useSelector((state) => state.orders);

  let [isShowed, setIsShowed] = React.useState(false);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch, orders.page, orders.date]);

  useEffect(() => {
    dispatch(fetchListEvents());
  }, [dispatch]);

  const displayDate = `${
    orders.date?.startDate ? formatDate(orders.date?.startDate) : ''
  }${orders.date?.endDate ? ' - ' + formatDate(orders.date.endDate) : ''}`;

  return (
    <Container className='mt-3'>
      <BreadCrumb textSecound={'orders'} />
      <Row>
        <Col
          className='cursor-pointer position-relative'
          onClick={() => setIsShowed(true)}
        >
          <SearchInput disabled query={displayDate} />
          {isShowed ? (
            <DateRange
              date={orders.date}
              setIsShowed={() => setIsShowed(!isShowed)}
              onChangeDate={(ranges) => dispatch(setDate(ranges.selection))}
            />
          ) : (
            ''
          )}
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>

      {notif.status && (
        <AlertMessage type={notif.typeNotif} message={notif.message} />
      )}
      <Table
        status={orders.status}
        thead={[
          'Nama',
          'Email',
          'Judul',
          'Tanggal Event',
          'Tanggal Order',
          'Tempat',
        ]}
        data={orders.data}
        tbody={['name', 'email', 'title', 'date', 'orderDate', 'venueName']}
        pages={orders.pages}
        actionNotDisplay
        handlePageClick={({ selected }) => dispatch(setPage(selected + 1))}
      />
    </Container>
  );
}

export default OrderPage;
