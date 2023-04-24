import React, { useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import { db } from '../firebase'
import { DataGrid } from "@mui/x-data-grid"
import { Link } from 'react-router-dom'
import './Style.css'
import { collection, onSnapshot } from 'firebase/firestore'
import { annoucementColumns } from './Data'

const News = () => {

    const [ data, setData ] = useState([])
    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'annoucement'), (snapShot) =>{
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
            width: 200,
            renderCell: (params) => {
                return (
                <div className="cellAction">
                    <Link to="/view/view_information" style={{ textDecoration: "none" }}>
                        <div className="viewButton">View</div>
                    </Link>
                </div>
                );
            },
        },
    ];
    return (
        <div>
            <Sidebar />
            <div className='mx-5'>
                <div className='table'>
                    <div className="datatable">
                        <div className="datatableTitle">
                            <h1 className='text-2xl mb-5'>Faculty Lists</h1>
                        </div>
                        <DataGrid
                            className="datagrid shadow-md"
                            rows={data}
                            columns={annoucementColumns.concat(actionColumn)}
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

export default News