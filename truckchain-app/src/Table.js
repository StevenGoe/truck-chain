import React from 'react';
import { parentPort } from 'worker_threads';

export interface Address {
  address: string;
  areaCode: string;
  zipCode: number;
}

export interface Order {
  id: string;
  status: string;
  eta: string;
  pickAddress: Address;
  delAddress: Address;
  load: number;
  special: string;
}

interface RowListProps {
  orders: Array<Order>;
}

const RowList: React.FC<RowListProps> = props => {
  return (
    <>
      {props.orders.map(order => (
        <tr>
          <td>{order.id}</td>
          <td>{order.status}</td>
          <td>{order.eta}</td>
          <td>
            {order.pickAddress.address}
            {order.pickAddress.areaCode}
            {order.pickAddress.zipCode}
          </td>
          <td>
            {order.delAddress.address}
            {order.delAddress.areaCode}
            {order.delAddress.zipCode}
          </td>
          <td>{order.load}</td>
          <td>{order.special}</td>
        </tr>
      ))}
    </>
  );
};

export const Table: React.FC<RowListProps> = props => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Identifikation</th>
            <th>Fragtstatus</th>
            <th>Forventet ankomst</th>
            <th>Afhentningsadresse</th>
            <th>Leveringsadresse</th>
            <th>Lastspecifikationer</th>
            <th>Mulige handlinger</th>
          </tr>
        </thead>
        <tbody>
          <RowList orders={props.orders} />
        </tbody>
      </table>
    </div>
  );
};
