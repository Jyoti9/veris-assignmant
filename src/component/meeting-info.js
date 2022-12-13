import { ClockCircleOutlined, CalendarOutlined, GlobalOutlined } from '@ant-design/icons';
const Meetinfo = () =>{
    return (
        <div className='other-info'>
            <p>Jyoti Saini</p>
            <h3>30 Mintute Meeting</h3>
            <p className='bold_p'> <ClockCircleOutlined />30 min</p>
            <p className='bold_p'> <CalendarOutlined />1:00pm - 1:30pm, Friday, December 16, 2022 </p>
            <p className='bold_p'> <GlobalOutlined />India Standard Time</p>
        </div>
    )
}

export default  Meetinfo;