import React from "react";

interface Address {
  address: string;
  areaCode: string;
  zipCode: number;
}

interface Order {
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

let testAddress: Address = {
  address: "Blomstervænget 14",
  areaCode: "Rødovre",
  zipCode: 2610
};

let test: Order[] = [
  {
    id: "5",
    status: "driving",
    eta: "tomorrow",
    pickAddress: testAddress,
    delAddress: testAddress,
    load: 10,
    special: "false"
  },
  {
    id: "5",
    status: "driving",
    eta: "tomorrow",
    pickAddress: testAddress,
    delAddress: testAddress,
    load: 10,
    special: "false"
  },
  {
    id: "5",
    status: "driving",
    eta: "tomorrow",
    pickAddress: testAddress,
    delAddress: testAddress,
    load: 10,
    special: "false"
  }
];

const RowList: React.FC<RowListProps> = (props) => {
return <>{props.orders.map(order => 
<tr>
    <td>
        {order.id}
    </td>
    <td>
        {order.status}
    </td>
    <td>
        {order.eta}
    </td>
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
    <td>
        {order.load}
    </td>
    <td>
        {order.special}
    </td>
</tr>
)}</>;
};

export const Table = () => {
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
          <RowList orders={test} />
        </tbody>
      </table>
    </div>
  );
};
