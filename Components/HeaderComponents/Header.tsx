import React from 'react'
import { Text, View } from 'react-native'
import { theme } from '../../theme'

export const Header = () => {
  return (
<View style={{...theme.flexCentered,height:100,backgroundColor:"black"}}>
        <Text style={{...theme.textEmphasized,color:"white"}}>Giphy Demo</Text>
    </View>
  )
}
  