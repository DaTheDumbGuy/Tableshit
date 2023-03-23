import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//props -> the items from the storage
export default function BasicTable({ props }) {
    function createData(ProductID, ProductName, ProductPrice) {
        return { ProductID, ProductName, ProductPrice };
    }
    const rows = props.map((product) => {
        return createData(product.ProductID, product.ProductName, product.ProductPrice);
    });
    return (

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">ProductID</TableCell>
                        <TableCell align="center"> ProductName</TableCell>
                        <TableCell align="center">ProductPrice</TableCell>
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
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

