import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from 'reactstrap';
import { useEffect, useState } from 'react';

//props -> the items from the storage
export default function BasicTable({ props }) {
    function createData(ProductID, ProductName, ProductPrice) {
        return { ProductID, ProductName, ProductPrice };
    }
    // const rows = props.map((product) => {
    //     return createData(product.ProductID, product.ProductName, product.ProductPrice);
    // });
    const [rows, setRows] = useState(props.map((product) => {
        return createData(product.ProductID, product.ProductName, product.ProductPrice);
    }));
    const deleteItem = (id) => {
        const updatedRows = rows.filter((row) => row.ProductID !== id);
        setRows(updatedRows);
    };

    useEffect(() => {
        localStorage.setItem('Products', JSON.stringify(rows))
    }, [rows]);
    return (

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">ProductID</TableCell>
                        <TableCell align="center"> ProductName</TableCell>
                        <TableCell align="center">ProductPrice</TableCell>
                        <TableCell align="center">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (//iterate ulit para idisplay lahat
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">
                                {row.ProductID}
                            </TableCell>
                            <TableCell align="center">{row.ProductName}</TableCell>
                            <TableCell align="center">{row.ProductPrice}</TableCell>
                            <TableCell align="center">  <Button align="center" onClick={() => deleteItem(row.ProductID)}>Delete</Button></TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}

