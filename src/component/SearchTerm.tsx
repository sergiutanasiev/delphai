type Props = {
    searchTerm: string,
    onSearchTermChange: (searchTerm:string) => void
}

export const SearchTerm:React.FC<Props> = (props: Props) => {
    return(
        <input autoFocus value={props.searchTerm}
        className="search-bar"
        placeholder="Search by a company name"
        onChange={event => props.onSearchTermChange(event.target.value)}
        type="text"/>
    )
}