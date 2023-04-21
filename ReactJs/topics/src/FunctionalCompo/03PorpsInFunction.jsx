import React from 'react';
import CardCompo from './04CardCompo.jsx';

const PorpsInFunction = () => {

    return (
        <>
            <div className="row">
                <div className="col-3">
                    <CardCompo cardTitle="Card 1"/>
                </div>
                <div className="col-3">
                    <CardCompo cardTitle="Card 2"/>
                </div>
                <div className="col-3">
                    <CardCompo cardTitle="Card 3"/>
                </div>
                <div className="col-3">
                    <CardCompo cardTitle="Card 4"/>
                </div>
                <div className="col-3">
                    <CardCompo cardTitle="Card 5"/>
                </div>
            </div>
        </>
    );
};

export default PorpsInFunction;