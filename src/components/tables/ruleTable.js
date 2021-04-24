import React, { useState } from 'react'
import {
    EuiInMemoryTable,
    EuiButtonIcon
} from '@elastic/eui'
import {RIGHT_ALIGNMENT} from '@elastic/eui/lib/services'
import RuleUsage from '../details/usage/ruleUsage';

const RuleTable = ({
        rules,
        loading,
        error
    }) => {
    
    const [page,setPage] = useState(0);
    const [pageSize,setPageSize] = useState(20);
    const [itemIdToExpandedRowMap, setItemIdToExppandedRowMap] = useState({});
    const [query,setQuery] = useState("");

    let render = <p>Nothing Here</p>
    if(error) {
        render = <p>ERROR: {error}</p>
    } else {
        let items = [];
        let total_items = 0;
        if(!loading){
            items = [...rules.data]
            total_items=rules.total_items;
        }
        

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
                expandedRows[item.id] = (<RuleUsage ruleID={item.id}/>);
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
                    firedtimes: {
                        type: 'int'
                    },
                    mail: {
                        type: 'bool'
                    },
                    id:{
                        type: 'int'
                    },
                    level:{
                        type: 'int'
                    },
                    description:{
                        type: 'string'
                    }
                },
            }
        }

        //Properties
        const getRowProps = (item) => {
            const { id } = item;
            return {
                'data-test-subj' : `row-${id}`,
                onClick: () => {}
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
                field: 'firedtimes',
                name: 'Fired Times',
            },
            {
                field: 'level',
                name: 'Level',
            },
            {
                field: 'description',
                name: 'Description',
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
        render = <EuiInMemoryTable
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
            loading={loading}
        />
    }

    return render
}

export default RuleTable