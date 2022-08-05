import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import NavLink from '../NavAccess';
import { useNavigate } from 'react-router-dom';
import {
  categories,
  talents,
  events,
  participant,
  payments,
  orders,
} from '../../const/access';

function SNavbar() {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      let role = localStorage.getItem('role')
        ? localStorage.getItem('role')
        : '';

      setRole(role);
    };
    fetchData();
  }, []);

  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>Dashboard</Navbar.Brand>
        <Nav className='me-auto'>
          <NavLink
            role={role}
            roles={categories.lihat}
            action={() => navigate('/')}
          >
            Home
          </NavLink>
          <NavLink
            role={role}
            roles={categories.lihat}
            action={() => navigate('/categories')}
          >
            Categories
          </NavLink>
          <NavLink
            role={role}
            roles={talents.lihat}
            action={() => navigate('/talents')}
          >
            Talents
          </NavLink>
          <NavLink
            role={role}
            roles={payments.lihat}
            action={() => navigate('/payments')}
          >
            Payment
          </NavLink>
          {/* <NavLink
            role={role}
            roles={organizers.lihat}
            action={() => navigate('/organizers')}
          >
            Oranizer
          </NavLink> */}
          <NavLink
            role={role}
            roles={events.lihat}
            action={() => navigate('/events')}
          >
            Events
          </NavLink>
          <NavLink
            role={role}
            roles={participant.lihat}
            action={() => navigate('/participant')}
          >
            Participant
          </NavLink>
          <NavLink
            role={role}
            roles={orders.lihat}
            action={() => navigate('/transactions')}
          >
            Transactions
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default SNavbar;
