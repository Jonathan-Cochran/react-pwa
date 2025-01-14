import React from 'react';

import { Typography, Link } from '@mui/material';

import Fb from 'components/Fb';
import { copyright, domain } from 'config';

import useStyles from './styles';

function Copyright() {
  const classes = useStyles().classes;

  return (
    <Fb justifyCenter pt={2} pb={2}>
      <Typography className={classes.copyright} variant="body2" color="textSecondary">
        {copyright.title}
        <Link color="inherit" href={domain}>
          {copyright.link}
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>
    </Fb>
  );
}

export default Copyright;
