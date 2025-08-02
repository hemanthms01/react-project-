 import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function EnterLocation({navigation}) {
  const inputRef = useRef();
  const [search, setSearch] = useState('Golden Avenue');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.enterlocContainer}>
        <TouchableOpacity style={styles.backBtn}>
          <Text style={styles.backBtnText} onPress={()=>navigation.goBack()}>←</Text>
        </TouchableOpacity>

        <Text style={styles.enterlocTitle}>Enter Your Location</Text>

        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            ref={inputRef}
            style={styles.searchInput}
            placeholder="Golden Avenue"
            value={search}
            onChangeText={(text) => setSearch(text)}
          />
          {search !== '' && (
            <TouchableOpacity
              onPress={() => {
                setSearch('');
                inputRef.current?.focus();
              }}
              style={styles.clearBtn}
            >
              <Text style={styles.clearBtnText}>✕</Text>
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity style={styles.currentBtn}>
          <Text style={styles.currentIcon}>📍</Text>
          <Text>Use my current location</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <Text style={styles.resultLabel}>SEARCH RESULT</Text>

        <TouchableOpacity style={styles.resultItem}>
          <Text style={styles.resultIcon}>📌</Text>
          <View style={styles.resultInfo}>
            <Text style={styles.resultTitle}>Golden Avenue</Text>
            <Text style={styles.resultDesc}>8502 Preston Rd. Ingl..</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 18,
    paddingBottom: 40,
    alignItems: 'center',
  },

  // LOCATION
  locationContainer: {
    width: screenWidth,
    maxWidth: 430,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 32,
  },
  locationIconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  locationPin: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#888',
  },
  locationTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
    marginBottom: 10,
    textAlign: 'center',
  },
  locationSubtitle: {
    color: '#888',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 32,
  },
  locationBtn: {
    width: '100%',
    backgroundColor: '#888',
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 18,
    alignItems: 'center',
  },
  locationBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  locationManualBtn: {
    color: '#888',
    fontSize: 16,
    textDecorationLine: 'underline',
  },

  // ENTER LOCATION
  enterlocContainer: {
    width: '100%',
    maxWidth: 430,
  },
  backBtn: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 10,
    zIndex: 1,
  },
  backBtnText: {
    fontSize: 24,
    color: '#222',
  },
  enterlocTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
    textAlign: 'center',
    marginBottom: 24,
    marginTop: 32,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    borderWidth: 1.5,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    paddingHorizontal: 8,
    height: 48,
    marginBottom: 18,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#222',
  },
  clearBtn: {
    paddingHorizontal: 4,
  },
  clearBtnText: {
    fontSize: 16,
    color: '#bbb',
  },
  currentBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  currentIcon: {
    marginRight: 10,
    fontSize: 16,
  },
  divider: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    marginVertical: 10,
  },
  resultLabel: {
    color: '#bbb',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 1,
    marginBottom: 8,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    paddingVertical: 8,
  },
  resultIcon: {
    marginTop: 2,
    fontSize: 16,
  },
  resultInfo: {
    flexDirection: 'column',
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  resultDesc: {
    color: '#888',
    fontSize: 15,
    marginTop: 2,
  },
});
