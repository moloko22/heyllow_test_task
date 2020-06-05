import React, {useState} from 'react';

export default function InputFile(props){
    const [filesLength, changeFilesLength] = useState(0);
    const handleChanges = function(e){
        changeFilesLength(e.target.files.length);
        return props.handleOnChange(e, e.target.files)
    };
    return(
        <>
        <label htmlFor="upload_files">Add file as attachment</label>
        <input type="file"
               name={'files'}
               multiple
               style={{display: 'none'}}
               onChange={(e) => handleChanges(e)}
               id={'upload_files'}/>
        <p>{filesLength || 0} files attachment</p>
        </>
    )
}
