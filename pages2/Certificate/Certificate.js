import React, { useState } from 'react';
import CertificateAddModal from '../../components/Certificate/CertificateAddModal/CertificateAddModal';
import CertificateHeader from '../../components/Certificate/CertificateHeader/CertificateHeader';
import CertificateTable from '../../components/Certificate/CertificateTable/CertificateTable';

const Certificate = () => {
    const [openAdd, setOpenAdd] = useState(false)
    console.log(openAdd)
    return (
        <div>
            <CertificateHeader openAdd={openAdd} setOpenAdd={setOpenAdd} />
            <CertificateTable />
            <CertificateAddModal openAdd={openAdd} setOpenAdd={setOpenAdd} />
        </div>
    );
};

export default Certificate;