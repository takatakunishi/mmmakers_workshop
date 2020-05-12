import React from 'react'
import '../../styles/organisms/PostData.css'
import FormWorkData from '../molecules/FormWorkData'
import DropZone from '../molecules/DropZone'


const PostData = () => {
    return (
        <div className="PostData">
            <DropZone />
            <FormWorkData />
        </div>
    )
}

export default PostData;
