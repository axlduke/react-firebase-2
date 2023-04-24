import React, { useState, useEffect} from 'react'
import '../../components/Style.css'
import Sidebar from '../Sidebar'
import { db } from '../../firebase'
import { DataGrid } from "@mui/x-data-grid"
import { collection,  onSnapshot } from 'firebase/firestore'
import { studentColumns } from '../Data'

const ViewNews = () => {

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
                            columns={studentColumns}
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

export default ViewNews