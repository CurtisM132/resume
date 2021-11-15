import React from 'react';

import { PDFDownloadLink, PDFViewer, Page, Document, View, StyleSheet } from '@react-pdf/renderer';

import Header from "./features/header/Header";
import Sidebar from "./features/sidebar/Sidebar";
import MainContent from "./features/main-content/MainContent";

import './App.css';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4'
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
});

const MyDoc = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header />
      <View style={styles.flexRow}>
        <Sidebar />
        <MainContent />
      </View>
    </Page>
  </Document>
);

// const App = () => (
//   <div>
//     <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
//       {({ blob, url, loading, error }) =>
//         loading ? 'Loading document...' : 'Download now!'
//       }
//     </PDFDownloadLink>
//   </div>
// );

const App = () => (
  <PDFViewer>
    <MyDoc />
  </PDFViewer>
);

// const App = () => (
//   <MyDoc />
// );

export default App;
