export const userColumns = [
    // { field: "id", headerName: "ID", width: 100 },
        {
        field: "name",
        headerName: "Full Name",
        width: 200,
        renderCell: (params) => {
            return (
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="" />
                {params.row.name}
            </div>
            );
        },
        },
        {
        field: "address",
        headerName: "address",
        width: 200,
        },
        {
        field: "monday",
        headerName: "Monday",
        width: 200,
        },
        {
        field: "tuesday",
        headerName: "Tuesday",
        width: 200,
        },
        {
        field: "wednesday",
        headerName: "Wednesday",
        width: 200,
        },
        {
        field: "thursday",
        headerName: "Thursday",
        width: 200,
        },
        {
        field: "friday",
        headerName: "Friday",
        width: 200,
        },
    //     {
    //     field: "status",
    //     headerName: "Status",
    //     width: 200,
    //     renderCell: (params) => {
    //         return (
    //         <div className={`cellWithStatus ${params.row.status}`}>
    //             {params.row.status}
    //         </div>
    //         );
    //     },
    // },
];

export const studentColumns = [
    // { field: "id", headerName: "ID", width: 100 },
        {
        field: "name",
        headerName: "Full Name",
        width: 230,
        renderCell: (params) => {
            return (
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="" />
                {params.row.name}
            </div>
            );
        },
        },
        {
        field: "lrn",
        headerName: "LRN",
        width: 200,
        },
        {
        field: "gradeSection",
        headerName: "Grade & Section",
        width: 200,
        },
        {
        field: "address",
        headerName: "Address",
        width: 200,
        },
        {
        field: "room",
        headerName: "Room",
        width: 200,
        },
];

export const annoucementColumns = [
    { field: "id", headerName: "ID", width: 100 },
        {
        field: "title",
        headerName: "Title",
        width: 230
        },
        {
        field: "type",
        headerName: "TYPE",
        width: 200,
        },
        {
        field: "date",
        headerName: "Date",
        width: 200,
        },
        {
        field: "description",
        headerName: "Description",
        width: 200,
        }
];