import React, { useState } from 'react'
import {
    EuiInMemoryTable,
    EuiButtonIcon,
    EuiFlexGroup,
    EuiButton,
    Query,
    EuiFlexItem
} from '@elastic/eui'
import {RIGHT_ALIGNMENT} from '@elastic/eui/lib/services'
import AlertDetails from '../details/alertDetails';
import { formatDate } from '@elastic/eui/lib/services/format';

const AlertTable = ({
        alerts,
        idFilter = null,
        setIdFilter = () => {}
    }) => {
    
    const [page,setPage] = useState(0);
    const [pageSize,setPageSize] = useState(20);
    const [itemIdToExpandedRowMap, setItemIdToExppandedRowMap] = useState({});
    const [query,setQuery] = useState("");

    let items = [];
    let total_items = 0;
    items = alerts.data.map((alert) => {
        const item = {...alert};
        item["agentName"] = item.agent.name;
        item["agentIp"] = item.agent.ip;
        item["agentId"] = item.agent.id;
        item["ruleId"] = item.rule.id;
        item["ruleDescription"] = item.rule.description;
        item["ruleLevel"] = item.rule.level;
        return item
    })
    total_items=alerts.total_items;
    

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
        if (expandedRows[item.uid]){
            delete expandedRows[item.uid];
        } else {
            expandedRows[item.uid] = (<AlertDetails alertData={item} />);
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
            incremental: true,
            schema: {
                id: {
                    type: 'string'
                },
                timestamp: {
                    type: 'date'
                },
                agentName:{
                    type: 'string'
                },
                agentIp:{
                    type: 'string'
                },
                agentId:{
                    type: 'int'
                },
                ruleId:{
                    type: 'int'
                },
                ruleDescription:{
                    type: 'string'
                },
                ruleLevel:{
                    type: 'int'
                },
            },
        }
    }

    //Properties
    const getRowProps = (item) => {
        const { uid } = item;
        return {
            'data-test-subj' : `row-${uid}`,
            onClick: (e) => {
                toggleDetails(item);
            }
        };
    };
    const getCellProps = (item, column) => {
        const {uid} = item;
        const {field} = column;
        return {
            'data-test-subj' : `cell-${uid}-${field}`
        };
    };

    //Final Column Definition
    const columns = [
        {
            field: 'uid',
            name: 'UID'
        },
        {
            field: 'id',
            name: 'ID'
        },
        {
            field: 'timestamp',
            name: 'Date and time',
            render: (date) => formatDate(date)
        },
        {
            field: 'agent',
            name: 'Agent',
            render: ({name,ip,id}) => (
                <div>
                    <div>{`ID: ${id}`}</div>
                    <div>{name}</div>
                    <div>{ip}</div>
                </div>
            )
        },
        {
            field: 'rule',
            name: 'Rule',
            render: ({id,description, level}) => (
                <div>
                    <div>{`ID: ${id}`}</div>
                    <div>{description}</div>
                    <div>{`Level: ${level}`}</div>
                </div>
            )
        },
        {
            align: RIGHT_ALIGNMENT,
            width: '40px',
            isExpander: true,
            render: (item) => (
                <EuiButtonIcon
                onClick={() => toggleDetails(item)}
                aria-label={itemIdToExpandedRowMap[item.uid] ? 'Collapse' : 'Expand'}
                iconType={itemIdToExpandedRowMap[item.uid] ? 'arrowUp' : 'arrowDown'}
                />
            ),
            },
    ]

    return (
        <EuiFlexGroup direction="column">
            <EuiFlexItem>
                <EuiFlexGroup>
                    <EuiFlexItem>
                        <EuiButton onClick={() => {setQuery(Query.parse("ruleLevel>5"))}}>
                            Find biggest alerts
                        </EuiButton>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiButton onClick={()=>{setQuery(Query.parse("agentName:Debian"))}}>
                            Alerts on Debian system
                        </EuiButton>
                    </EuiFlexItem>
                </EuiFlexGroup>
            </EuiFlexItem>
            <EuiFlexItem>
                <EuiInMemoryTable
                    items={items}
                    rowHeader="id"
                    columns={columns}
                    rowProps={getRowProps}
                    cellProps={getCellProps}
                    pagination={pagination}
                    onChange={onTableChange}
                    isExpandable={true}
                    itemId="uid"
                    itemIdToExpandedRowMap={itemIdToExpandedRowMap}
                    search={search}
                />
            </EuiFlexItem>
        </EuiFlexGroup>
    )
}

export default AlertTable