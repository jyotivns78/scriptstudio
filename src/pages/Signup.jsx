import React from 'react';
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import "../assets/css/login.css";
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <MDBContainer fluid className='col-6 p-5 contain signup_contain' style={{ backgroundColor: '#FFFBED' }}>
    <div className='text-center mb-5'>
    <h3>Welcome To TheReadWhere</h3>
    </div>
    <MDBRow>
 
      <MDBCol col="12" md="12">
        <h6 className='mb-4'>Create TheReadWhere account</h6>
        <MDBInput wrapperClass='mb-4 bg-white inputs' label="Email Address" id='formControlLg' type='email' size='lg' />
        <MDBInput wrapperClass='mb-4 bg-white inputs' label='Password' id='formControlLg' type='password' size="lg"/>
        <div className='d-flex'>
        <MDBInput wrapperClass='mb-4 mr-2 bg-white inputs' label="First Name" id='formControlLg' type='text' size='lg' />
        <MDBInput wrapperClass='mb-4 bg-white inputs' label='Last Name' id='formControlLg' type='text' size="lg"/>
        </div>
        <h6 className='mb-4'>Allow email communications:</h6>
        <div className="d-flex mx-4 mb-4 check-div">
          <MDBCheckbox  name='flexCheck' value='' id='flexCheckDefault' className='custom-checkbox mt-2' />
          <div className='d-flex flex-column mx-2'>
            <span>General Updates</span>
            <small className='text-muted'>New titles, new features, and other cool updates.</small>
          </div>
        </div>
        <div className="d-flex mx-4 mb-4 check-div">
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' className='custom-checkbox mt-2' />
          <div className='d-flex flex-column mx-2'>
            <span>New issues and topic trends</span>
            <small className='text-muted'>Choose frm your saved topics and favorite publication below.</small>
          </div>
        </div>
        <div className='text-center w-80 pb-3'>
        <p>By registering for a Thereadwhere account, you agree to the <Link to='#'>Terms of Use</Link> and the <Link to='#'>Privacy Policy</Link></p>
       
        </div>
         <MDBBtn className="mb-4 w-100 p-3" size="lg" style={{ borderRadius: '100px', backgroundColor: "#90DCC0" }}>Create My Account</MDBBtn>
         
         <p className='text-center w-80 pb-3'>Without an account, you can still access thereadwhere catalog via a sponsored <Link to="#">Hotspot</Link></p>
      </MDBCol>
    </MDBRow>
    <hr />
    <div className='text-center w-80 p-3'>
        <p>Existing User?<Link to="/signup">Please sign in</Link></p>
       
        </div>
  </MDBContainer>
  )
}

export default Signup