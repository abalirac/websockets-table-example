import _ from "lodash";
import React from "react";
import { DateUtils } from "../../utils/DateUtils";
import { BodyCell } from "./BodyCell";
import { Column, ColumnProps } from "./Column";

export type RowProps<T> = {
    rowIndex: number,
    rowData: T,
    columns: Column[]
}

export function BodyRow<T>(props: RowProps<T>): JSX.Element {

    // Default props
    const {
        rowData = null,
        columns = [],
        rowIndex = 0
    } = props;

    /**
     * Retrieve data for cell for a given column
     * @param column
     */
    const getCellData = (column: Column): T => {
        const columnProps = column.props as ColumnProps;
        let rowValue = _.get(rowData, column?.props?.field as string);

        return columnProps.type && columnProps.type === "date" 
        ? DateUtils.formatDate(rowValue)
        : rowValue;
    }

    const getBodyType = (column: Column) => {
        return typeof column.props.body === 'function'
                    ? column.props.body(rowData, rowIndex)
                    : column.props.body as JSX.Element
    }

    const getBodyCellComponent = (column: Column, columnIndex: number): JSX.Element => {
        const value = column.props.field ? getCellData(column) : getBodyType(column);

        return <BodyCell 
                    key={`column-cell${rowIndex}-${columnIndex}`} 
                    value={value} 
                    styles={column.props.styles}
                />  
    }

    return (
        <tr>
            {columns.map((column, columnId): JSX.Element => {
                return getBodyCellComponent(column, columnId)
            })}
        </tr>
    )
}