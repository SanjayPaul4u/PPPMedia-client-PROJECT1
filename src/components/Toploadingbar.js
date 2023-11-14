import React, { useContext } from 'react'
import LoadingBar from 'react-top-loading-bar'
import ProgressContext from '../context/progressCount/progressContext';

function Toploadingbar() {
    const progress_context = useContext(ProgressContext);
    const {progress} = progress_context;

  return (
    <LoadingBar
        height={3.5}
        color='#f11946'
        progress={progress}
      />
  )
}

export default Toploadingbar