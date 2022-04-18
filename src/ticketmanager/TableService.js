import React, { useState, useEffect } from 'react'
import { collection, getDocs, query } from "firebase/firestore";
import { Table, Switch } from 'antd';
import db from './Config';
import './Service.css'
import   'boxicons'


export const getCollections = () => {
    const data = []
  
    return new Promise(async (resolve, reject) => {
      try {
        const querySnapshot = await getDocs(collection(db, "Service"));
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


const TableService = (props) => {
  const columns = [
    {
        title: 'STT',
        width: 100,
        dataIndex: 'STT',
        key: 'name',
        fixed: 'left',
    },
    {
        title: 'Mã gói',
        dataIndex: 'MaGoi',
        key: '1',
        width: 200,
    },
    {
        title: 'Tên gói vé',
        dataIndex: 'TenGoiVe',
        key: '2',
        width: 200,
    },
   
    {
        title: 'Ngày áp dụng',
        dataIndex: 'NgayApDung',
        key: '5',
        render: NgayApDung =><>{NgayApDung.day}/{NgayApDung.month}/{NgayApDung.year}</>,
        width: 150,
    },
    {
        title: 'Ngày hết hạn',
        dataIndex: 'NgayHetHan',
        key: '6',
        render: NgayHetHan =><>{NgayHetHan.day}/{NgayHetHan.month}/{NgayHetHan.year}</>,
        width: 150,
    },
    {
        title: 'Giá vé(VNĐ/Vé)',
        dataIndex: 'GiaVe',
        key: '3',
        width: 150,
    },
    {
        title: 'Giá combo(VNĐ/Combo)',
        dataIndex: 'GiaCombo',
        key: '4',
        width: 200,
    },
    {
        title: 'Tình trạng',
        dataIndex: 'Status',
        key: '7',
        width: 200,
        render: (status) => {
            let color = ''
            let statusName = ''
            let bg = ''
            switch (status) {
              case 0:
                color = '#03AC00'
                statusName = ' ⬤ Đang áp dụng'
                bg = '#DEF7E0'
                break
              case 1:
                color = '#FD5959'
                bg = '#F8EBE8'
                statusName = '⬤ Tắt'
                break
              default:
                color = '#03AC00'
                statusName = '⬤ Chưa sử dụng'
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
        title: "",
        dataIndex: "update",
        key: "update",
        render: (status) => (
        <p className="tb__edit" onClick={handelModalCapnhat}>
          <i class='bx bx-edit'></i>
          <span className='span-capnhat' >Cập nhật </span>
        </p>
      ),
    },
    
];
  
const handelModalCapnhat = () => {
  props.openshowCapnhat()
}
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

export default TableService
