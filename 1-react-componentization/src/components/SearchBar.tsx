type SearchBarProps = {
    value: string
    onChange: (value: string) => void
    placeHolder?: string
}

const SearchBar = ({value, onChange, placeHolder}: SearchBarProps)  => {
    return (
        <input
        type="text"
        placeholder={placeHolder||"Search..."}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    )
}

export default SearchBar