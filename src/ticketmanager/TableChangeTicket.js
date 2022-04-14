import React, { useState, useEffect } from 'react'
import { Table, Switch } from 'antd';
import { collection, getDocs, query } from "firebase/firestore";
import db from './Config';



export const getCollections = () => {
    const data = []
  
    return new Promise(async (resolve, reject) => {
      try {
        const querySnapshot = await getDocs(collection(db, "Change"));
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
const columns = [
    {
        title: 'STT',
        width: 50,
        dataIndex: 'STT',
        key: 'name',
        fixed: 'left',
    },

    {
        title: 'Số vé',
        dataIndex: 'SoVe',
        key: 'SoVe',
        width: 100,
    },
    {
        title: 'Tên sự kiện',
        dataIndex: 'TenSuKien',
        key: 'TenSuKien',
        width: 100,
    },
    {
        title: 'Ngày sử dụng',
        dataIndex: 'NgaySuDung',
        key: 'NgaySuDung',
        render: NgaySuDung => <>{NgaySuDung.day}/{NgaySuDung.month}/{NgaySuDung.year}</>,
        width: 100,
    },
    {
        title: 'Tên loại vé',
        dataIndex: 'TenLoaiVe',
        key: 'TenLoaiVe',
        width: 100,
    },

   
    {
        title: 'Cổng Check-In',
        dataIndex: 'CongCheckIn',
        key: 'CongCheckIn',
        width: 100,
    },
    {
        dataIndex: 'Status',
        key: 'Status',
        width: 100,
        render: (status) => {
          let color = ''
          let statusName = ''
          let font =''
          let weigh=''
          switch (status) {
            case 0:
              color = '#b8b8b8'
              statusName = 'chưa đối soát'
              font = 'italic'
              weigh ='500px'
              break
            case 1:
              color = '#f70c0c'
              statusName = 'đả đối soát'
              font = 'italic'
              weigh ='500px'
              break
  
  
            default:
              color = '#03AC00'
              statusName = 'chưa đối soát'
              font = 'italic'
              weigh ='500px'
          }
          return (
            <div
              className='ticket-change'
              style={{
                color: `${color}`,
                fontStyle:`${font}`                
                
              }}
            >
             {statusName}
            </div>
          )
        },
      },
];

const TableChangeTicket = () => {
    const [fixedTop, setFixedTop] = useState(false);
    const [list, setList] = useState([]);
    useEffect(() => {
        getCollections().then(res => {
          setList(res)
        }).catch(e => {
          console.log(e)
        })
      }, [])
    return (
        <div>
            <Table
                columns={columns}
                dataSource={list}
                
                
            />
        </div>
    )
}

export default TableChangeTicket
