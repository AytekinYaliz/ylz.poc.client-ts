import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './HeaderComponent.less';
import { IGlobalState, ICurrentUserState } from '../../types/IGlobalState';


type IProps = {
    currentUser: ICurrentUserState;
};

const HeaderComponent: React.StatelessComponent<IProps> = (props: IProps) => (
    <Navbar inverse={true} collapseOnSelect={true}>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/"><img src="/img/logo_32x30.jpg" /></Link>
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
                    <NavItem eventKey={1} title="Click to log out.">{props.currentUser.name}</NavItem>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);
const mapStateToProps = (state: IGlobalState) => {
    return {
        currentUser: state.currentUserState
    };
};

export default connect(
    mapStateToProps
) (HeaderComponent);
