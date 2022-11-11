import React from 'react';
import "./widgetLg.css";

export default function WidgetLg() {
  
  const Button = ({type}) => {
       return <button className={'widgetLgButton '+type}>{type}</button>
  }
  
  return (
    <div className='widgetLg'>
      <h3 className="widggetLgTitle">Latest Transaction</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://media.istockphoto.com/photos/business-can-not-wait-picture-id1221204650?k=20&m=1221204650&s=612x612&w=0&h=o5ACkYbD8pHjx71Xdgl0NPyySmHk3WsyX3FNFMqCsbU=" 
                 alt="" 
                 className="widgetLgImg" />
                 <span className="widgetLgName">Name Surname</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://media.istockphoto.com/photos/business-can-not-wait-picture-id1221204650?k=20&m=1221204650&s=612x612&w=0&h=o5ACkYbD8pHjx71Xdgl0NPyySmHk3WsyX3FNFMqCsbU=" 
                 alt="" 
                 className="widgetLgImg" />
                 <span className="widgetLgName">Name Surname</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Declined"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://media.istockphoto.com/photos/business-can-not-wait-picture-id1221204650?k=20&m=1221204650&s=612x612&w=0&h=o5ACkYbD8pHjx71Xdgl0NPyySmHk3WsyX3FNFMqCsbU=" 
                 alt="" 
                 className="widgetLgImg" />
                 <span className="widgetLgName">Name Surname</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Pending"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://media.istockphoto.com/photos/business-can-not-wait-picture-id1221204650?k=20&m=1221204650&s=612x612&w=0&h=o5ACkYbD8pHjx71Xdgl0NPyySmHk3WsyX3FNFMqCsbU=" 
                 alt="" 
                 className="widgetLgImg" />
                 <span className="widgetLgName">Name Surname</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>
      </table>
    </div>
  )
}
