import { CButton } from "@coreui/react";
function Exit(props) {
    return (
        <div>
            <CButton color="dark" shape="rounded-pill" className="me-md-2" onClick={() => props.notSaveProtection()}>Выйти из аккаунта</CButton>
        </div>
    );
}

export default Exit