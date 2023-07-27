import {Button, Item} from './ListContact.styled'
const ListItem = ({ data, filter, handleDeleteContact }) => {
    return (
        filter !== " " ? data.filter((el, index) =>
            el.name.toLowerCase().includes(filter.toLowerCase())).map(({ id, name, number}) =>
                <Item id={id}>{name}: {number}
                    <Button type="button" onClick={() => { handleDeleteContact(id) }}>Видалити</Button>
                </Item>) :
    data.map((el) => <Item>{el.name}: {el.number} <Button type="button">Видалити</Button></Item>)     
    ) 
}
export default ListItem;