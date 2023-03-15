import { CButton } from "@coreui/react";
function Exit(props) {
    return (
        <div className="leftter">
            <CButton color="dark" class="btn btn-outline-info rounded-0" onClick={() => props.notSaveProtection()}>Выйти из аккаунта</CButton>
        </div>
    );
}

export default Exit