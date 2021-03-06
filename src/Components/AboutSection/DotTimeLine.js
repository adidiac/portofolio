import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Timeline.css'
export default function DotTimeline({Icon,Date,Text,Handle,DotColor,Variant})
{
    return (<>
     <TimelineItem>
        <TimelineOppositeContent>
          <Typography style={{color:'white'}}>
            {Date}
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot  color={DotColor} variant={Variant}>
            {Icon}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper class="grow" onClick={Handle}>
            <Typography>
            {Text}
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    
    </>);
}