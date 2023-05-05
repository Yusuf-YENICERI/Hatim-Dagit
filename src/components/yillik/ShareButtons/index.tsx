








import React, { useState } from 'react'
import Language from 'strings'
import { CopyContainer, CopyIcon, CopyItem, ShareContainer, ShareIcon, ShareItem } from './styles'

import copy from '../../../icons/copy.svg';
import share from '../../../icons/share.svg';
import close from '../../../icons/close.svg';
import ShareBox from './ShareBox';

const ShareButtons = ({hatimHeader}:{hatimHeader:string|undefined}) => {

  const [hideShareBox, setHideShareBox] = useState(false);
  const [linkCopiedText, setLinkCopiedText] = useState(Language["/cuz"].After.Copy.Before);

  
  const changeShareBoxVisibility = () => {
    setHideShareBox(!hideShareBox)
}

  return (
    <>

      <ShareBox hatimHeader={hatimHeader} shareBoxVisibility={hideShareBox} changeShareBoxVisibility={changeShareBoxVisibility} />


      <ShareContainer
        onClick={() => {
          changeShareBoxVisibility()
        }}
      >
        <ShareIcon src={share} iconSize={'30px'}></ShareIcon>
        <ShareItem>{Language['/cuz'].After.Share}</ShareItem>
      </ShareContainer>

      <CopyContainer
        onClick={() => {
          let newLocation = window.location.href.replace('localhost:3000', 'hatimdagit.com')
          newLocation = newLocation.replace('hatim-dagit.web.app', 'hatimdagit.com')
          var text = newLocation
          navigator.clipboard.writeText(text).then(
            function () {
              setLinkCopiedText(Language['/cuz'].After.Copy.After)
            },
            function (err) {},
          )
        }}
      >
        <CopyIcon src={copy} iconSize={'30px'}></CopyIcon>
        <CopyItem>{linkCopiedText}</CopyItem>
      </CopyContainer>
    </>
  )
}

export default ShareButtons
