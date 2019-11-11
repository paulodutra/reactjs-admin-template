import React from 'react';
import { 
    Nav,
    Navbar, 
    NavbarBrand, 
    NavbarToggler

} from 'reactstrap';

export default function Header(props) {

    function handleClickToSidebar(event) {
        //Para não da refresh
        event.preventDefault();
        //aplica uma nova classe dentro da div com a classe main-wrapper e adiciona o toggled
        document.getElementById('main-wrapper').classList.toggle('toggled')

    }

    return(
        <header>
            <Navbar color="light" light>
                <NavbarBrand href="/">
                    <img src="https://via.placeholder.com/150x50" alt="logo" />
                </NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavbarToggler onClick={handleClickToSidebar} />
                </Nav>
            </Navbar>
        </header>
    );

}
