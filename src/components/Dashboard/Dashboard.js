
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer,MDBBtn  } from "mdbreact";
//import Toggle from './Toggle/Toggle.js';
import {  MDBRow, MDBCol } from "mdbreact";
import Button from 'react-bootstrap/Button';
import NewAccountModal from '../Account/NewAccountModal.js';
import NewCategoryModal from '../Category/NewCategoryModal.js';
//import NewCurrencyModal from '../Currency/NewCCurrencyModal.js';
import NewTransactionModal from '../Transaction/NewTransactionModal.js';
//import NewTransactionModal from '../Transaction/NewTransactionModal.js';
import HistoryTransactionModal from '../Transaction/HistoryTransactionModal.js';
import React, { useState } from "react"
import Stocks from './Stocks.js';
import "./Dashboard.css";

const Dashboard = () => {
  const [accountModalShow, setAccountModalShow] = useState(false);
  const [currencyModalShow, setCurrencyModalShow] = useState(false);
  const [categoryModalShow, setCategoryModalShow] = useState(false);
  const [transactionModalShow, setTransactionModalShow] = useState(false);
  const [historyTransactionModalShow, setHistoryTransactionModalShow] = useState(false);
return (
  <>
    <header className="headerfra">
      <h2>Dashboard</h2>
    </header>
  <MDBRow>
  <MDBCol>
    <img src="https://cdn.mos.cms.futurecdn.net/FYjFKKZ65KqMgGUo2EwWER-970-80.jpeg.webp" alt="thumbnail" className="img-thumbnail" />
    <h2>Golden Bank</h2>
  </MDBCol>
 <MDBCol>    <Stocks/>
  {/* <MDBContainer>
 
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
    <Button variant="success" onClick={() => setHistoryTransactionModalShow(true)}>Show Transactions</Button>
  <HistoryTransactionModal show={historyTransactionModalShow} onHide={() => setHistoryTransactionModalShow(false)} />
      <Button variant="primary" onClick={() => setTransactionModalShow(true)}>New Movement</Button>
  <NewTransactionModal show={transactionModalShow} onHide={() => setTransactionModalShow(false)} />
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
    <Button variant="success" onClick={() => setTransactionModalShow(true)}>
      Show Transactions
  </Button>
  <NewAccountModal show={transactionModalShow} onHide={() => setTransactionModalShow(false)} />
 <Button variant="primary" onClick={() => setTransactionModalShow(true)}>New Movement</Button>
    <NewTransactionModal show={transactionModalShow} onHide={() => setTransactionModalShow(false)} />

   
    </div>
  </MDBCard>

</MDBContainer> */}

   </MDBCol>

   <MDBCol>
<MDBContainer>
  <MDBCard className="card-body" style={{ width: "22rem", marginTop: "1rem" }}>
    <MDBCardTitle>Account</MDBCardTitle>
    <MDBCardText>
    <Button variant="warning" onClick={() => setAccountModalShow(true)}>
      New Account
  </Button>
  <NewAccountModal show={accountModalShow} onHide={() => setAccountModalShow(false)} />
    </MDBCardText>
  </MDBCard>
  <MDBCard className="card-body" style={{ width: "22rem", marginTop: "1rem" }}>
    <MDBCardTitle>Actual currency  $</MDBCardTitle>
    <MDBCardText>
    <Button variant="warning" onClick={() => setCategoryModalShow(true)}>
     Change Currency
  </Button>
  <NewAccountModal show={categoryModalShow} onHide={() => setCategoryModalShow(false)} />
    </MDBCardText>
  </MDBCard>
  <MDBCard className="card-body" style={{ width: "22rem", marginTop: "1rem" }}>
    <MDBCardTitle>Categories</MDBCardTitle>
    <MDBCardText>
    <Button variant="warning" onClick={() => setCategoryModalShow(true)}>
      New Category
  </Button>
  <NewCategoryModal show={categoryModalShow} onHide={() => setCategoryModalShow(false)} />
    </MDBCardText>
    {/* <div className="flex-row">
      <a href="#!" style={{ marginLeft: "1.25rem" }}>Create New Category</a>
    </div> */}
  </MDBCard>
</MDBContainer>
   </MDBCol>


</MDBRow>
  <div className="d-inline-flex p-2 col-example">Franklin Escobar</div>





</ >
);
};
export default Dashboard;