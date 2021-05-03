import React from "react";
import Modal from '@material-ui/core/Modal'; 
import { positions } from '@material-ui/system';
import {useState} from 'react'

interface PopOutProps {
    children: string | React.ReactElement
    modalOpen: boolean
    onClose: () => void
}
export default function PopOut({ children, modalOpen, onClose }: PopOutProps) {


    return (
        <Modal  
            open={modalOpen}
            onClose = {onClose}
            style={modalStyling}
        >
            <div style={bodyStyling}>{children}</div>               
        
        </Modal>
    );
}
const modalStyling = {
    'border': 'none !important'
}
const bodyStyling: React.CSSProperties = {
    backgroundColor: 'white',
    position: 'absolute',
    top: 'calc(50% - 100px)',
    left: 'calc(50% - 150px)',
    width: 300,
    height: 200,
    fontSize: '40px',
    textAlign: 'center',
    paddingTop: 40,
    marginTop: 40,
    borderRadius: '12px',
    fontFamily: 'Source Sans Pro',
  }
