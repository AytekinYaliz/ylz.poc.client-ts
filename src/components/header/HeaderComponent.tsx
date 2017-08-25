import * as React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './HeaderComponent.less';
import { ICurrentUserState } from '../../types/IGlobalState';
// import Logout from '../logout/LogoutContainer';

type THeader = {
    user: ICurrentUserState
};

const HeaderComponent = (props: THeader) => {
    return (
        <Navbar inverse={true} collapseOnSelect={true}>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/"><img src="/logo_32x30.jpg" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <LinkContainer exact={true} to="/"><NavItem eventKey={1}>Home</NavItem></LinkContainer>
                    <LinkContainer to="/customers"><NavItem eventKey={2}>Customers</NavItem></LinkContainer>
                    <LinkContainer to="/receipts"><NavItem eventKey={3}>Receipts</NavItem></LinkContainer>
                    <LinkContainer to="/invoices"><NavItem eventKey={4}>Invoices</NavItem></LinkContainer>
                </Nav>
                <Nav pullRight={true}>
                    <LinkContainer to="/logout">
                        <NavItem eventKey={1} title="Click to log out.">{props.user.name}</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default HeaderComponent;
