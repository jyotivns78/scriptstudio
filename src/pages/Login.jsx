import React from 'react';
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import "../assets/css/login.css";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <MDBContainer fluid className='col-10 p-5 contain' style={{ backgroundColor: '#FFFBED' }}>
      <div className='text-center mb-5'>
      <h3>Welcome To TheReadWhere</h3>
      </div>
      <MDBRow>
        
        <MDBCol col="10" md="6" className='left'>
        <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998', borderRadius: '100px'}}>
            <MDBIcon fab icon="facebook-f" className="mx-2"/>
            Facebook
          </MDBBtn>

          <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#55acee', borderRadius: '100px'}}>
            <MDBIcon fab icon="twitter" className="mx-2"/>
            Twitter
          </MDBBtn> 
          <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#FFFFFF', borderRadius: '100px' , color: '#000'}}>
            <MDBIcon fab icon="google" className="mx-2"/>
            Google
          </MDBBtn>
          <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#187EB4', borderRadius: '100px'}}>
            <MDBIcon fab icon="linkedin" className="mx-2"/>
            LinkedIn
          </MDBBtn>

          </MDBCol>
        <MDBCol col="4" md="6">
          <MDBInput wrapperClass='mb-4 bg-white inputs' label="Email Address" id='formControlLg' type='email' size='lg' />
          <MDBInput wrapperClass='mb-4 bg-white inputs' label='Password' id='formControlLg' type='password' size="lg"/>
          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>
          <div className='text-center w-80 pb-3'>
          <p>By registering for a Thereadwhere account, you agree to the <Link to='#'>Terms of Use</Link> and the <Link to='#'>Privacy Policy</Link></p>
         
          </div>
           <Link to="/news"><MDBBtn className="mb-4 w-100 p-3" size="lg" style={{ borderRadius: '100px', backgroundColor: "#90DCC0" }}>Sign in</MDBBtn></Link>
           
        </MDBCol>
      </MDBRow>
      <div className='text-center w-80 p-3'>
          <p><Link to="/signup">New User? Sign up now</Link> It’s fast, easy and free</p>
         
          </div>
    </MDBContainer>
  )
}

export default Login