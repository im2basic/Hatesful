import React from 'react';
import Sample1 from './../../assets/sample1.jpg'
import Sample2 from './../../assets/sample2.jpg'
import './styles.scss'


const Directory = props => {
    return (
        <div className="directory">
            <div className="wrap">
                <div className="item" style={{backgroundImage: `url(${Sample1})`}} >
                    <a href="#">Shop Me</a>
                </div>
                <div className="item" style={{backgroundImage: `url(${Sample2})`}} >
                    <a href="#">Shop Me Too</a>
                </div>
            </div>
        </div>
    )
}

export default Directory;