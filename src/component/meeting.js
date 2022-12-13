import './meeting.css';
import Meetinfo from './meeting-info';
import Meetform from './meet-form'
const Meeting = ()=>{
return(
    <div className="wrapper">
        <Meetinfo></Meetinfo>
        <Meetform></Meetform>
    </div>
)
}
export default Meeting;