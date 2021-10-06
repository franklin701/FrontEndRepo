
import React, { useState } from "react"
import "./Dashboard.css";
import { stockData } from "../data/data";

import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer,MDBBtn  } from "mdbreact";
//import Toggle from './Toggle/Toggle.js';
import {  MDBRow, MDBCol } from "mdbreact";
import Button from 'react-bootstrap/Button';
import {ButtonGroup,ToggleButton} from 'react-bootstrap';
//import NewCurrencyModal from '../Currency/NewCCurrencyModal.js';
import NewTransactionModal from '../Transaction/NewTransactionModal.js';

import HistoryTransactionModal from '../Transaction/HistoryTransactionModal.js';

import "./Dashboard.css";
 const Stocks = () => {
    
    return (
      <>
        <HomePageHeader />
        <div className="stock-container">
          {stockData.map((data, key) => {
            return (
              <div key={key}>
                     

                  
      <MDBCol>
   
                 <Stock
                  key={key}
                  account={data.account}
                  status={data.status}
                  balance={data.balance}
                  openDate={data.openDate}
                  id={data.id}
                />   
     </MDBCol>

              </div>
            );
          })}
        </div>
      </>
    );
  };
  const HomePageHeader = () => {
    return (
      <header className="header">
        {/* <h2>Your Stock Tracker</h2> */}
      </header>
    );
  };
  const Stock = ({id, account, status, balance, openDate }) => {
    const [transactionModalShow, setTransactionModalShow] = useState(false);
    const [historyTransactionModalShow, setHistoryTransactionModalShow] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
    const radios = [
        { name: 'Inactive', value: '1' },
        { name: 'Active', value: '2' },
        // { name: 'Radio', value: '3' },
      ];
    console.log("MY CONSOLA"+ id);
console.log("MY CONSOLA"+ id+ " > " + (id%2));
  var impar = (id%2);
  console.log("ES IMPART"+ impar);

  if (id ==1)
  impar =1;
    if (!account) return <div />;

    if (impar==0) return (  <>


       
          <MDBContainer>
          <MDBCard className="card-body"   style={{ width: "52rem", marginTop: "1rem" }}>
          <MDBCardTitle>Account: {account}</MDBCardTitle>
            <MDBCardText>
            <h1>Balance: ${balance}</h1>
            </MDBCardText>
            <div className='custom-control custom-switch'>
              
            
                  <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
              </div>
              <br/>
            <div className="flex-row">
            <Button variant="primary" onClick={() => setTransactionModalShow(true)}>New transaction</Button> 
         <NewTransactionModal show={transactionModalShow} onHide={() => setTransactionModalShow(false)} /> 
         <Button variant="success" onClick={() => setHistoryTransactionModalShow(true)}>Show Transactions</Button>
          <HistoryTransactionModal show={historyTransactionModalShow} onHide={() => setHistoryTransactionModalShow(false)} />
            </div>
            </MDBCard>
          </MDBContainer> 
     
        </>
        
        );

    return (
        <>



  <MDBContainer>
  <MDBCard className="card-body" style={{ width: "52rem", marginTop: "1rem" }}>
  <MDBCardTitle>Account: {account}</MDBCardTitle>
    <MDBCardText>
    <h1>Balance: ${balance}</h1>
    </MDBCardText>
    <div className='custom-control custom-switch'>
    <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      </div>
      <br/>
    <div className="flex-row">
    <Button variant="primary" onClick={() => setTransactionModalShow(true)}>New transaction</Button> 
 <NewTransactionModal show={transactionModalShow} onHide={() => setTransactionModalShow(false)} /> 
 <Button variant="success" onClick={() => setHistoryTransactionModalShow(true)}>Show Transactions</Button>
  <HistoryTransactionModal show={historyTransactionModalShow} onHide={() => setHistoryTransactionModalShow(false)} />
    </div>
    </MDBCard>
  </MDBContainer> 

</>


    );
  };
export default Stocks;