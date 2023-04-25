import React, { useState, useEffect} from 'react'
import './Style.css'
import Sidebar from './Sidebar'
import { db } from '../firebase'
import { DataGrid } from "@mui/x-data-grid"
import { collection,  onSnapshot } from 'firebase/firestore'
import { studentColumns } from './Data'
import { Link } from 'react-router-dom'

const Student = () => {

    const [ data, setData ] = useState([])
    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'student'), (snapShot) =>{
            let list = []
            snapShot.docs.forEach((doc) => {
                list.push({ id: doc.id, ...doc.data() })
            })
            setData(list)
        }, 
            (error) => {
                console.log(error)
            }
        )
        return () => {
            unsub()
        }
    },[])

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 100,
            renderCell: (params) => {
                return (
                <div className="cellAction">
                    <Link to={`/view/view_information`} style={{ textDecoration: "none" }}>
                    {/* <Link to={`/view/view_information/${params.id}`} style={{ textDecoration: "none" }}> */}
                        <div className="viewButton">View</div>
                    </Link>
                </div>
                );
            },
        },
    ];
    return (
        <div className='bg-gray-100 w-screen h-screen'>
            <Sidebar />
            <div className='mx-5'>
                <div className='table'>
                    <div className="datatable">
                        <div className="datatableTitle">
                            <h1 className='text-2xl mb-5'>Student Lists</h1>
                        </div>
                        <DataGrid
                            className="datagrid shadow-md"
                            rows={data}
                            columns={studentColumns.concat(actionColumn)}
                            pageSize={9}
                            rowsPerPageOptions={[9]}
                            checkboxSelection
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Student