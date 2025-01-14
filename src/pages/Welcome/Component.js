import React from 'react';

import { Container, Typography, useMediaQuery} from '@mui/material';

import { FaReact as ReactIcon } from 'react-icons/fa';

import Fb from 'components/Fb';
import Meta from 'components/Meta';

import useStyles from './styles';

function Welcome() {
  const matchSmallScreen = useMediaQuery('(max-width: 600px)');
  const classes = useStyles().classes;

  return (
    <>
      <Meta
        title="Welcome"
        description="Welcome to Utility Marker Scanner"
      />
      <Container maxWidth="sm" className="full-height">
        <Fb justifyCenter alignCenter className={classes.wrapper}>
          <Fb className={classes.iconBox}><ReactIcon className={classes.icon} /></Fb>
          <Typography
            variant={matchSmallScreen ? 'h4' : 'h3'}
            className={classes.title}
          >
            Welcome
          </Typography>
        </Fb>
      </Container>
    </>
  );
}

export default Welcome;
