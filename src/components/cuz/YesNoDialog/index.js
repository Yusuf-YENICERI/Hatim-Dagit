import React from 'react';
import {Button, createStyles} from '@mantine/core';
import {
  Container,
  YesNoButton,
  YesNoButtonContainer,
  YesNoButtonLayout,
  YesNoContainer,
  YesNoLayout,
  YesNoText,
} from './YesNoDialogElements';
import {useYesNoDialogAlert} from '../../../features/yesNoDialogAlert';
import Language from '../../../strings';
import {useDispatch} from 'react-redux';
import {loadingOverlayActions} from 'features/loadingOverlay';

const useStyles = createStyles (theme => ({
  button: {
    color: 'black',
  },
}));

const YesNoDialog = ({
  yesHandler,
  yesHandlerParameters,
  noHandler,
  hatimlerVisibilities,
  toggleHatimlerVisibilities,
}) => {
  const {classes} = useStyles ();
  const {visible, text} = useYesNoDialogAlert ();
  const dispatch = useDispatch ();

  return (
    <Container visible={visible}>
      <YesNoContainer>
        <YesNoLayout>

          <YesNoText>{text}</YesNoText>

          <YesNoButtonContainer>
            <YesNoButtonLayout>

              <Button
                className={classes.button}
                color="yellow"
                onClick={() => {
                  if (yesHandlerParameters != null) {
                    yesHandler (yesHandlerParameters);
                  } else {
                    yesHandler ();
                  }
                }}
              >
                {Language['/cuz'].AddKhatmAlert.YesButton}
              </Button>
              <Button
                color="red"
                className={classes.button}
                onClick={noHandler}
              >
                {Language['/cuz'].AddKhatmAlert.NoButton}
              </Button>

            </YesNoButtonLayout>
          </YesNoButtonContainer>

        </YesNoLayout>
      </YesNoContainer>
    </Container>
  );
};

export default YesNoDialog;
