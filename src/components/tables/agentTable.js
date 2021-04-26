import React, { useState } from 'react'
import {
    EuiInMemoryTable,
    EuiButtonIcon
} from '@elastic/eui'
import {RIGHT_ALIGNMENT} from '@elastic/eui/lib/services'
import AgentUsage from '../details/usage/agentUsage';

const AgentTable = ({
        agents,
    }) => {
    
    const [page,setPage] = useState(0);
    const [pageSize,setPageSize] = useState(20);
    const [itemIdToExpandedRowMap, setItemIdToExppandedRowMap] = useState({});
    const [query,setQuery] = useState("");

    const items = [...agents.data]
    const total_items=agents.total_items;
    

    //Pagination Config
    const onTableChange = ({page = {}}) => {
        const {index, size} = page;

        setPage(index);
        setPageSize(size);
    };
    const pagination = {
        pageIndex: page,
        pageSize,
        pageSizeOptions:[10,20,30,100],
        totalItemCount:total_items
    }

    //Expand Config
    const toggleDetails = (item) => {
        const expandedRows = {...itemIdToExpandedRowMap};
        if (expandedRows[item.id]){
            delete expandedRows[item.id];
        } else {
            expandedRows[item.id] = (<AgentUsage agentID={item.id}/>);
        }
        setItemIdToExppandedRowMap(expandedRows);
    }

    //Search Config
    const search = {
        onChange: ({query}) => {
            console.log(query);
            setQuery(query);
        },
        query:query,
        box: {
            incremental: false,
            schema: {
                id: {
                    type: 'int'
                },
                name: {
                    type: 'string'
                },
                ip:{
                    type: 'string'
                },
                total_alerts:{
                    type: 'int'
                },
            },
        }
    }

    //Properties
    const getRowProps = (item) => {
        const { id } = item;
        return {
            'data-test-subj' : `row-${id}`,
            onClick: () => {toggleDetails(item);}
        };
    };
    const getCellProps = (item, column) => {
        const {id} = item;
        const {field} = column;
        return {
            'data-test-subj' : `cell-${id}-${field}`
        };
    };

    //Final Column Definition
    const columns = [
        {
            field: 'id',
            name: 'ID'
        },
        {
            field: 'name',
            name: 'Name',
        },
        {
            field: 'ip',
            name: 'IP',
        },
        {
            field: 'total_alerts',
            name: 'Total Alerts',
        },
        {
            align: RIGHT_ALIGNMENT,
            width: '40px',
            isExpander: true,
            render: (item) => (
                <EuiButtonIcon
                onClick={() => toggleDetails(item)}
                aria-label={itemIdToExpandedRowMap[item.id] ? 'Collapse' : 'Expand'}
                iconType={itemIdToExpandedRowMap[item.id] ? 'arrowUp' : 'arrowDown'}
                />
            ),
            },
    ]

    //Final Render
    return <EuiInMemoryTable
        items={items}
        rowHeader="id"
        columns={columns}
        rowProps={getRowProps}
        cellProps={getCellProps}
        pagination={pagination}
        onChange={onTableChange}
        isExpandable={true}
        itemId="id"
        itemIdToExpandedRowMap={itemIdToExpandedRowMap}
        search={search}
    />
}

export default AgentTable