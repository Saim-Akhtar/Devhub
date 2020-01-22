import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;
  let onSubmit=evt=>{
      evt.preventDefault()
      console.log(mess)
        setModal(!modal);
  }
  const [modal, setModal] = useState(false);
  const [mess,setmess]=useState("");
  const toggle = () => setModal(!modal);
  return (
    <div>
      <Button color="info" onClick={toggle} style={{marginTop:10}}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Send Message</ModalHeader>
        <form></form>
        <ModalBody>
          <input className="form-control mr-sm-2" onChange={e=>setmess(e.target.value)} value={mess} type="search" placeholder="Hello" aria-label="Search"/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onSubmit}>Send</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
        <form onSubmit={onSubmit}></form>
      </Modal>
    </div>
  );
}

export default ModalExample;