import React, { Component } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
class PropsChild extends Component {
    render() {
        return (
            <>
                <MDBCard>
                    <MDBCardImage src={this.props.imgSrc} position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>{this.props.title}</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make up the bulk of the card's content. {this.props.kuchbhi}
                        </MDBCardText>
                        <MDBBtn href='#'>Button</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </>
        );
    }
}

export default PropsChild;