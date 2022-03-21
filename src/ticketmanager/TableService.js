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
        title: 'Mã gói',
        dataIndex: 'address',
        key: '1',
        width: 150,
    },
    {
        title: 'Tên gói vé',
        dataIndex: 'goive',
        key: '2',
        width: 150,
    },
   
    {
        title: 'Ngày áp dụng',
        dataIndex: 'date',
        key: '5',
        width: 150,
    },
    {
        title: 'Ngày hết hạn',
        dataIndex: 'date',
        key: '6',
        width: 150,
    },
    {
        title: 'Giá vé(VNĐ/Vé)',
        dataIndex: 'giatien',
        key: '3',
        width: 150,
    },
    {
        title: 'Giá combo(VNĐ/Combo)',
        dataIndex: 'giacombo',
        key: '4',
        width: 150,
    },
    {
        title: 'Tình trạng',
        dataIndex: 'address',
        key: '7',
        width: 150,
    },
    {
        dataIndex: 'capnhat',
        key: '8',
        width: 150,
    }
];
const d = new Date()
const date = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
const data = [];
for (let i = 1; i < 50; i++) {
    data.push({
        key: i,
        name: `${i}`,
        date: `${date}`,
        address: `ATLT2001 ${i}`,
        goive:`Gói gia dình`,
        giatien: `50.000 VNĐ`,
        giacombo:`360.000 VNĐ`,
        capnhat:`Cập nhật`,
    });
}
const TableService = () => {
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

export default TableService
