import './Domain.css'
import DomainCard from './DomainCard'

function Domain(){

    return (
        <div className="domain-container">
            <DomainCard image="health" title="Health Sector"/>
            <DomainCard image="agriculture" title="Agricultural Sector"/>
            <DomainCard image="smartcity" title="Smart City"/>
            <DomainCard image="wastemgmt" title="Waste Management"/>
            <DomainCard image="elderly" title="Elderly and Disabled"/>
            <DomainCard image="opendomain" title="Open Domain"/>
        </div>
    )
}

export default Domain