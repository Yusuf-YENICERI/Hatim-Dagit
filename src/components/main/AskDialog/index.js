import Language from '../../../strings/index';
import {
  DialogBox,
  DialogContainer,
  DialogIcon,
  DialogText,
  DialogTextSpan,
  DialogInputBox,
  DialogTextArea,
} from '../Question/QuestionElements';
import {NavBtnLink} from '../../common/Navbar/NavbarElements';
import close from '../../../icons/close.svg';
import {Checkbox} from '@mantine/core';
import {useState, useEffect} from 'react';
import Counter from '../Counter';

const AskDialog = ({
  firebase,
  setHatimKey,
  setYazilar,
  propHideDialogBox,
  askDialogBox,
  setAskDialogBox,
  hatimKonu,
  setHatimKonu,
  hatimBitisTarihi,
  setHatimBitisTarihi,
  changeAskDialogBox,
  isRamazan,
  setHatimDescription,
  hatimDescription,
  setHatimCount,
  hatimCount,
}) => {
  const [makeNewHatim, setMakeNewHatim] = useState (false);

  return (
    <DialogBox visibility={askDialogBox} height={'510px'} top={'5%'}>

      <DialogContainer>

        <DialogIcon
          src={close}
          iconSize={'30px'}
          alignEnd={true}
          onClick={() => {
            changeAskDialogBox ();
          }}
        />

        <DialogText fontSize={'20px'}>
          {Language['/'].Button.Header.Text}
        </DialogText>

        <div style={{height: '30px'}} />

        <div style={{display: 'flex', flexDirection: 'column'}}>
          <DialogTextSpan>
            {Language['/'].Button.Header.InputSpan[0]}
          </DialogTextSpan>
          <DialogInputBox
            placeholder={Language['/'].Button.Header.Input[0]}
            onChange={event => {
              setHatimKonu (event.target.value);
            }}
          />
        </div>

        <div style={{height: '10px'}} />

        <div style={{display: 'flex', flexDirection: 'column'}}>
          <DialogTextSpan>
            {Language['/'].Button.Header.InputSpan[1]}
          </DialogTextSpan>
          <DialogTextArea
            rows="2"
            type=""
            placeholder={Language['/'].Button.Header.Input[1]}
            onChange={event => {
              setHatimDescription (event.target.value);
            }}
          />
        </div>

        <div style={{height: '10px'}} />

        <div style={{display: 'flex', flexDirection: 'column'}}>
          <DialogTextSpan>
            {Language['/'].Button.Header.InputSpan[2]}
          </DialogTextSpan>
          <DialogInputBox
            type="date"
            onChange={event => {
              setHatimBitisTarihi (event.target.value);
            }}
          />
        </div>

        {<div style={{height: '10px'}} />}

        {makeNewHatim == false &&
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <DialogTextSpan>
              {Language['/'].Button.Header.InputSpan[3]}
            </DialogTextSpan>
            <Counter hatimCount={hatimCount} setHatimCount={setHatimCount} />
          </div>}

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '250px',
            marginTop: '10px',
          }}
        >
          <Checkbox
            styles={{label: {fontSize: '0.8em', fontFamily: 'Righteous'}}}
            color="lime"
            value={false}
            onChange={event => {
              setHatimCount (1);
              setMakeNewHatim (event.currentTarget.checked);
            }}
            label={Language['/'].Button.Header.InputSpan[4]}
          />
        </div>

      </DialogContainer>

      <NavBtnLink
        onClick={async () => {
          setAskDialogBox (false);
          propHideDialogBox.setHideDialogBox (true);
          let _hatimKey = await firebase.yeniHatim (
            hatimKonu,
            hatimBitisTarihi,
            false,
            isRamazan,
            hatimDescription,
            makeNewHatim,
            hatimCount
          );
          setHatimKey (_hatimKey);
          const route = isRamazan ? 'ramazan' : 'cuz';
          setYazilar ({
            baslik: Language['/'].Button.Final.After.Header,
            link: `https://hatimdagit.com/${route}/` + _hatimKey,
            cevap: Language['/'].Button.Final.After.Button,
          });
        }}
      >
        {Language['/'].Button.Header.Button}
      </NavBtnLink>

    </DialogBox>
  );
};

export default AskDialog;
