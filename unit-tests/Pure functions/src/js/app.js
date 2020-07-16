 const player = ({health}) => {
  if(health > 50) {
    return 'healthy'
  } else  if( 15 < health && health <= 50 ) {
    return 'wounded'
  } else {
    return 'critical'
  }
}

export default player
