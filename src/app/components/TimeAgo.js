import React from 'react'
import { parseISO, formatDistanceToNow, format } from 'date-fns'

export const TimeAgo = ({ timestamp, className }) => {
    let timeAgo = ''
    let dateFormat = ''
    if (timestamp) {
        const date = parseISO(timestamp);
        const timePeriod = formatDistanceToNow(date)
        dateFormat = format(date, 'MMMM dd/yyyy')
        timeAgo = `${timePeriod} ago`
    }

    return (
        <React.Fragment>
            <span className="gists__element--date">{dateFormat}</span>•
            <span className={className} title={timestamp}>
                &nbsp; {timeAgo}
            </span>
        </React.Fragment>
    )
}
