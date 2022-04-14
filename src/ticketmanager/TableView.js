import React, { useEffect, useState } from 'react'
import { collection, getDocs, query } from "firebase/firestore";
import { Table, Switch } from 'antd';
import db from './Config';




export const getCollections = () => {
  const data = []

  return new Promise(async (resolve, reject) => {
    try {
      const querySnapshot = await getDocs(collection(db, "Products"));
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id })

        if (data.length === querySnapshot.size) {
          resolve(data)
        }
      })
    } catch (error) {
      reject(error);
    }
  })

}


const TableView = () => {
  const [fixedTop, setFixedTop] = useState(false);
  const [list, setList] = useState([]);

  const columns = [
    {
      title: 'STT',
      width: 100,
      dataIndex: 'STT',
      key: 'name',
      fixed: 'left',

    },
    {
      title: 'Booking Code',
      dataIndex: 'BoongKingCode',
      key: 'BoongKingCode',
      render: BoongkingCode => `${BoongkingCode}`,
      width: 150,
    },
    {
      title: 'Số vé',
      dataIndex: 'SoVe',
      key: 'SoVe',
      render: SoVe => `${SoVe}`,
      width: 150,
    },
    {
      title: 'Tên sự kiện',
      dataIndex: 'TenSuKien',
      key: 'TenSuKien',
      render: TenSuKien => `${TenSuKien}`,
      width: 150,
    },
    {
      title: 'Tình trạng sử dụng',
      dataIndex: 'Status',
      key: 'Status',
      width: 150,
      render: (status) => {
        let color = ''
        let statusName = ''
        let bg = ''
        switch (status) {
          case 0:
            color = '#03AC00'
            statusName = '⬤ Chưa sử dụng'
            bg = '#DEF7E0'
            break
          case 1:
            color = '#919DBA'
            bg = '#EAF1F8'
            statusName = '⬤ Đã sử dụng'
            break

          case 2:
            color = '#FD5959'
            statusName = '⬤ Hết hạn'
            bg = '#F8EBE8'
            break

          default:
            color = '#03AC00'
            statusName = ' ⬤ Chưa sử dụng'
        }
        return (
          <div
            className='ticket-status'
            style={{
              backgroundColor: `${bg}`,
              borderColor: `${color}`,
              color: `${color}`,
            }}
          >
           {statusName}
          </div>
        )
      },
    },
    {
      title: 'Ngày sử dụng',
      dataIndex: 'NgaySuDung',
      key: 'NgaySuDung',
      render: NgaySuDung => <>{NgaySuDung.day}/{NgaySuDung.month}/{NgaySuDung.year}</>,
      width: 150,
    },
    {
      title: 'Ngày xuất vé',
      dataIndex: 'NgayXuatVe',
      key: 'NgayXuatVe',
      render: NgayXuatVe => <>{NgayXuatVe.day}/{NgayXuatVe.month}/{NgayXuatVe.year}</>,
      width: 150,
    },
    {
      title: 'Cổng Check-In',
      dataIndex: 'CongCheckIn',
      key: 'CongCheckIn',
      render: CongCheckIn => `${CongCheckIn}`,
      width: 150,
    },
  ];

  useEffect(() => {
    getCollections().then(res => {
      setList(res)
    }).catch(e => {
      console.log(e)
    })
  }, [])


  return (
    <div>
      <Table className='table-views'
        columns={columns}
        dataSource={list}
        scroll={{ x: 1500 }}

      />
    </div>
  )
}

export default TableView
