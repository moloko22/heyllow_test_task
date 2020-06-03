import React from 'react';

import './PageForm.css';
function PageForm (){
    return (
        <div className={'page_form'}>
            <div className={'page_form_header'}>
                <h2>Your first project</h2>
            </div>
            <div className="form_steps">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        </div>
    );
}
export default PageForm;