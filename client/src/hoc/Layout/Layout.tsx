import React, { Fragment } from 'react';

import Toolbar from '../../component/Navigation/Toolbar/Toolbar';

const Layout:React.FC = props => {

    return (
        <Fragment>
            <Toolbar onClick={() => {}} />
            {props.children}
        </Fragment>
    )

}

export default Layout;