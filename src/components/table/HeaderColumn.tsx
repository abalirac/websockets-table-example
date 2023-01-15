import _ from "lodash";
import React from "react";
import { ColumnProps } from "./Column";
import Multiselect from 'multiselect-react-dropdown';

export interface HeaderColumnProps extends ColumnProps {
  data: any,
  onFilter: Function
}

export function HeaderColumn(props: HeaderColumnProps): JSX.Element {

    // Default props
    const {
        header = '',
        data = [],
        field = "",
        filter = undefined,
        onFilter = () => {}
    } = props;

    const onSelect = (selectedList: any) => {
        filterDataWithDropdown(selectedList);
    }

    const onRemove = (selectedList: any) => {
        filterDataWithDropdown(selectedList);
    }

    //TODO: Make filters work together or reset other filters
    const filterDataWithDropdown = (selectedList: any) => {
        const filteredData = data.filter((row: any) => {
            const fieldValue = _.get(row, field);
            return selectedList.some((option: any) => option.name === fieldValue)
        });

        onFilter(filteredData.length > 0 ? filteredData : data);
    }

    const filterDataWithText = (value: string) => {
        const filteredData =  data.filter((row: any) => {     
            const fieldValue = _.get(row, field);
            return fieldValue.toUpperCase().includes(value.toUpperCase()) || value === '';
        });

        onFilter(filteredData);
    }

    const getColumnFilter = () => {
        if (filter === "DROPDOWN") {
            return getDropdownFilter();
        }

        if (filter === "TEXT") {
            return getTextFilter();
        }
    }

    //TODO: Move filters to its own components
    const getDropdownFilter = () => {
        const columnValues = data.map((row: any) => _.get(row, field));
        const options = _.uniq(columnValues).map((option, index) => {return {'id': index, 'name' : option}});

        return (
            <Multiselect
                options={options} // Options to display in the dropdown
                selectedValues={[]}
                displayValue="name"
                onSelect={onSelect} // Function will trigger on select event
                onRemove={onRemove} // Function will trigger on remove event
                placeholder="Filter column"
            />
        );
    }

    const getTextFilter = () => {
        return (
            <input 
                id="textFilter"
                name="textFilter"
                type="text"
                onChange={event => filterDataWithText(event.target.value)}
                placeholder={`Filter column`}
            />
        )
    }

    return (
        <th>
            {header}
            {getColumnFilter()}
        </th>
    )
}
