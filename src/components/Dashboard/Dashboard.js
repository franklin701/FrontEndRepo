import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer,MDBBtn  } from "mdbreact";
//import Toggle from './Toggle/Toggle.js';
import {  MDBRow, MDBCol } from "mdbreact";

const Dashboard = () => {
return (
  <>
  <MDBRow>
  <MDBCol>
    <img src="https://mdbootstrap.com/img/Others/documentation/img%20(75)-mini.jpg" alt="thumbnail" className="img-thumbnail" />
  </MDBCol>
 <MDBCol>
  <MDBContainer>
  
  <MDBCard className="card-body" style={{ width: "22rem", marginTop: "1rem" }}>
    <MDBCardTitle>Account #999999 Balance</MDBCardTitle>
    <MDBCardText>
    <h1>Total $: 1,500</h1>
    </MDBCardText>
    <div className='custom-control custom-switch'>
        <input
          type='checkbox'
          className='custom-control-input'
          id='customSwitches'
          readOnly
        />
        <label className='custom-control-label' htmlFor='customSwitches'>
           Active
        </label>
      </div>
      <br/>
    <div className="flex-row">
      <a href="#!">See history</a>
      <a href="#!" style={{ marginLeft: "1.25rem" }}>Create movement</a>
    </div>
  </MDBCard>
</MDBContainer>
</MDBCol>
<MDBCol>
<MDBContainer>
  <MDBCard className="card-body" style={{ width: "22rem", marginTop: "1rem" }}>
    <MDBCardTitle>Account #123456 Balance</MDBCardTitle>
    <MDBCardText>
      <h1>Total $: 12,500</h1>
    </MDBCardText>
    <div className='custom-control custom-switch'>
        <input
          type='checkbox'
          className='custom-control-input'
          id='customSwitches'
          readOnly
        />
        <label className='custom-control-label' htmlFor='customSwitches'>
           Active
        </label>
      </div>
      <br/>
     
    <div className="flex-row">
      <a href="#!">See history</a>
      <a href="#!" style={{ marginLeft: "1.25rem" }}>Create movement</a>
     

   
    </div>
  </MDBCard>

</MDBContainer>
   </MDBCol>

   <MDBCol>
<MDBContainer>
  <MDBCard className="card-body" style={{ width: "22rem", marginTop: "1rem" }}>
    <MDBCardTitle>Create new Account</MDBCardTitle>
    <MDBCardText>
   
    </MDBCardText>
  
     
    <div className="flex-row">
      <a href="#!" style={{ marginLeft: "1.25rem" }}>New Account</a>
     

   
    </div>
  </MDBCard>
  <MDBCard className="card-body" style={{ width: "22rem", marginTop: "1rem" }}>
    <MDBCardTitle>Actual currency  $</MDBCardTitle>
    <MDBCardText>
    </MDBCardText>
    <div className="flex-row">
      <a href="#!" style={{ marginLeft: "1.25rem" }}>Change Currency</a>
    </div>
  </MDBCard>
  <MDBCard className="card-body" style={{ width: "22rem", marginTop: "1rem" }}>
    <MDBCardTitle>Categories</MDBCardTitle>
    <MDBCardText>
    </MDBCardText>
    <div className="flex-row">
      <a href="#!" style={{ marginLeft: "1.25rem" }}>Create New Category</a>
    </div>
  </MDBCard>
</MDBContainer>
   </MDBCol>


</MDBRow>
  <div className="d-inline-flex p-2 col-example">Franklin Escobar</div>





</ >
);
};
export default Dashboard;