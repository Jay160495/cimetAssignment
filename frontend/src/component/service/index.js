import React, {useEffect, useState} from 'react';
import { getData } from './post';
import CityDataIndex from '../CityData/index'

const PostIndex = () => {
    const [infoData, setInfoData] = useState([]);

    useEffect(() => {
        const getAllData = async() => {
            console.log('helllo')
            try {
                const response = await getData();
                console.log('helllo11', response)
                if (response && response[1] === 200) {
                    setInfoData(response?.[0]?.data.electricity)
                }
            } catch (err) {
                console.log(err);
            }
        }
        getAllData();
    }, [])
    return (
        <React.Fragment>
            <CityDataIndex 
                infoData={infoData} 
            />
        </React.Fragment>
    );
}

export default PostIndex;