import React, { Fragment, useState } from 'react';

import Toolbar from '../../component/Navigation/Toolbar/Toolbar';
import Modal from '../../component/UI/Modal/Modal';
import NewIdeaForm from '../../container/NewIdeaForm/NewIdeaForm';

const Layout:React.FC = props => {

    const [showForm, setShowForm] = useState(false)

    const toggleShowForm = () => {
        setShowForm(prevValue => !prevValue)
    }

    return (
        <Fragment>
            <Toolbar onClick={toggleShowForm} />
            <Modal show={showForm} modalClosed={toggleShowForm}>
                <NewIdeaForm toggleFormShow={toggleShowForm} />
            </Modal>
            {props.children}
        </Fragment>
    )

}

export default Layout;