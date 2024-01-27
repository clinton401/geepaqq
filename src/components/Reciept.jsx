
import React, { useContext } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../index.css";
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';

import { myContext } from '../App';
function Reciept({ name, productName, date, img, price, paid, resetReceipt }) {
    const {lightMode} = useContext(myContext)
  const btnName = paid === "true" ? "paid" : "refund";
  return (
    <div >
      <div className="receipt_cont" onClick={resetReceipt}></div>
      <div className={`receipt ${!lightMode ? 'dkmode ' : ''}`} id="receipt">
        <span>
          <h2>Receipt</h2>
          <button onClick={resetReceipt}>
            {" "}
            <FontAwesomeIcon icon={faXmark} className="close_icon" />
          </button>
        </span>
        <div>
          <img src={img} alt={`${productName} image`} />
        </div>
        <ul>
          <li>
            Purchased By: <strong>{name}</strong>
          </li>
          <li>
            Product Name: <strong>{productName}</strong>
          </li>
          <li>
            Date Purchased: <strong>{date}</strong>
          </li>
          <li>
            Price: <strong>{price}</strong>
          </li>
        </ul>
        <button tabIndex="-1" className={btnName}>
          <FontAwesomeIcon
            icon={paid === "true" ? faCheck : faXmark}
            className="btn_icon"
          />
          {paid === "true" ? "Paid" : "Refunded"}
        </button>
      </div>
    </div>
  );
}

export default Reciept
