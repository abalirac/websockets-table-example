import React from "react";

export interface ColumnProps {
    header: string | JSX.Element,
    field?: string,
    body?: JSX.Element | ((data: any, rowIndex: number) => JSX.Element),
    type?: "text" | "date",
    styles?: string,
    filter?: "DROPDOWN" | "TEXT"
}

export class Column extends React.Component<ColumnProps> {}