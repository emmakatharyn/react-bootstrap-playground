import React from "react";
import "./App.css";

import Counter from "./components/Counter";

// import Button from "react-bootstrap/Button";
// import Stack from "react-bootstrap/Stack";
// import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

let App = () => {
  return (
    <>
      <BasicExampleNavBar color='primary' />
      <Counter />

      {/* <h1 className='mx-auto text-center my-5'>Hello World</h1>
      <Stack
        className='my-5 ms-1 ms-auto me-auto'
        direction='horizontal'
        gap={2}
      >
        <Button variant='primary' size='lg'>
          Button text
        </Button>
        <Button variant='success' size='lg'>
          Button text
        </Button>
      </Stack>
      <AllTheButts />
      <SizesExample />
      <BlockBtnExample />
      <BasicExampleAlert /> */}
    </>
  );
};

function BasicExampleNavBar({ color }) {
  return (
    <Navbar expand='lg' variant='dark' bg={color}>
      <Container>
        <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link>
            <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// function AllTheButts() {
//   return (
//     <>
//       <Button variant='primary'>Primary</Button>{" "}
//       <Button variant='secondary'>Secondary</Button>{" "}
//       <Button variant='success'>Success</Button>{" "}
//       <Button variant='warning'>Warning</Button>{" "}
//       <Button variant='danger'>Danger</Button>{" "}
//       <Button variant='info'>Info</Button>{" "}
//       <Button variant='light'>Light</Button>{" "}
//       <Button variant='dark'>Dark</Button>
//       <Button variant='link'>Link</Button>
//     </>
//   );
// }
// function SizesExample() {
//   return (
//     <>
//       <div className='mb-2 mt-4'>
//         <Button variant='primary' size='lg'>
//           Large button
//         </Button>{" "}
//         <Button variant='secondary' size='lg'>
//           Large button
//         </Button>
//       </div>
//       <div>
//         <Button variant='primary' size='sm'>
//           Small button
//         </Button>{" "}
//         <Button variant='secondary' size='sm'>
//           Small button
//         </Button>
//       </div>
//     </>
//   );
// }

// function BlockBtnExample() {
//   return (
//     <div className='d-grid gap-2'>
//       <Button variant='primary' size='lg'>
//         Block level button
//       </Button>
//       <Button variant='secondary' size='lg'>
//         Block level button
//       </Button>
//     </div>
//   );
// }

// function BasicExampleAlert() {
//   return (
//     <>
//       {[
//         "primary",
//         "secondary",
//         "success",
//         "danger",
//         "warning",
//         "info",
//         "light",
//         "dark",
//       ].map((variant) => (
//         <Alert key={variant} variant={variant}>
//           This is a {variant} alert—check it out!
//         </Alert>
//       ))}
//     </>
//   );
// }

export default App;
