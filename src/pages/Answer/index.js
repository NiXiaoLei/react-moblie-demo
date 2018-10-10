import React from 'react'
import Loadable from 'react-loadable';
import PublicLoading from '../../components/Loading'
const LoadableComponent = Loadable({
  loader:() => import('./Answer'),
  loading:() => <PublicLoading />
})

export default () => <LoadableComponent/>