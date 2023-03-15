import EmployersListItem from "../employers-list-item/employers-list-item"
import './employers-list.css'

const EployersList = ({data}) => {

    const elements = data.map(item => {
    const {id, ...itemProps} = item;
        return (
            //<EmployersListItem name={item.name} salary={item.salary}/>
            <EmployersListItem key={id}  {...itemProps}/>
            
        )
    })


    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}


export default EployersList