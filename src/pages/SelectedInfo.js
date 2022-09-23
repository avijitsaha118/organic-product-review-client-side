import React from 'react';
import useInformation from '../hooks/useInformation';
import './SelectedInfo.css';
import ShowInfo from './ShowInfo';

const SelectedInfo = () => {

    const [informations] = useInformation();

    return (
        <>
            <h3 className='text-center mt-4'>Pet Introduce</h3>
            <div className='mt-4 info-container'>
                {
                    informations.map(information => <ShowInfo
                        key={information._id}
                        information={information}
                    >

                    </ShowInfo>)
                }
            </div>
        </>
    );
};

export default SelectedInfo;