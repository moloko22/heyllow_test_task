import React, {useState} from 'react';

export default function InputFile(){
    const [filesLength, changeFilesLength] = useState(0);
    return(
        <>
        <label htmlFor="upload_files">Add file as attachment</label>
        <input type="file" multiple
        style={{display: 'none'}}
        onChange={(e) => changeFilesLength(e.target.files.length)}
        id={'upload_files'}/>
            <p>{filesLength || 0} files attachment</p>
        </>
    )
}
