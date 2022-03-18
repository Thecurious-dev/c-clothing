import React from 'react';
import { Container } from './directory.styles';
import MenuItem from '../menu-item/MenuItem';
import { createStructuredSelector } from 'reselect';
import { selectSections } from '../../Redux/directory/directory.selectors';
import { connect } from 'react-redux';

const Directory = ({sections}) => {
    return (
        <Container>
            {sections.map(section =>
                <MenuItem key={section.id} item={section}/>)}
        </Container>
    );
    
}

const mapStateToProps = createStructuredSelector({
  sections: selectSections
})
 
export default connect(mapStateToProps) (Directory);


