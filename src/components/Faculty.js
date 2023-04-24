import React, { useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import { db } from '../firebase'
import { DataGrid } from "@mui/x-data-grid"
import { Link } from 'react-router-dom'
import './Style.css'
import { collection, onSnapshot } from 'firebase/firestore'
import { userColumns } from './Data'

const Faculty = () => {

    const [ data, setData ] = useState([])
    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'faculty'), (snapShot) =>{
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
                            columns={userColumns}
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

export default Faculty