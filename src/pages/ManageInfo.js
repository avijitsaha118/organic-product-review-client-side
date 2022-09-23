// import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useInformation from '../hooks/useInformation';

const ManageInfo = () => {
    const [informations, setInformations ] = useInformation();

    const navigate = useNavigate();

    const navigateAddNew = event => {
        navigate('/information');
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/information/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = informations.filter(information => information._id !== id);
                    setInformations(remaining);
                })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='mt-2 text-center'> Manage Inventories</h2>
            {
                informations.map(information => <div key={information._id}>

                  <>
                    <Table responsive="sm" striped bordered hover>
                        <thead>
                            <tr>
                                <th>Product Name </th>
                                <th>Company Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{information.name}</td>
                                <td>{information.company}</td>
                                <td><button className='btn btn-danger' onClick={() => handleDelete(information._id)}>
                                    {/* <i><FontAwesomeIcon icon={faTrash} /></i> */}
                                     Delete</button></td>

                            </tr>

                        </tbody>
                    </Table>
                    </>

                </div>
                )
            }
            <button className='btn btn-success mt-5' onClick={navigateAddNew}>Add Product</button>

        </div>
    );
};

export default ManageInfo;