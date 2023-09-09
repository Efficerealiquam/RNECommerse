import { View,TouchableOpacity as ButtonMobile } from 'react-native'
import React from 'react'
import styles from '../styles/search.style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES } from '../constants'
import { Feather } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler'

const Search = () => {
  return (
    <SafeAreaView>
                <View style={styles.searchContainer} >
                <ButtonMobile>
                    <Feather name='search' size={24} style={styles.searchIcon} />
                </ButtonMobile>
                <View style={styles.searchWrapper} >
                    <TextInput
                        style={styles.searchInput}
                        value=''
                        onPressIn={() => {}}
                        placeholder='What are you looking for'
                    />
                </View>
                <View>
                    <ButtonMobile style={styles.searchBtn} >
                        <Feather name='search' size={24} color={COLORS.offwhite} />
                    </ButtonMobile>
                </View>
            </View>
    </SafeAreaView>
  )
}

export default Search
