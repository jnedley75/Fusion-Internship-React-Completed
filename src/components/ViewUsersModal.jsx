import {useState} from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import '../styles/components/ViewUsersModal.css'
import UserTable from "./UserTable";

export default function ViewUsersModal(args) {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <>
            <Button id="viewUsersButton" color="success" onClick={toggle}>
                View Users
            </Button>
            <Modal isOpen={modal} toggle={toggle} {...args}>
                <ModalHeader className="modalHeader" toggle={toggle}>View All Users</ModalHeader>
                <ModalBody className="modalBody">
                    <UserTable />
                </ModalBody>
                <ModalFooter className="modalFooter">
                    <Button color="success" onClick={toggle}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );


}