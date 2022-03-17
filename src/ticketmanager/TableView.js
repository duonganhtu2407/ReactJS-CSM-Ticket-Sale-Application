import React, { useState } from 'react'
import { Table, Switch } from 'antd';


const columns = [
    {
        title: 'STT',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
    },
    {
        title: 'Booking Code',
        dataIndex: 'address',
        key: '1',
        width: 150,
    },
    {
        title: 'Số vé',
        dataIndex: 'address',
        key: '2',
        width: 150,
    },
    {
        title: 'Tên sự kiện',
        dataIndex: 'address',
        key: '3',
        width: 150,
    },
    {
        title: 'Tình trạng sử dụng',
        dataIndex: 'address',
        key: '4',
        width: 150,
    },
    {
        title: 'Ngày sử dụng',
        dataIndex: 'date',
        key: '5',
        width: 150,
    },
    {
        title: 'Ngày xuất vé',
        dataIndex: 'date',
        key: '6',
        width: 150,
    },
    {
        title: 'Cổng Check-In',
        dataIndex: 'address',
        key: '7',
        width: 150,
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
    });
}
const TableView = () => {
    const [fixedTop, setFixedTop] = useState(false);
    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
                scroll={{ x: 1500 }}
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

export default TableView
