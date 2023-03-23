import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap'
import MyForm from './MyForm'
import BasicTable from './TableOne';

function ProductInformation() {
    const [ProductName, setProductName] = useState("");
    const [ProductPrice, setProductPrice] = useState("");
    const [ProductID, setProductID] = useState("");
    //Using ternaryshit
    const [ProductInfos, setProductInfos] = useState(
        // JSON.parse(localStorage.getItem('Products')) || [] pede din to
        // JSON.parse(localStorage.getItem('Products')) ? JSON.parse(localStorage.getItem('Products')) : [] pede din to
        localStorage.getItem('Products') ? JSON.parse(localStorage.getItem('Products')) : []
    );
    const HandleProductName = (event) => {
        setProductName(event.target.value);
    }
    const HandleProductPrice = (event) => {
        setProductPrice(event.target.value);
    }
    const HandleProductID = (event) => {
        setProductID(event.target.value);
    }
    const HandleSubmitForm = (event) => {
        event.preventDefault();
        if (ProductName !== "" && ProductPrice !== "" && ProductID !== "") {
            const ProductInfo = { ProductID, ProductName, ProductPrice }
            setProductInfos([...ProductInfos, ProductInfo]);
            alert(JSON.stringify([...ProductInfos, ProductInfo]));
        } else {
            alert("error");
        }

    }
    useEffect(() => {
        localStorage.setItem('Products', JSON.stringify(ProductInfos))
    }, [ProductInfos]);

    return (
        <Container className="text-center">

            <h3 className='display-6'> Product Information</h3>
            <MyForm
                ProductName={ProductName}
                HandleProductName={HandleProductName}
                ProductPrice={ProductPrice}
                HandleProductPrice={HandleProductPrice}
                HandleSubmitForm={HandleSubmitForm}
                HandleProductID={HandleProductID}
            />
            <BasicTable props={ProductInfos} />

        </Container>
    )
}

export default ProductInformation

