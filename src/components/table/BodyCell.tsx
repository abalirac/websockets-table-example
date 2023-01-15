import React from "react";
import tableStyles from "./Table.module.scss";

export type CellProps<T> = {
    value: T,
    styles: string | undefined
}

export function BodyCell<T>(props: CellProps<T>): JSX.Element {

    // Default props
    const {
        value = '',
        styles = ''
    } = props;

    return (
        <td className={tableStyles[`${styles}`]}>{value}</td>
    )
}