import React from 'react'

function EventDetail(props) {
    const id = props.match.params.id;
    return (
        <div className="container section event-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Event Title - {id}</span>
                    <p>kdsfhdskghfgjfdhgjfdhgfjdghfdjghfdjfdgjfdhgjfdhgjfd</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by the </div>
                    <div>August 9th, 2pm</div>
                </div>

            </div>
            
        </div>
    )
}

export default EventDetail;
