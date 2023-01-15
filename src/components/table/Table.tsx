import React, { useEffect, useState } from "react";
import tableStyles from "./Table.module.scss";
import { Column } from "./Column";
import { HeaderColumn } from "./HeaderColumn";
import { BodyRow } from "./BodyRow";

export type TableProps<T> = {
    data: T[],
    title?: string | React.ReactNode;
    children: React.ReactNode;
};

export function Table<T>(props: React.PropsWithChildren<TableProps<T>>): JSX.Element {

    // Set default props
    const {
        data = []
    } = props;

    const [filteredData, setFilteredData] = useState<T[]>(data);

    useEffect(() => {
        if (filteredData.length === 0) {
            setFilteredData(data);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    return (
        <table className={tableStyles["table"]}>
            <thead>
                <tr>
                    {React.Children.toArray(props.children).map((column, columnIndex): JSX.Element =>
                        <HeaderColumn 
                            key={`header-column-${columnIndex}`} 
                            data={data}
                            onFilter={(newFilteredData: any) => setFilteredData(newFilteredData)}
                            {...(column as Column).props}
                        />
                    )}
                </tr>
            </thead>
            <tbody>
                {filteredData && Array.isArray(filteredData) && filteredData.map((row, rowIndex): JSX.Element =>
                    <BodyRow
                        key={`row-${rowIndex}`} 
                        rowIndex={rowIndex}
                        rowData={row}
                        columns={React.Children.toArray(props.children) as Column[]}
                    />
                )}
            </tbody>
        </table>
    )
}