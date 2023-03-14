import { CForm, CFormInput } from "@coreui/react";

const Search = ({setSearchQuery}) => {

    const handleSubmit = (event) => {
        event.preventDefault();
      }

    return (
        <CForm onSubmit={handleSubmit}>
            <CFormInput
                type="text"
                id="search"
                name="search"
                placeholder="Поиск по задачам"
                aria-describedby="exampleFormControlInputHelpInline"
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </CForm>
    )
}

export default Search;