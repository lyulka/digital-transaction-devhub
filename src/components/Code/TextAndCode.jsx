import React, { useState } from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { FutureButton } from 'dtl-react-components';

const useStyles = makeStyles((t) => ({
  container: {
    width: '100%',
    marginBottom: `${t.spacing(4)}px`,
  },
  splitContainer: {
    display: 'flex',
    width: '100%',
    marginBottom: `${t.spacing(8)}px`,
  },
  textArea: {
    width: '550px',
  },
  codeArea: {
    padding: `0 ${t.spacing(3)}px`,
    [t.breakpoints.up('lg')]: {
      width: 'calc(100% - 550px)',
    },
  },
  tabsContainer: {
    display: 'flex',
    padding: `0 ${t.spacing(1)}px`,
  },
  tabIcon: {
    width: '16px',
    marginRight: '8px',
  },
  tabButton: {
    cursor: 'pointer',
    padding: `${t.spacing(1)}px ${t.spacing(1.5)}px`,
    borderRadius: '8px',
  },
  tabButtonSelected: {
    background: t.palette.neutral.white,
    padding: `${t.spacing(1)}px ${t.spacing(2)}px`,
  },
  codeWindow: {
    width: '100%',
    border: `4px solid ${t.palette.neutral.white}`,
    boxShadow: `0 1px 4px ${t.palette.neutral.darkestGray}`,
    borderRadius: '4px',
  },
}));

export default function TextAndCode({ children, numTabs }) {
  const classes = useStyles();
  const theme = useTheme();
  const largeOrLarger = useMediaQuery(theme.breakpoints.up('lg'));
  const [tab, setTab] = useState(0);

  const codeArea = (
    <div className={classes.codeArea}>
      <div className={`${classes.tabsContainer} push-bot1`}>
        <FutureButton
          onClick={() => setTab(0)}
          className={`${classes.tabButton} ${tab === 0 && classes.tabButtonSelected}`}
        >
          <img
            className={classes.tabIcon}
            src="/images/parallelchain-logo-only.svg"
            alt="ParallelChain"
          />
          <Typography variant="subtitle2">
            ParallelChain™
          </Typography>
        </FutureButton>
        { numTabs === 2 && (
        <FutureButton
          onClick={() => setTab(1)}
          className={`${classes.tabButton} ${tab === 1 && classes.tabButtonSelected} push-left1`}
        >
          <img
            className={classes.tabIcon}
            src="/images/hyperledger-fabric-logo.png"
            alt="Hyperledger Fabric"
          />
          <Typography variant="subtitle2">
            Hyperledger Fabric
          </Typography>
        </FutureButton>
        )}
      </div>
      <div className={classes.codeWindow}>
        { children[1 + tab] }
      </div>
    </div>
  );

  if (largeOrLarger) {
    return (
      <div className={classes.splitContainer}>
        <div className={classes.textArea}>
          { children[0] }
        </div>
        { codeArea }
      </div>
    );
  }

  return (
    <div className={classes.container}>
      { children[0] }
      { codeArea }
    </div>
  );
}

TextAndCode.defaultProps = {
  numTabs: 1,
};
