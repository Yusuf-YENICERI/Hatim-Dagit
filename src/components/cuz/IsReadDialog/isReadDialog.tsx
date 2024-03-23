import React from 'react';
import {Button, createStyles} from '@mantine/core';
import {
  YesNoButtonContainer,
  YesNoButtonLayout,
  YesNoContainer,
  YesNoLayout,
  YesNoText,
  Container
} from './styles';
import Language from '../../../strings';
import { isReadDialogAlertActions, isReadDialogAlertFunctions, useIsReadDialogAlert } from 'features/isReadDialogAlert';
import { useDispatch } from 'react-redux';
import { cuzlerFunctionTriggerActions } from 'features/cuzlerFunctionTrigger';
import { AppDispatch } from 'redux/store';

const useStyles = createStyles (theme => ({
  button: {
    color: 'black',
  },
}));

const isReadDialog = ({hatimlerVisibilities, toggleHatimlerVisibilities}:{hatimlerVisibilities: any, toggleHatimlerVisibilities: any}) => {
  const {classes} = useStyles ();
  const {visible, subKey, partNo, isRead} = useIsReadDialogAlert ();
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Container visible={visible}>
      <YesNoContainer>
        <YesNoLayout>

          <YesNoText>{'Cüzü okudunuz mu?'}</YesNoText>

          <YesNoButtonContainer>
            <YesNoButtonLayout>

              <Button
                className={classes.button}
                style={{backgroundColor: 'yellow'}}
                onClick={() => {
                  dispatch(isReadDialogAlertFunctions.partRead({subKey, partNo}))
                  dispatch(cuzlerFunctionTriggerActions.toggleVisibility())
                  alert ('Allah kabul etsin.');
                }}
              >
                {'Evet'}
              </Button>
              <Button
                style={{backgroundColor: 'orange'}}
                className={classes.button}
                onClick={() => {
                  if(isRead){
                    dispatch(isReadDialogAlertFunctions.partNotRead({subKey, partNo}))
                    dispatch(cuzlerFunctionTriggerActions.toggleVisibility())
                  }else{
                    dispatch(isReadDialogAlertActions.toggleVisibility())
                  }
                }}
              >
                {'Hayır'}
              </Button>

            </YesNoButtonLayout>
          </YesNoButtonContainer>

        </YesNoLayout>
      </YesNoContainer>
    </Container>
  );
};

export default isReadDialog;
