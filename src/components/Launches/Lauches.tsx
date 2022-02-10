import React, { FunctionComponent, useState } from 'react'
import useLoadLaunches from './hooks/useLoadLaunches'

import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

import DetailsModal from '../DetailsModal/DetailsModal'
import useDetailsModal from './hooks/useDetailsModal'

const Launches: FunctionComponent = () => {
    const { loading, error, data } = useLoadLaunches()
    const { modalProps, openModal } = useDetailsModal()

    return (
        <>
            <DetailsModal {...modalProps} />
            <div className="ag-theme-alpine" style={{height: 400, width: '100%'}}>
                <AgGridReact
                    onCellClicked={(event) => openModal(event.data.mission_name, event.data.details)}
                    rowData={data}
                    columnDefs={[
                        { 
                            field: 'launch_date_utc',
                            sortable: true,
                            headerName: 'Launch date',
                            valueFormatter: (params) => new Date(params.data.launch_date_utc).toLocaleDateString("en-US")
                        },
                        {
                            field: 'mission_name',
                            sortable: true,
                            filter: 'agTextColumnFilter',
                            headerName: 'Mission name',
                        },
                        {
                            field: 'details',
                            headerName: 'Details',
                            valueFormatter: () => 'View details',
                            cellStyle: {
                              color: '#0066ff',
                            },
                        },
                        ]}>
                </AgGridReact>
            </div>
        </>
    )
}

export default Launches
