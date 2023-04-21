import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap'
import MyForm from './MyForm'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from 'reactstrap';

function ProductInformation() {
    const [ProductName, setProductName] = useState("");
    const [ProductPrice, setProductPrice] = useState("");
    const [ProductID, setProductID] = useState("");
    const [ProductInfos, setProductInfos] = useState(
        localStorage.getItem('Products') ? JSON.parse(localStorage.getItem('Products')) : []
    );
    // const [rows, setRows] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const HandleProductName = (event) => {
        setProductName(event.target.value);
    }
    const HandleProductPrice = (event) => {
        setProductPrice(event.target.value);
    }
    const HandleProductID = (event) => {
        setProductID(event.target.value);
    }
    // const HandleSubmitForm = (event) => {
    //     event.preventDefault();
    //     if (ProductName !== "" && ProductPrice !== "" && ProductID !== "") {
    //         const ProductInfo = { ProductID, ProductName, ProductPrice }
    //         setProductInfos([...ProductInfos, ProductInfo]);
    //         alert(JSON.stringify([...ProductInfos, ProductInfo]));
    //     } else {
    //         alert("error");
    //     }

    // }
    const HandleSubmitForm = (event) => {
        event.preventDefault();
        if (ProductName !== "" && ProductPrice !== "" && ProductID !== "") {
            const ProductInfo = { ProductID, ProductName, ProductPrice };
            if (selectedProduct) {
                const updatedProduct = { ...selectedProduct, ...ProductInfo };
                const updatedProductList = ProductInfos.map((product) =>
                    product.ProductID === selectedProduct.ProductID ? updatedProduct : product
                );
                setProductInfos(updatedProductList);
                setSelectedProduct(null);
            } else {
                setProductInfos([...ProductInfos, ProductInfo]);
            }
        } else {
            alert("error");
        }
    };
    useEffect(() => {
        if (selectedProduct) {
            setProductID(selectedProduct.ProductID);
            setProductName(selectedProduct.ProductName);
            setProductPrice(selectedProduct.ProductPrice);
        }
    }, [selectedProduct]);


    useEffect(() => {
        localStorage.setItem('Products', JSON.stringify(ProductInfos));

    }, [ProductInfos]);

    const deleteItem = (id) => {
        const updatedRows = ProductInfos.filter((product) => product.ProductID !== id);
        setProductInfos(updatedRows);
    };
    const updateItem = (product) => {
        setSelectedProduct(product);
    };

    return (
        <Container className="text-center">

            <h3 className='display-6'> Product Information</h3>
            <MyForm
                ProductName={ProductName}
                ProductID={ProductID}
                HandleProductName={HandleProductName}
                ProductPrice={ProductPrice}
                HandleProductPrice={HandleProductPrice}
                HandleSubmitForm={HandleSubmitForm}
                HandleProductID={HandleProductID}
                updateItem={updateItem}
            />

            {/* <MyForm
                ProductName={ProductName}
                HandleProductName={HandleProductName}
                ProductPrice={ProductPrice}
                HandleProductPrice={HandleProductPrice}
                HandleSubmitForm={HandleSubmitForm}
                HandleProductID={HandleProductID}
            /> */}
            {/* <BasicTable props={ProductInfos} /> */}
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
                        {ProductInfos.map((product) => (//iterate ulit para idisplay lahat
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">
                                    {product.ProductID}
                                </TableCell>
                                <TableCell align="center">{product.ProductName}</TableCell>
                                <TableCell align="center">{product.ProductPrice}</TableCell>
                                <TableCell align="center">
                                    <Button align="center" onClick={() => deleteItem(product.ProductID)}>Delete</Button>
                                    <Button
                                        align="center"
                                        onClick={() => updateItem(product)}
                                    >
                                        Update
                                    </Button></TableCell>
                                {/* <TableCell align="center">  <Button align="center" onClick={() => updateItem(product.ProductID, product.ProductName, product.ProductPrice)}>Update</Button></TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </Container>
    )
}

export default ProductInformation

