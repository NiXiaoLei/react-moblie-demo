import React, { Component } from 'react'
import ContentLoader, { Facebook } from 'react-content-loader'

const PublicLoader = props => (
  <ContentLoader 
    height={160}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="48" y="38" rx="3" ry="3" width="72.8" height="10" /> 
    <rect x="131.5" y="38" rx="3" ry="3" width="104" height="10" /> 
    <rect x="246.3" y="38" rx="3" ry="3" width="10.4" height="10" /> 
    <rect x="63.66" y="58" rx="3" ry="3" width="135.20000000000002" height="10" /> 
    <rect x="209.77" y="58" rx="3" ry="3" width="135.20000000000002" height="10" /> 
    <rect x="63.66" y="78" rx="3" ry="3" width="93.60000000000001" height="10" /> 
    <rect x="168.03" y="78" rx="3" ry="3" width="62.400000000000006" height="10" /> 
    <rect x="241.09" y="78" rx="3" ry="3" width="62.400000000000006" height="10" /> 
    <rect x="48" y="98" rx="3" ry="3" width="31.200000000000003" height="10" />
  </ContentLoader>
)

export default PublicLoader