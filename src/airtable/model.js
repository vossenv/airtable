
export function Student(props) {
    const fields = props.record.fields;
    return <div>
        {fields.first_name} {fields.last_name} {fields.email} {fields.ip_address}
    </div>

}