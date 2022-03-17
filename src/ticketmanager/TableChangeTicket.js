import React, { useState } from 'react'
import { Table, Switch } from 'antd';


const columns = [
    {
        title: 'STT',
        width: 50,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
    },

    {
        title: 'Số vé',
        dataIndex: 'address',
        key: '2',
        width: 100,
    },
    {
        title: 'Ngày sử dụng',
        dataIndex: 'date',
        key: '3',
        width: 100,
    },
    {
        title: 'Tên loại vé',
        dataIndex: 'address',
        key: '4',
        width: 100,
    },

   
    {
        title: 'Cổng Check-In',
        dataIndex: 'cong',
        key: '5',
        width: 100,
    },
];
const d = new Date()
const date = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
const data = [];
for (let i = 1; i < 100; i++) {
    data.push({
        key: i,
        name: `${i}`,
        date: `${date}`,
        address: `ATLT2001 ${i}`,
        cong: `Cổng 1`
    });
}
const TableChangeTicket = () => {
    const [fixedTop, setFixedTop] = useState(false);
    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
                
                summary={pageData => (
                    <Table.Summary fixed={fixedTop ? 'top' : 'bottom'}>
                        <Table.Summary.Row>
                            <Table.Summary.Cell index={0} colSpan={2}>
                            </Table.Summary.Cell>
                            <Table.Summary.Cell index={1} colSpan={8}>
                                <Table.Summary.Cell index={8} ></Table.Summary.Cell>
                            </Table.Summary.Cell>
                        </Table.Summary.Row>
                    </Table.Summary>
                )}
                sticky
            />
        </div>
    )
}

export default TableChangeTicket
