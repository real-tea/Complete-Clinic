import React from 'react'
import { Typography , Box , Grid } from '@material-ui/core'
import { yellow , grey } from '@material-ui/core/colors/index';


const GridInfo = () => {
  return (
      <Grid item sm={6} style={{height : "100%"}}>
          <Grid container justify="space-between" style={{height : "100%"}}>
              <Grid item>
                  <Grid container>
                      <Typography variant="h3">
                          <Box fontweight="fontWeightBold" color={grey[100]}>
                            Hellouu
                          </Box>
                      </Typography>

                      <Typography variant="h3" color ="">
                          <Box fontweight="fontWeightLight" marginLeft = "10px">
                              There
                          </Box>

                      </Typography>
                  </Grid>

                  <br/>
                  <br/>
                  <Grid container>
                      <Typography color = "textSecondary">
                          <Box fontWeight="fontWeightRegular">
                              Welcome
                          </Box>
                      </Typography>
                      <Typography>
                          <Box fontWeight="fontWeightBold" color = {yellow["A200"]} marginLeft="5px">
                            hospibuzz
                          </Box>
                      </Typography>

                      

                  </Grid>
              </Grid>
              <Grid container alignItems ="flex-end">
                  <Typography variant="h5" color="textPrimary">
                      Sign In !
                  </Typography>
                  <Grid container>
                      <Typography>
                          <Box fontWeight="fontWeightBold" color ={yellow["A200"]} marginRight="5px">
                              or NOT
                          </Box>                          
                      </Typography>

                      <Typography >
                          <Box fontWeight ="fontWeightRegular" color ={grey[600]}>
                            If you don't want to , we got you covered for getting started!
                          </Box>

                      </Typography>

                  </Grid>

              </Grid>

          </Grid>

      </Grid>
  )
}

export default GridInfo;