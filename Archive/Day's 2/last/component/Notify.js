import React from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => toast("Wow so easy");
const Notify = () => (
    <div> 
        <button onClick={notify}>Notify!</button>
        <ToastContainer
            position="bottom-center"
        />
    </div>
)

export default Notify;