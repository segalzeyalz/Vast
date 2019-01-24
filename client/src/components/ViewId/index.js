import React from 'react';
import CSS from './ViewId.css';
import Card from '@material-ui/core/Card';

//Static function for header - For not rendering it not unnecessary
const ViewId = (props) => {
  return <Card>
            <h1 className={CSS.title}>
              Costume Layout
            </h1>
          </Card>
};
export default ViewId;