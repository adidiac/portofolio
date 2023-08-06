const cardStyle = {
    width: 50,
    height: 29,
    backgroundColor: 'white',
    color:'black',
    borderRadius: 5,
    fontSize: 2 ,
    padding: 2,
    textAlign: 'center',
    opacity: 1,
    backgroundColor: 'rgba(255, 255, 255, 1.4)',
    boxShadow: '2px 2px 4px rgba(255, 255,255, 0.7)',
    border: '1px solid rgba(0, 0, 0, 0.7)',
}

const rowStyle = {
    margin:0.5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
}

const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
}

const textWorkStyle = {
    fontSize:2,color:'white',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
}

export { cardStyle, rowStyle, columnStyle,textWorkStyle };