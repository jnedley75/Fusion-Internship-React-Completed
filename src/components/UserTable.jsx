import {useMemo} from "react";
import {useTable} from "react-table";
import {useCookies} from "react-cookie";


export default function UserTable() {
    const [cookies] = useCookies(["allUsers"]);
    const data = useMemo(
        () =>
            cookies.allUsers,
        [cookies.allUsers]
    )
    const columns = useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'userID', // accessor is the "key" in the data
            },
            {
                Header: 'Email',
                accessor: 'email',
            },
            {
                Header: 'Age',
                accessor: 'age',
            },
            {
                Header: 'Gender',
                accessor: 'gender',
            },
            {
                Header: 'Role',
                accessor: 'role',
            },
            {
                Header: 'Last Login',
                accessor: 'lastLogin',
            }
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({columns, data})

    return (
        <table {...getTableProps()} style={{border: 'solid 1px black'}}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th
                            {...column.getHeaderProps()}
                            style={{
                                borderBottom: 'solid 3px black',
                                background: '#212529',
                                color: 'white',
                                fontWeight: 'bold',
                            }}
                        >
                            {column.render('Header')}
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map(row => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return (
                                <td
                                    {...cell.getCellProps()}
                                    style={{
                                        padding: '10px',
                                        border: 'solid 1px black',
                                        background: '#202224',
                                    }}
                                >
                                    {cell.render('Cell')}
                                </td>
                            )
                        })}
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}